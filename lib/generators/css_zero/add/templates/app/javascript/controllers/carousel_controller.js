import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "content" ]

  next() {
    this.contentTarget.scrollTo({ left: this.#scrollLeft + this.#itemWidth })
  }

  prev() {
    this.contentTarget.scrollTo({ left: this.#scrollLeft - this.#itemWidth })
  }

  get #scrollLeft() {
    return this.contentTarget.scrollLeft
  }

  get #itemWidth() {
    return this.contentTarget.firstElementChild?.offsetWidth || 0
  }
}
