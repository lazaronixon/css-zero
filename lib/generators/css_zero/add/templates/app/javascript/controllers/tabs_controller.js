import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button", "tab" ]
  static values = { selected: String }

  initialize() {
    this.#showSelectedTab()
  }

  select(event) {
    this.selectedValue = event.target.dataset.value
    this.#showSelectedTab()
  }

  #showSelectedTab() {
    this.buttonTargets.forEach(element => {
      element.dataset.selected = element.dataset.value === this.selectedValue
    })

    this.tabTargets.forEach(element => {
      element.hidden = element.dataset.value !== this.selectedValue
    })
  }
}
