import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "copyIcon", "successIcon" ]
  static values  = { copied: Boolean }

  #copiedTimeout = null

  copiedValueChanged() {
    this.#update()
  }

  copy() {
    this.#copyToClipboard()
    this.#reset()
  }

  #copyToClipboard() {
    try {
      navigator.clipboard.writeText(this.inputTarget.value)
      this.copiedValue = true
    } catch (error) {
      console.warn(error.message);
    }
  }

  #reset() {
    clearTimeout(this.#copiedTimeout)
    this.#copiedTimeout = setTimeout(() => { this.copiedValue = false }, 3000)
  }

  #update() {
    this.copyIconTarget.hidden    = this.copiedValue
    this.successIconTarget.hidden = !this.copiedValue
  }
}
