import { Controller } from "@hotwired/stimulus"
import { Chart, registerables } from "https://esm.sh/chart.js@4.5.1?standalone"

export default class extends Controller {
  static values = { type: { type: String, default: "line" }, data: Object, options: Object }

  initialize() {
    const style = getComputedStyle(document.body)
    Chart.register(...registerables)
    Chart.defaults.backgroundColor = style.backgroundColor
    Chart.defaults.borderColor = style.borderColor
    Chart.defaults.color = style.color
    Chart.defaults.font.family = style.fontFamily
    Chart.defaults.font.size = 12
    Chart.defaults.elements.bar.borderRadius = 6
    Chart.defaults.elements.arc.borderRadius = 6
    Chart.defaults.elements.line.tension = 0.35
    Chart.defaults.elements.point.radius = 0
    Chart.defaults.interaction.mode = "index"
    Chart.defaults.interaction.intersect = false
    Chart.defaults.scales.category.grid = { display: false }
    Chart.defaults.scale.border.display = false
    Chart.defaults.plugins.legend.labels.usePointStyle = true
    Chart.defaults.plugins.tooltip.backgroundColor = style.backgroundColor
    Chart.defaults.plugins.tooltip.bodyColor = style.color
    Chart.defaults.plugins.tooltip.borderColor = style.borderColor
    Chart.defaults.plugins.tooltip.borderWidth = 1
    Chart.defaults.plugins.tooltip.boxPadding = 6
    Chart.defaults.plugins.tooltip.caretSize = 0
    Chart.defaults.plugins.tooltip.titleColor = style.color
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
