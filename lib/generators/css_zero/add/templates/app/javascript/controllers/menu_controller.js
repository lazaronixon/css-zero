import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "item" ]
  static values  = { index: Number }

  indexValueChanged() {
    this.#removeTabstops()
    this.#focusCurrentItem()
  }

  prev() {
    this.indexValue > 0 && this.indexValue--
  }

  next() {
    this.indexValue < this.#lastIndex && this.indexValue++
  }

  reset() {
    this.indexValue = 0
  }

  #removeTabstops() {
    this.itemTargets.forEach(item => item.tabIndex = -1)
  }

  #focusCurrentItem() {
    this.itemTargets[this.indexValue].tabIndex = 0
    this.itemTargets[this.indexValue].focus()
  }

  get #lastIndex() {
    return this.itemTargets.length -1
  }
}
