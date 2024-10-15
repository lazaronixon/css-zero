import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button", "tab" ]
  static values  = { index: Number }

  indexValueChanged() {
    this.#showCurrentTab()
  }

  select({ target }) {
    this.indexValue = this.buttonTargets.indexOf(target)
  }

  prev() {
    const hasPrevious = this.indexValue > 0
    hasPrevious && this.indexValue--
    hasPrevious && this.#focusCurrentButton()
  }

  next() {
    const hasNext = this.indexValue < this.#lastIndex
    hasNext && this.indexValue++
    hasNext && this.#focusCurrentButton()
  }

  #showCurrentTab() {
    this.buttonTargets.forEach((button, index) => {
      button.ariaSelected = index == this.indexValue
      button.tabIndex     = index == this.indexValue ? 0 : -1
    })

    this.tabTargets.forEach((tab, index) => {
      tab.hidden = index !== this.indexValue
    })
  }

  #focusCurrentButton() {
    this.buttonTargets[this.indexValue].focus()
  }

  get #lastIndex() {
    return this.tabTargets.length -1
  }
}
