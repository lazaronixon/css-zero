import { Controller } from "@hotwired/stimulus"

const ANIMATION = "var(--animate-fade-out), var(--animate-slide-out-up)"

export default class extends Controller {
  static targets = [ "input", "button" ]

  async copy() {
    this.#reset()
    this.#writeToClipboard()
  }

  async #writeToClipboard() {
    try {
      await navigator.clipboard.writeText(this.inputTarget.value)
      this.buttonTarget.style.animation = ANIMATION
    } catch {}
  }

  #reset() {
    this.buttonTarget.style.animation = null
    this.#forceReflow()
  }

  #forceReflow() {
    this.buttonTarget.offsetWidth
  }
}
