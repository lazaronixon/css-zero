import { Controller } from "@hotwired/stimulus"

const COLOR_SCHEME_DARK = "(prefers-color-scheme: dark)"

export default class extends Controller {
  connect() {
    this.element.dataset.colorScheme = this.#colorScheme
    this.element.dataset.preferSystemColorScheme = this.#preferSystemColorScheme
    this.#setupSystemColorSchemeListener()
  }

  setLight() {
    this.element.dataset.colorScheme = "light"
    this.element.dataset.preferSystemColorScheme = false
    localStorage.setItem("color_scheme", "light")
  }

  setDark() {
    this.element.dataset.colorScheme = "dark"
    this.element.dataset.preferSystemColorScheme = false
    localStorage.setItem("color_scheme", "dark")
  }

  setSystem() {
    this.element.dataset.colorScheme = this.#systemColorScheme
    this.element.dataset.preferSystemColorScheme = true
    localStorage.removeItem("color_scheme")
  }

  get #colorScheme() {
    return localStorage.getItem("color_scheme") || this.#systemColorScheme
  }

  get #systemColorScheme() {
    return window.matchMedia(COLOR_SCHEME_DARK).matches ? "dark" : "light"
  }

  get #preferSystemColorScheme() {
    return !localStorage.getItem("color_scheme")
  }

  #setupSystemColorSchemeListener() {
    window.matchMedia(COLOR_SCHEME_DARK).addEventListener("change", () => {
      this.element.dataset.colorScheme = this.#colorScheme
    })
  }
}
