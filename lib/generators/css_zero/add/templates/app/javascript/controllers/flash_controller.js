import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.showPopover()
  }

  hide() {
    this.element.hidePopover()
  }
}
