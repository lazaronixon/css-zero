import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "content" ]

  show({ clientX, clientY }) {
    this.contentTarget.style.insetInlineStart = `${clientX}px`
    this.contentTarget.style.insetBlockStart  = `${clientY}px`
    this.contentTarget.showPopover()
  }

  hide({ target }) {
    !this.contentTarget.contains(target) && this.contentTarget.hidePopover()
  }
}
