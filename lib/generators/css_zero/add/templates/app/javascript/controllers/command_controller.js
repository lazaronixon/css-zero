import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  #observer

  initialize() {
    this.#observer = new IntersectionObserver(this.#reset.bind(this))
  }

  connect() {
    this.#observer.observe(this.element)
  }

  disconnect() {
    this.#observer.disconnect()
  }

  visit({ target }) {
    Turbo.visit(target.dataset.href, { action: "advance" })
  }

  #reset([ entry ]) {
    entry.isIntersecting && this.#start()
  }

  #start() {
    this.element.reset()
  }
}
