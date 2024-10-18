import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "item" ]
  static values  = { index: Number }

  connect() {
    this.#updateTabstops()
  }

  reset() {
    this.indexValue = 0
    this.#updateTabstops()
  }

  prev() {
    if (this.indexValue > 0) {
      this.indexValue--
      this.#updateTabstops()
      this.#focusCurrentItem()
    }
  }

  next() {
    if (this.indexValue < this.#lastIndex) {
      this.indexValue++
      this.#updateTabstops()
      this.#focusCurrentItem()
    }
  }

  #updateTabstops() {
    this.itemTargets.forEach((element, index) => {
      element.tabIndex = index === this.indexValue ? 0 : -1
    })
  }

  #focusCurrentItem() {
    this.itemTargets[this.indexValue].focus()
  }

  get #lastIndex() {
    return this.itemTargets.length -1
  }
}
