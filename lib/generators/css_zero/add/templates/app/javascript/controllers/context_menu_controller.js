import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "menu" ]

  show({ clientX, clientY }) {
    this.menuTarget.style.insetInlineStart = `${clientX}px`
    this.menuTarget.style.insetBlockStart  = `${clientY}px`
    this.menuTarget.showPopover()
  }

  hide({ target }) {
    !this.menuTarget.contains(target) && this.menuTarget.hidePopover()
  }
}
