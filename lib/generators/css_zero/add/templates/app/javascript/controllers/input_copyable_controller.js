import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input" ]

  async copy() {
    this.#reset()
    this.#writeToClipboard()
  }

  async #writeToClipboard() {
    try {
      await navigator.clipboard.writeText(this.inputTarget.value)
      this.element.classList.add("input--copied")
    } catch {}
  }

  #reset() {
    this.element.classList.remove("input--copied")
    this.#forceReflow()
  }

  #forceReflow() {
    this.element.offsetWidth
  }
}
