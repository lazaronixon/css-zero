import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "details" ]

  open() {
    this.detailsTarget.open = true
  }

  close() {
    this.detailsTarget.open = false
  }

  toggle() {
    this.detailsTarget.open ? this.close() : this.open()
  }
}
