import { Controller } from "@hotwired/stimulus"
import flatpickr from "https://esm.sh/flatpickr@4.6.13?standalone"

export default class extends Controller {
  static targets = [ "details" ]
  static values  = {
    type: String, disable: Array,
    mode: { type: String, default: "single" },
    showMonths: { type: Number, default: 1 },
    dateFormat: { type: String, default: "F d, Y" },
    dateTimeFormat: { type: String, default: "F d, Y H:i" }
  }

  connect() {
    if (this.typeValue == "time") {
      this.flatpickr = flatpickr(this.element, this.#timeOptions)
    } else if (this.typeValue == "datetime") {
      this.flatpickr = flatpickr(this.element, this.#dateTimeOptions)
    } else {
      this.flatpickr = flatpickr(this.element, this.#basicOptions)
    }
  }

  disconnect() {
    this.flatpickr.destroy()
  }

  get #timeOptions() {
    return { dateFormat: "H:i", enableTime: true, noCalendar: true }
  }

  get #dateTimeOptions() {
    return { ...this.#baseOptions, altFormat: this.dateTimeFormatValue, dateFormat: "Y-m-d H:i", enableTime: true }
  }

  get #basicOptions() {
    return { ...this.#baseOptions, altFormat: this.dateFormatValue, dateFormat: "Y-m-d" }
  }

  get #baseOptions() {
    return { altInput: true, disable: this.disableValue, mode: this.modeValue, showMonths: this.showMonthsValue }
  }
}
