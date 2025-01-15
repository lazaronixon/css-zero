import { Controller } from "@hotwired/stimulus"
import { get } from "https://esm.sh/@rails/request.js@0.0.11?standalone"
import TomSelect from "https://esm.sh/tom-select@2.4.1/base?standalone"

export default class extends Controller {
  static values = { url: String, optionCreate: { type: String, default: "Add" }, noResults: { type: String, default: "No results found" } }

  initialize() {
    this.load = this.load.bind(this)
  }

  connect() {
    if (this.element.nodeName === "INPUT") {
      this.tomSelect = new TomSelect(this.element, this.#inputSettings)
    } else {
      this.tomSelect = new TomSelect(this.element, this.#selectSettings)
    }
  }

  disconnect() {
    this.tomSelect.destroy()
  }

  async load(query, callback) {
    const response     = await get(this.urlValue, { responseKind: "json", query: { q: query } })
    const jsonResponse = await response.json
    callback(jsonResponse)
  }

  get #inputSettings() {
    return { render: this.#render, load: this.#loadSetting, persist: false, createOnBlur: true, create: true }
  }

  get #selectSettings() {
    return { render: this.#render, load: this.#loadSetting }
  }

  get #render() {
    return {
      option_create: (data, escape) => {
        return `<div class="create">${this.optionCreateValue} <b>${escape(data.input)}</b>...</div>`
      },
      no_results: () =>  {
        return `<div class="no-results">${this.noResultsValue}</div>`
      }
    }
  }

  get #loadSetting() {
    return this.hasUrlValue && this.load
  }
}
