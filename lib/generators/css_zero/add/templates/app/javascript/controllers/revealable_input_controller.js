import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "showIcon", "hideIcon" ]
  static values  = { revealed: Boolean }

  revealedValueChanged() {
    this.#update()
  }

  reveal() {
    this.revealedValue = !this.revealedValue
  }

  #update() {
    this.inputTarget.type      = this.#inputType
    this.showIconTarget.hidden = this.revealedValue
    this.hideIconTarget.hidden = !this.revealedValue
  }

  get #inputType() {
    return this.revealedValue ? "text" : "password"
  }
}
