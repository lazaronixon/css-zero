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
    !this.#dirty && this.#updateAppearance()
  }

  async #submit() {
    this.#dirty && await this.#save()
  }

  async #save() {
    this.#updateAppearance(true)
    this.#resetTimer()
    await this.#submitForm(this.element)
    this.#updateAppearance()
  }

  async #submitForm(form) {
    const request = new FetchRequest(form.method, form.action, { body: new FormData(form) })
    return await request.perform()
  }

  #updateAppearance(saving = false) {
    if (saving) {
      this.element.setAttribute("aria-busy", true)
      this.submitterTarget.setAttribute("aria-disabled", true)
      this.submitterTarget.disabled = true
    } else {
      this.element.removeAttribute("aria-busy")
      this.submitterTarget.removeAttribute("aria-disabled")
      this.submitterTarget.disabled = false
    }
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
