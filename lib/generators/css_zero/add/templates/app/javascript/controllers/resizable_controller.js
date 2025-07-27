import { Controller } from "@hotwired/stimulus"
import Split from "https://esm.sh/split.js@1.6.5?standalone"

export default class extends Controller {
  static targets = [ "element" ]
  static values  = { direction: { type: String, default: "horizontal" } }

  connect() {
    this.split = Split(this.elementTargets, this.#options)
  }

  disconnect() {
    this.split.destroy()
  }

  get #options() {
    return { sizes: this.#sizes, minSize: this.#minSize, maxSize: this.#maxSize, direction: this.directionValue }
  }

  get #sizes() {
    return this.elementTargets.map(it => parseInt(it.dataset.size) || 0)
  }

  get #minSize() {
    return this.elementTargets.map(it => parseInt(it.dataset.minSize) || 100)
  }

  get #maxSize() {
    return this.elementTargets.map(it => parseInt(it.dataset.maxSize) || Infinity)
  }
}
