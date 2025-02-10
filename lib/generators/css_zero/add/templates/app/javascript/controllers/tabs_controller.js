import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button", "tab" ]
  static values  = { index: Number }

  connect() {
    this.#showCurrentTab()
  }

  select({ target }) {
    this.indexValue = this.buttonTargets.indexOf(target)
    this.#showCurrentTab()
  }

  prev() {
    if (this.indexValue > 0) {
      this.indexValue--
      this.#showCurrentTab()
      this.#focusCurrentButton()
    }
  }

  next() {
    if (this.indexValue < this.#lastIndex) {
      this.indexValue++
      this.#showCurrentTab()
      this.#focusCurrentButton()
    }
  }

  #showCurrentTab() {
    this.buttonTargets.forEach((it, index) => {
      it.ariaSelected = index === this.indexValue
      it.tabIndex = index === this.indexValue ? 0 : -1
    })

    this.tabTargets.forEach((it, index) => {
      it.hidden = index !== this.indexValue
    })
  }

  #focusCurrentButton() {
    this.buttonTargets[this.indexValue].focus()
  }

  get #lastIndex() {
    return this.tabTargets.length -1
  }
}
