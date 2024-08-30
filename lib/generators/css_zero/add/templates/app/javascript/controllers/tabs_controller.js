import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button", "tab" ]
  static values  = { selected: String }

  initialize() {
    this.#showSelectedTab()
  }

  select({ target }) {
    this.selectedValue = target.dataset.value
    this.#showSelectedTab()
  }

  #showSelectedTab() {
    this.buttonTargets.forEach(element => {
      element.ariaSelected = element.dataset.value === this.selectedValue
    })

    this.tabTargets.forEach(element => {
      element.hidden = element.id !== this.selectedValue
    })
  }
}
