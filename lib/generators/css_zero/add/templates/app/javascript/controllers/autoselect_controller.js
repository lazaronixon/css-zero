import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    if (this.autoselect) this.element.select()
  }

  get autoselect() {
    return this.element.autofocus
  }
}
