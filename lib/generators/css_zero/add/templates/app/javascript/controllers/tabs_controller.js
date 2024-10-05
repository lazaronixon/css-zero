import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button", "tab" ]
  static values  = { index: Number }

  indexValueChanged() {
    this.#showSelectedTab()
  }

  select({ params }) {
    this.indexValue = params.index
  }

  prev() {
    if (this.indexValue > 0) this.indexValue--
  }

  next() {
    if (this.indexValue < this.#lastIndex) this.indexValue++
  }

  #showSelectedTab() {
    this.buttonTargets.forEach((element, index) => {
      element.ariaSelected = index === this.indexValue
    })

    this.tabTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue
    })
  }

  get #lastIndex() {
    return this.tabTargets.length -1
  }
}
