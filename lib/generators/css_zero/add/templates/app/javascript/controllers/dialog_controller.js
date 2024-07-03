import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "box" ]

  show() {
    this.boxTarget.show()
  }

  showModal() {
    this.boxTarget.showModal()
  }

  close() {
    this.boxTarget.close()
  }

  closeOnClickOutside({ target }) {
    if (target.nodeName === "DIALOG") this.close()
  }
}
