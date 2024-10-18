import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "item" ]
  static values  = { index: Number }

  connect() {
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

  reset() {
    this.indexValue = 0
    this.#updateTabstops()
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
