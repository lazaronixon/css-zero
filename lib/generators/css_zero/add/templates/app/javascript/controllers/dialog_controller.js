import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "menu" ]

  show() {
    this.menuTarget.show()
  }

  showModal() {
    this.menuTarget.showModal()
  }

  close() {
    this.menuTarget.close()
  }

  closeOnClickOutside({ target }) {
    target.nodeName === "DIALOG" && this.close()
  }
}
