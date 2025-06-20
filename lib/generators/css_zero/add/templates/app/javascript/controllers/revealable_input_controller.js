import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input" ]

  reveal() {
    this.element.classList.toggle("input--revealed")
    this.inputTarget.type = this.#type
  }

  get #type() {
    return this.inputTarget.type === "text" ? "password" : "text"
  }
}
