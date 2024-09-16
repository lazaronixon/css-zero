import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "button" ]

  toggle(event) {
    this.#toggleInput()
    this.#toggleButton()
  }

  #toggleInput() {
    this.inputTarget.type = this.#inputType
  }

  #toggleButton() {
    this.buttonTarget.classList.toggle("btn--plain")
    this.buttonTarget.classList.toggle("btn--secondary")
  }

  get #inputType() {
    return this.inputTarget.type === "password" ? "text" : "password"
  }
}
