import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "title", "text" ]
  static values  = { defaultConfirmText: { type: String, default: "This action cannot be undone and may have permanent consequences." } }

  #confirmCallback = null

  connect() {
    Turbo.config.forms.confirm = this.#confirm.bind(this)
  }

  disconnect() {
    Turbo.config.forms.confirm = null
  }

  submit({ target }) {
    this.#confirmCallback?.(target.returnValue === "confirm")
  }

  #confirm(message, target) {
    this.titleTarget.textContent = message
    this.textTarget.textContent  = target.dataset.turboConfirmText || this.defaultConfirmTextValue
    this.element.showModal()
    return new Promise(resolve => (this.#confirmCallback = resolve))
  }
}
