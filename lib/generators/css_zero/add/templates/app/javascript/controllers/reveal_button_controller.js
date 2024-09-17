import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input" ]

  reveal() {
    this.inputTarget.type = this.#inputType
  }

  get #inputType() {
    return this.inputTarget.type === "text" ? "password" : "text"
  }
}