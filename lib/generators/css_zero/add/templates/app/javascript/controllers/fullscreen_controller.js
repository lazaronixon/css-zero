import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button" ]

  connect() {
    if (!this.#supportsFullScreen) this.buttonTarget.remove()
  }

  toggle() {
    this.#fullScreenMode ? this.#exitFullscreen() : this.#requestFullscreen()
  }

  #exitFullscreen() {
    document.exitFullscreen()
  }

  #requestFullscreen() {
    document.documentElement.requestFullscreen()
  }

  get #supportsFullScreen() {
    return this.element.requestFullscreen
  }

  get #fullScreenMode() {
    return document.fullscreenElement
  }
}
