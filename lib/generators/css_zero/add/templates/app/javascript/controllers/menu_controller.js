import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "item" ]
  static values  = { index: Number }

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

  prev() {
    if (this.indexValue > 0) {
      this.indexValue--
      this.#update()
    }
  }

  next() {
    if (this.indexValue < this.#lastIndex) {
      this.indexValue++
      this.#update()
    }
  }

  #reset([ entry ]) {
    if (entry.isIntersecting) {
      this.indexValue = 0
      this.#update()
    }
  }

  #update() {
    this.#updateTabstops()
    this.#focusCurrentItem()
  }

  #updateTabstops() {
    this.itemTargets.forEach((it, index) => {
      it.tabIndex = index === this.indexValue ? 0 : -1
    })
  }

  #focusCurrentItem() {
    this.itemTargets[this.indexValue].focus()
  }

  get #lastIndex() {
    return this.itemTargets.length -1
  }
}
