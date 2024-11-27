import { Controller } from "@hotwired/stimulus"
import { debounce } from "https://cdn.skypack.dev/es-toolkit@v1.27.0/function"

export default class extends Controller {
  static targets = [ "input", "copyIcon", "successIcon" ]
  static values  = { copied: Boolean }

  initialize() {
    this.reset = debounce(this.reset.bind(this), 2500)
  }

  copiedValueChanged() {
    this.#update()
  }

  copy() {
    this.#copyToClipboard()
    this.reset()
  }

  reset() {
    this.copiedValue = false
  }

  #copyToClipboard() {
    try {
      navigator.clipboard.writeText(this.inputTarget.value)
      this.copiedValue = true
    } catch {
      this.copiedValue = false
    }
  }

  #update() {
    this.copyIconTarget.hidden = this.copiedValue
    this.successIconTarget.hidden = !this.copiedValue
  }
}
