import { Controller } from "@hotwired/stimulus"
import { rovingIndex } from "https://esm.sh/roving-ux@1.0.5?standalone"

export default class extends Controller {
  static targets = [ "item" ]

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

  #reset([ entry ]) {
    entry.isIntersecting && this.#start()
  }

  #start() {
    this.#rovingIndex()
    this.#focus()
  }

  #rovingIndex() {
    rovingIndex({ element: this.element, target: "[data-menu-target='item']" })
  }

  #focus() {
    this.itemTargets[0].focus()
  }
}
