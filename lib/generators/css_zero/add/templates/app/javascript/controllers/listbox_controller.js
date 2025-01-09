import { Controller } from "@hotwired/stimulus"
import Listbox from "https://cdn.skypack.dev/@github/combobox-nav@3.0.1?min"

export default class extends Controller {
  static targets = [ "input", "list" ]

  connect() {
    this.listbox = new Listbox(this.inputTarget, this.listTarget)
  }

  disconnect() {
    this.listbox.destroy()
  }

  start() {
    this.listbox.start()
  }

  stop() {
    this.listbox.stop()
  }
}
