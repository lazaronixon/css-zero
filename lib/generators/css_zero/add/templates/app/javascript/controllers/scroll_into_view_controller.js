import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  async connect() {
    await this.#nextFrame()
    this.element.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  #nextFrame() {
    return new Promise(requestAnimationFrame)
  }
}
