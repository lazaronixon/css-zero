import { Controller } from "@hotwired/stimulus"
import Combobox from "https://esm.sh/@github/combobox-nav@3.0.2?standalone"
import debounce from "https://esm.sh/just-debounce-it@3.2.0?standalone"

export default class extends Controller {
  static targets = [ "input", "list", "item" ]

  initialize() {
    this.filter = debounce(this.filter.bind(this), 100)
  }

  connect() {
    this.combobox = new Combobox(this.inputTarget, this.listTarget)
    this.combobox.start()
  }

  disconnect() {
    this.combobox.destroy()
  }

  filter({ target }) {
    this.itemTargets.forEach(it => this.#matches(it.dataset.value, target.value) ? this.#hide(it) : this.#show(it) )
  }

  commit({ target }) {
    Turbo.visit(target.dataset.href, { action: "advance" })
  }

  #matches(text, potentialMatch) {
    return text.toLowerCase().includes(potentialMatch.toLowerCase())
  }

  #hide(element) {
    element.toggleAttribute("hidden", false)
  }

  #show(element) {
    element.toggleAttribute("hidden", true)
  }
}
