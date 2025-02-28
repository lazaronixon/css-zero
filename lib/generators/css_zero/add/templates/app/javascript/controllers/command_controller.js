import { Controller } from "@hotwired/stimulus"
import debounce from "https://esm.sh/just-debounce-it@3.2.0?standalone"
import Combobox from "https://esm.sh/@github/combobox-nav@3.0.1?standalone"

export default class extends Controller {
  static targets = [ "input", "list" ]
  static classes = [ "active", "selected" ]

  initialize() {
    this.filter = debounce(this.filter.bind(this), 300)
  }

  connect() {
    this.combobox = new Combobox(this.inputTarget, this.listTarget, { firstOptionSelectionMode: "selected" })
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
    this.listTarget.querySelectorAll(`.${this.selectedClass}`).forEach(it => {
      it.classList.remove(this.selectedClass)
    })
  }

  #selectMatches(value) {
    this.listTarget.querySelectorAll(`[data-value*="${value.toLowerCase()}"]`).forEach(it => {
      it.classList.add(this.selectedClass)
    })
  }

  #activate() {
    this.listTarget.classList.add(this.activeClass)
    this.combobox.resetSelection()
  }

  #deactivate() {
    this.listTarget.classList.remove(this.activeClass)
    this.combobox.resetSelection()
  }
}
