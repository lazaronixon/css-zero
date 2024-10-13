import { Controller } from "@hotwired/stimulus"

const BOTTOM_THRESHOLD = 0

export default class extends Controller {
  static targets = [ "button", "menu" ]
  static classes = [ "flip" ]

  #closeTimer

  show() {
    this.#resetTimer()
    this.menuTarget.show()
    this.#updateExpanded()
    this.#orient()
  }

  close() {
    this.menuTarget.close()
    this.#updateExpanded()
  }

  closeLater() {
    this.#closeTimer = setTimeout(() => this.close(), 300)
  }

  toggle() {
    this.menuTarget.open ? this.close() : this.show()
  }

  closeOnClickOutside({ target }) {
    !this.element.contains(target) && this.close()
  }

  #resetTimer() {
    clearTimeout(this.#closeTimer)
  }

  #orient() {
    this.menuTarget.classList.toggle(this.flipClass, this.#distanceToBottom < BOTTOM_THRESHOLD)
  }

  #updateExpanded() {
    this.buttonTarget.ariaExpanded = this.menuTarget.open
  }

  get #distanceToBottom() {
    return window.innerHeight - this.#boundingClientRect.bottom
  }

  get #boundingClientRect() {
    return this.menuTarget.getBoundingClientRect()
  }
}
