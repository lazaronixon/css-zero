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

  async #save() {
    this.#resetTimer()
    this.#toggleSaving(true)
    await this.#submitForm(this.element)
    this.#toggleSaving(false)
  }

  async #submitForm(form) {
    return await new FetchRequest(form.method, form.action, { body: new FormData(form) }).perform()
  }

  #scheduleSave() {
    this.#timer = setTimeout(() => this.#save(), AUTOSAVE_INTERVAL)
  }

  #resetTimer() {
    clearTimeout(this.#timer)
    this.#timer = null
  }

  #toggleSaving(saving) {
    this.element.ariaBusy = saving
    this.submitTarget.disabled = saving
  }

  get #dirty() {
    return !!this.#timer
  }
}
