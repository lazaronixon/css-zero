import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "title", "text" ]
  static values  = { defaultConfirmText: { type: String, default: "This action cannot be undone and may have permanent consequences." } }

  connect() {
    Turbo.config.forms.confirm = this.#confirm.bind(this)
  }

  submit({ target }) {
    this.confirmCallback?.(target.returnValue === "confirm")
  }

  #confirm(message, target) {
    this.titleTarget.textContent = message
    this.textTarget.textContent  = target.dataset.turboConfirmText || this.defaultConfirmTextValue
    this.element.showModal()
    return new Promise(it => (this.confirmCallback = it))
  }
}
