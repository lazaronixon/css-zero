import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "button" ]

  connect() {
    this.update()
  }

  clear() {
    this.inputTarget.value = ""
    this.inputTarget.focus()
    this.update()
  }

  update() {
    this.buttonTarget.hidden = this.#isEmpty
  }

  get #isEmpty() {
    return this.inputTarget.value === ""
  }
}
