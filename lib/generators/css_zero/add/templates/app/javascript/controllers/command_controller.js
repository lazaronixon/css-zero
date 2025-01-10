import { Controller } from "@hotwired/stimulus"
import { debounce } from "https://cdn.skypack.dev/lodash-es@4.17.21?min"
import Combobox from "https://cdn.skypack.dev/@github/combobox-nav@3.0.1?min"

export default class extends Controller {
  static targets = [ "input", "list" ]
  static classes = [ "active", "selected" ]

  initialize() {
    this.filter = debounce(this.filter.bind(this), 300)
  }

  connect() {
    this.combobox = new Combobox(this.inputTarget, this.listTarget)
  }

  disconnect() {
    this.combobox.destroy()
  }

  start() {
    this.combobox.start()
  }

  stop() {
    this.combobox.stop()
  }

  filter({ target }) {
    this.#reset()

    if (target.value != "") {
      this.#selectMatches(target.value)
      this.#activate()
    } else {
      this.#deactivate()
    }
  }

  #reset() {
    this.listTarget.querySelectorAll(`.${this.selectedClass}`).forEach((element) => {
      element.classList.remove(this.selectedClass)
    })
  }

  #selectMatches(value) {
    this.listTarget.querySelectorAll(`[data-value*="${value.toLowerCase()}"]`).forEach((element) => {
      element.classList.add(this.selectedClass)
    })
  }

  #activate() {
    this.listTarget.classList.add(this.activeClass)
  }

  #deactivate() {
    this.listTarget.classList.remove(this.activeClass)
  }
}
