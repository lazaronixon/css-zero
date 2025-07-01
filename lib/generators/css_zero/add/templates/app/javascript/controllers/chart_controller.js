import { Controller } from "@hotwired/stimulus"
import { Chart, registerables } from "https://esm.sh/chart.js@4.5.0?standalone"

export default class extends Controller {
  static values = { type: { type: String, default: "line" }, data: Object, options: Object }

  initialize() {
    Chart.register(...registerables)
    Chart.defaults.backgroundColor = getComputedStyle(document.body).backgroundColor
    Chart.defaults.borderColor = getComputedStyle(document.body).borderColor
    Chart.defaults.color = getComputedStyle(document.body).color
    Chart.defaults.font.family = getComputedStyle(document.body).fontFamily
    Chart.defaults.font.size = 12
  }

  connect() {
    this.chart = new Chart(this.element, this.#settings)
  }

  disconnect() {
    this.chart.destroy()
  }

  get #settings() {
    return { type: this.typeValue, data: this.dataValue, options: this.optionsValue }
  }
}
