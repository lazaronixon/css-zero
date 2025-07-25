import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "content" ]

  show() {
    this.contentTarget.show()
  }

  showModal() {
    this.contentTarget.showModal()
  }

  close() {
    this.contentTarget.close()
  }

  closeOnClickOutside({ target }) {
    target.nodeName === "DIALOG" && this.close()
  }
}
