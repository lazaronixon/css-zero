import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.showPopover()
  }

  remove() {
    this.element.hidePopover()
  }
}
