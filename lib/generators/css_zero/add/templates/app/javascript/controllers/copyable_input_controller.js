import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "button" ]

  async copy() {
    this.#reset()
    this.#writeToClipboard()
  }

  async #writeToClipboard() {
    try {
      await navigator.clipboard.writeText(this.inputTarget.value)
      this.buttonTarget.classList.add("btn--copied")
    } catch {}
  }

  #reset() {
    this.buttonTarget.classList.remove("btn--copied")
    this.#forceReflow()
  }

  #forceReflow() {
    this.buttonTarget.offsetWidth
  }
}
