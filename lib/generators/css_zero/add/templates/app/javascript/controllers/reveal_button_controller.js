import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "image" ]
  static values  = { showIcon: String, hideIcon: String }

  reveal() {
    this.inputTarget.type = this.#inputType
    this.imageTarget.src  = this.#imageValue
  }

  get #inputType() {
    return this.inputTarget.type === "text" ? "password" : "text"
  }

  get #imageValue() {
    return this.inputTarget.type === "text" ? this.hideIconValue : this.showIconValue
  }
}