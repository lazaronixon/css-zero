import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "content" ]

  next() {
    this.contentTarget.scrollBy(100, 0)
  }

  prev() {
    this.contentTarget.scrollBy(-100, 0)
  }
}
