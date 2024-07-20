import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "content" ]

  next() {
    this.contentTarget.scrollTo({ left: this.#scrollLeft + this.#slideSize, behavior: "smooth" })
  }

  previous() {
    this.contentTarget.scrollTo({ left: this.#scrollLeft - this.#slideSize, behavior: "smooth" })
  }

  get #scrollLeft() {
    return this.contentTarget.scrollLeft
  }

  get #slideSize() {
    return this.contentTarget.clientWidth
  }
}
