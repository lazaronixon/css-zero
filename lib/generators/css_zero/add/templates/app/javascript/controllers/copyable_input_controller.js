import { Controller } from "@hotwired/stimulus"

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

// Helpers

function debounce(fn, delay = 1000) {
  let timeoutId = null

  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), delay)
  }
}
