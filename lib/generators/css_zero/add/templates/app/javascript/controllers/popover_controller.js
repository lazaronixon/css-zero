import { Controller } from "@hotwired/stimulus"

const BOTTOM_THRESHOLD = 0

export default class extends Controller {
  static targets = [ "menu" ]
  static classes = [ "flip" ]

  show() {
    this.menuTarget.show()
    this.#orient()
  }

  close() {
    this.menuTarget.close()
    this.#orient()
  }

  toggle() {
    this.menuTarget.open ? this.close() : this.show()
  }

  closeOnClickOutside({ target }) {
    if (!this.element.contains(target)) this.close()
  }

  #orient() {
    this.menuTarget.classList.toggle(this.flipClass, this.#distanceToBottom < BOTTOM_THRESHOLD)
  }

  get #distanceToBottom() {
    return window.innerHeight - this.#boundingClientRect.bottom
  }

  get #boundingClientRect() {
    return this.menuTarget.getBoundingClientRect()
  }
}
