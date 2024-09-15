import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "content" ]

  previous() {
    this.contentTarget.scrollTo({ left: this.#scrollLeft - this.#slideSize, behavior: "smooth" })
  }

  next() {
    this.contentTarget.scrollTo({ left: this.#scrollLeft + this.#slideSize, behavior: "smooth" })
  }

  get #scrollLeft() {
    return this.contentTarget.scrollLeft
  }

  get #slideSize() {
    return this.contentTarget.clientWidth
  }
}
