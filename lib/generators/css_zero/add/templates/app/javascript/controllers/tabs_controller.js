import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button", "tab" ]
  static values  = { index: Number }

  indexValueChanged(index, previousIndex) {
    this.#showCurrentTab(previousIndex !== undefined)
  }

  select({ target }) {
    this.indexValue = this.buttonTargets.indexOf(target)
  }

  prev() {
    this.indexValue > 0 && this.indexValue--
  }

  next() {
    this.indexValue < this.tabTargets.length -1 && this.indexValue++
  }

  #showCurrentTab(shouldFocus) {
    this.buttonTargets.forEach((element, index) => {
      element.ariaSelected = index == this.indexValue
      element.tabIndex     = index == this.indexValue ? 0 : -1
    })

    this.tabTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue
    })

    if (shouldFocus) {
      this.buttonTargets[this.indexValue].focus()
    }
  }
}
