import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "menu" ]

  show(event) {
    this.menuTarget.style.insetInlineStart = `${event.clientX - 5}px`
    this.menuTarget.style.insetBlockStart  = `${event.clientY - 5}px`
    setTimeout(() => this.menuTarget.showPopover(), 150)
  }
}
