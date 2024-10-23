import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select";

export default class extends Controller {
  static values = { variant: String }

  connect() {
    if (this.variantValue === "tags") {
      this.tomSelect = new TomSelect(this.element, this.#tagsOptions)
    } else {
      this.tomSelect = new TomSelect(this.element)
    }
  }

  disconnect() {
    this.tomSelect.destroy()
  }

  get #tagsOptions() {
    return { persist: false, createOnBlur: true, create: true }
  }
}
