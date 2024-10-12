import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "button" ]

  connect() {
    this.hasButtonTarget && this.#hideButtonIfNotSupported()
  }

  toggle() {
    this.#fullScreenMode ? this.#exitFullscreen() : this.#requestFullscreen()
  }

  #hideButtonIfNotSupported() {
    this.buttonTarget.hidden = !this.#supportsFullScreen
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
