import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "trigger", "content" ]

  #showTimer
  #hideTimer

  show() {
    this.contentTarget.showPopover({ source: this.triggerTarget })
  }

  hide() {
    this.contentTarget.hidePopover()
  }

  toggle() {
    this.contentTarget.togglePopover({ source: this.triggerTarget })
  }

  debouncedShow() {
    clearTimeout(this.#hideTimer)
    this.#showTimer = setTimeout(() => this.show(), 150)
  }

  debouncedHide() {
    clearTimeout(this.#showTimer)
    this.#hideTimer = setTimeout(() => this.hide(), 150)
  }
}
