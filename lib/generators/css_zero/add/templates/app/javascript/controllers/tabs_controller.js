import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button", "tab" ]
  static values  = { index: Number, default: 0 }

  select({ target }) {
    this.indexValue = target.dataset.index
  }

  indexValueChanged() {
    this.#showSelectedTab()
  }

  #showSelectedTab() {
    this.buttonTargets.forEach((element, index) => {
      element.ariaSelected = index === this.indexValue
    })

    this.tabTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue
    })
  }
}
