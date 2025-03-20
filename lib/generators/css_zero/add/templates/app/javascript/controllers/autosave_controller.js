import { Controller } from "@hotwired/stimulus"
import { FetchRequest } from "https://esm.sh/@rails/request.js@0.0.11?standalone"

const AUTOSAVE_INTERVAL = 3000

export default class extends Controller {
  static targets = [ "submitter" ]

  #timer = null

  disconnect() {
    this.#submit()
  }

  change() {
    !this.#dirty && this.#scheduleSave()
    !this.#dirty && this.#updateAppearance(false)
  }

  async #submit() {
    this.#dirty && await this.#save()
  }

  async #save() {
    this.#updateAppearance(true)
    this.#resetTimer()
    await this.#submitForm(this.element)
    this.#updateAppearance(false)
  }

  async #submitForm(form) {
    const request = new FetchRequest(form.method, form.action, { body: new FormData(form) })
    return await request.perform()
  }

  #updateAppearance(saving) {
    this.element.ariaBusy = saving
    this.submitterTarget.ariaDisabled = saving
    this.submitterTarget.disabled = saving
  }

  #scheduleSave() {
    this.#timer = setTimeout(() => this.#save(), AUTOSAVE_INTERVAL)
  }

  #resetTimer() {
    clearTimeout(this.#timer); this.#timer = null
  }

  get #dirty() {
    return !!this.#timer
  }
}
