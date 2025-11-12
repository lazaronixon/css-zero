import { Controller } from "@hotwired/stimulus"
import Combobox from "https://esm.sh/@github/combobox-nav@3.0.1?standalone"

export default class extends Controller {
  static targets = [ "input", "list", "item" ]

  connect() {
    this.combobox = new Combobox(this.inputTarget, this.listTarget)
    this.combobox.start()
  }

  disconnect() {
    this.combobox.destroy()
  }

  filter({ target }) {
    this.itemTargets.forEach(it => this.#matches(it.dataset.value, target.value) ? it.removeAttribute("hidden") : it.toggleAttribute("hidden", true))
  }

  commit({ target }) {
    Turbo.visit(target.dataset.href, { action: "advance" })
  }

  #matches(text, potentialMatch) {
    return text.toLowerCase().includes(potentialMatch.toLowerCase())
  }
}
