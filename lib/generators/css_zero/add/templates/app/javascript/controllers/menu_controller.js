import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "item" ]
  static values  = { index: Number }

  indexValueChanged(index, previousIndex) {
    this.#updateTabstops(previousIndex !== undefined)
  }

  prev() {
    this.indexValue > 0 && this.indexValue--
  }

  next() {
    this.indexValue < this.itemTargets.length -1 && this.indexValue++
  }

  reset() {
    this.indexValue = 0
  }

  #updateTabstops(shouldFocus) {
    this.itemTargets.forEach((element, index) => {
      element.tabIndex = index == this.indexValue ? 0 : -1
    })

    if (shouldFocus) {
      this.itemTargets[this.indexValue].focus()
    }
  }
}
