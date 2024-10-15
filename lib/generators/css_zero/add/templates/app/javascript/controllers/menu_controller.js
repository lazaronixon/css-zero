import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "item" ]
  static values  = { index: Number }

  indexValueChanged() {
    this.#removeTabstops()
  }

  prev() {
    const hasPrevious = this.indexValue > 0
    hasPrevious && this.indexValue--
    hasPrevious && this.#focusCurrentItem()
  }

  next() {
    const hasNext = this.indexValue < this.#lastIndex
    hasNext && this.indexValue++
    hasNext && this.#focusCurrentItem()
  }

  reset() {
    this.indexValue = 0
    this.#focusCurrentItem()
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
