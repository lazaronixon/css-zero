import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "button" ]

  reveal() {
    this.buttonTarget.classList.toggle("btn--revealed")
    this.inputTarget.type = this.#type
  }

  get #type() {
    return this.inputTarget.type === "text" ? "password" : "text"
  }
}
