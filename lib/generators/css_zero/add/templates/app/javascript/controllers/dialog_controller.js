import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  show() {
    this.element.show()
  }

  showModal() {
    this.element.showModal()
  }

  close() {
    this.element.close()
  }

  closeOnClickOutside({ target }) {
    target.nodeName === "DIALOG" && this.close()
  }
}
