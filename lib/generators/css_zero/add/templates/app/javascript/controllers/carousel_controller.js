import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "content" ]

  next() {
    this.contentTarget.scrollTo({ left: this.#nextPosition, behavior: "smooth" })
  }

  prev() {
    this.contentTarget.scrollTo({ left: this.#prevPosition, behavior: "smooth" })
  }

  get #nextPosition() {
    return this.#scrollLeft + this.#slideSize
  }

  get #prevPosition() {
    return this.#scrollLeft - this.#slideSize
  }

  get #scrollLeft() {
    return this.contentTarget.scrollLeft
  }

  get #slideSize() {
    return this.contentTarget.clientWidth
  }
}
