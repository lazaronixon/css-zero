import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select";

export default class extends Controller {
  static values = {
    createText: { type: String, default: "Add" },
    noResultsText: { type: String, default: "No results found" }
  }

  connect() {
    if (this.element.nodeName === "INPUT") {
      this.tomSelect = new TomSelect(this.element, this.#inputOptions)
    } else {
      this.tomSelect = new TomSelect(this.element, this.#selectOptions)
    }
  }

  disconnect() {
    this.tomSelect.destroy()
  }

  get #inputOptions() {
    return { render: this.#renderOptions, persist: false, createOnBlur: true, create: true }
  }

  get #selectOptions() {
    return { render: this.#renderOptions }
  }

  get #renderOptions() {
    return {
      option_create: (data, escape) => {
        return `<div class="create">${this.createTextValue} <b>${escape(data.input)}</b>...</div>`
      },
      no_results: () =>  {
        return `<div class="no-results">${this.noResultsTextValue}</div>`
      }
    }
  }
}
