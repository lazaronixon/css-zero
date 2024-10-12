import { Controller } from "@hotwired/stimulus"
import { nextFrame } from "helpers/timing_helpers"

export default class extends Controller {
  static targets = [ "item" ]
  static values  = { index: Number }

  indexValueChanged() {
    this.#removeTabstops()
    this.#focusSelectedItem()
  }

  prev() {
    this.indexValue > 0 && this.indexValue--
  }

  next() {
    this.indexValue < this.#lastIndex && this.indexValue++
  }

  reset() {
    this.indexValue = 0
  }

  #removeTabstops() {
    this.itemTargets.forEach(item => item.tabIndex = -1)
  }

  #focusSelectedItem() {
    this.itemTargets[this.indexValue].tabIndex = 0
    this.itemTargets[this.indexValue].focus()
  }

  get #lastIndex() {
    return this.itemTargets.length -1
  }
}
