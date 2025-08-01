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

  navigate(event) {
    switch (event.key) {
      case "ArrowUp":
        this.#cancel(event)
        this.#prev()
        break
      case "ArrowDown":
        this.#cancel(event)
        this.#next()
        break
      case "PageUp":
      case "Home":
        this.#cancel(event)
        this.#first()
        break
      case "PageDown":
      case "End":
        this.#cancel(event)
        this.#last()
        break
    }
  }

  #cancel(event) {
    event.stopPropagation()
    event.preventDefault()
  }

  #reset([ entry ]) {
    entry.isIntersecting && this.#first()
  }

  #prev() {
    if (this.indexValue > 0) {
      this.indexValue--
      this.#update()
    }
  }

  #next() {
    if (this.indexValue < this.#lastIndex) {
      this.indexValue++
      this.#update()
    }
  }

  #first() {
    this.indexValue = 0
    this.#update()
  }

  #last() {
    this.indexValue = this.#lastIndex
    this.#update()
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
