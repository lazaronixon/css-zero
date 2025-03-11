import { Controller } from "@hotwired/stimulus"
import { Chart, registerables } from "https://esm.sh/chart.js@4.4.8?standalone"

Chart.register(...registerables)

Chart.defaults.backgroundColor = getCssVariableValue("--color-primary")
Chart.defaults.borderColor = getCssVariableValue("--color-border")
Chart.defaults.color = getCssVariableValue("--color-text")

Chart.defaults.font.family = getCssVariableValue("--font-system-ui")
Chart.defaults.font.size = 12

function getCssVariableValue(variableName) {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim()
}

export default class extends Controller {
  static values = { type: { type: String, default: "line" }, data: Object, options: Object }

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
