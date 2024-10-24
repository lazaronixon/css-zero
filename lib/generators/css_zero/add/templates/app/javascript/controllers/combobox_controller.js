import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select";

export default class extends Controller {
  static values = {
    variant: { type: String, default: "default" },
    createText: { type: String, default: "Add" },
    noResultsText: { type: String, default: "No results found" }
  }

  connect() {
    if (this.variantValue === "tags") {
      this.tomSelect = new TomSelect(this.element, this.#tagsOptions)
    } else {
      this.tomSelect = new TomSelect(this.element, this.#defaultOptions)
    }
  }

  disconnect() {
    this.tomSelect.destroy()
  }

  get #tagsOptions() {
    return { render: this.#renderOptions, persist: false, createOnBlur: true, create: true }
  }

  get #defaultOptions() {
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
