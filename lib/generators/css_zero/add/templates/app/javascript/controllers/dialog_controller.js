import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "menu" ]

  showModal() {
    this.menuTarget.showModal()
  }

  close() {
    this.menuTarget.close()
  }

  closeOnClickOutside({ target }) {
    if (target.nodeName === "DIALOG") this.close()
  }
}
