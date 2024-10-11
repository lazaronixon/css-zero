import { Controller } from "@hotwired/stimulus"
import { debounce } from "helpers/timing_helpers"

const BOTTOM_THRESHOLD = 0

export default class extends Controller {
  static targets = [ "menu" ]
  static classes = [ "flip" ]

  #closeTimer

  show() {
    this.menuTarget.show()
    this.#resetTimer()
    this.#orient()
  }

  close() {
    this.menuTarget.close()
  }

  closeLater() {
    this.#closeTimer = setTimeout(() => this.close(), 300)
  }

  toggle() {
    this.menuTarget.open ? this.close() : this.show()
  }

  closeOnClickOutside({ target }) {
    if (!this.element.contains(target)) this.close()
  }

  #resetTimer() {
    clearTimeout(this.#closeTimer)
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
