import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input" ]

  reveal() {
    this.#revealPassword()
    this.#hidePasswordWithDelay()
  }

  #revealPassword() {
    this.inputTarget.type = "text"
  }

  #hidePasswordWithDelay() {
    setTimeout(() => { this.inputTarget.type = "password" }, 4000)
  }
}
