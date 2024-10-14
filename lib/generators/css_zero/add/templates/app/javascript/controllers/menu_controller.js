import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "item" ]
  static values  = { index: { type: Number, default: -1 } }

  indexValueChanged(index) {
    this.#removeTabstops()
    this.#focusCurrentItem(index !== -1)
  }

  prev() {
    this.indexValue > 0 && this.indexValue--
  }

  next() {
    this.indexValue < this.#lastIndex && this.indexValue++
  }

  reset() {
    this.indexValue = -1
  }

  #removeTabstops() {
    this.itemTargets.forEach(item => item.tabIndex = -1)
  }

  #focusCurrentItem(shouldFocus) {
    if (shouldFocus) this.itemTargets[this.indexValue].tabIndex = 0
    if (shouldFocus) this.itemTargets[this.indexValue].focus()
  }

  get #lastIndex() {
    return this.itemTargets.length -1
  }
}
