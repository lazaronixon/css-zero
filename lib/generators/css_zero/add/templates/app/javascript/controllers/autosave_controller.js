import { Controller } from "@hotwired/stimulus"
import { FetchRequest } from "https://esm.sh/@rails/request.js@0.0.13?standalone"

const AUTOSAVE_INTERVAL = 3000

export default class extends Controller {
  static targets = [ "submit" ]

  #timer

  disconnect() {
    this.#dirty && this.#save()
  }

  change() {
    !this.#dirty && this.#scheduleSave()
  }

  #save() {
    this.#resetTimer()
    this.#submit()
  }

  #scheduleSave() {
    this.#timer = setTimeout(() => this.#save(), AUTOSAVE_INTERVAL)
  }

  #resetTimer() {
    clearTimeout(this.#timer)
    this.#timer = null
  }

  async #submit() {
    this.#toggleSaving(true)
    await this.#performRequest()
    this.#toggleSaving(false)
  }

  #toggleSaving(saving) {
    this.element.ariaBusy = saving
    this.submitTarget.disabled = saving
  }

  #performRequest() {
    return new FetchRequest(this.#method, this.#action, { body: this.#body }).perform()
  }

  get #method() {
    return this.element.method
  }

  get #action() {
    return this.element.action
  }

  get #body() {
    return new FormData(this.element)
  }

  get #dirty() {
    return !!this.#timer
  }
}
