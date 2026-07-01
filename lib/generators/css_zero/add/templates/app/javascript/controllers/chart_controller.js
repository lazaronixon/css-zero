import { Controller } from "@hotwired/stimulus"
import { Chart, registerables } from "https://esm.sh/chart.js@4.5.1?standalone"

export default class extends Controller {
  static values = { type: { type: String, default: "line" }, data: Object, options: Object }

  initialize() {
    Chart.register(...registerables)
    Chart.defaults.backgroundColor = getComputedStyle(document.body).backgroundColor
    Chart.defaults.borderColor = getComputedStyle(document.body).borderColor
    Chart.defaults.color = getComputedStyle(document.body).color
    Chart.defaults.font.family = getComputedStyle(document.body).fontFamily
    Chart.defaults.font.size = 12
    Chart.defaults.elements.bar.borderRadius = 6
    Chart.defaults.elements.arc.borderRadius = 6
    Chart.defaults.plugins.legend.labels.usePointStyle = true
    Chart.defaults.plugins.tooltip.backgroundColor = Chart.defaults.backgroundColor
    Chart.defaults.plugins.tooltip.bodyColor = Chart.defaults.color
    Chart.defaults.plugins.tooltip.borderColor = Chart.defaults.borderColor
    Chart.defaults.plugins.tooltip.borderWidth = 1
    Chart.defaults.plugins.tooltip.boxPadding = 6
    Chart.defaults.plugins.tooltip.caretSize = 0
    Chart.defaults.plugins.tooltip.titleColor = Chart.defaults.color
    Chart.defaults.plugins.tooltip.usePointStyle = true
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
