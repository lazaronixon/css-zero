import { Controller } from "@hotwired/stimulus"
import tippy from "https://cdn.skypack.dev/tippy.js@6.3.7"

export default class extends Controller {
  static values = { content: String }

  connect() {
    this.tooltip = tippy(this.element, { content: this.contentValue, arrow: false, interactive: true, delay: [700, 0], offset: [0, 3] })
  }

  disconnect() {
    this.tooltip.destroy()
  }
}
