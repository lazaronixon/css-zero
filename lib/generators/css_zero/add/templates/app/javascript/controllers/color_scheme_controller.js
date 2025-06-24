import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.dataset.colorScheme = this.#colorScheme
  }

  setLight() {
    this.element.dataset.colorScheme = "light"
    localStorage.setItem("color_scheme", "light")
  }

  setDark() {
    this.element.dataset.colorScheme = "dark"
    localStorage.setItem("color_scheme", "dark")
  }

  setSystem() {
    this.element.dataset.colorScheme = "system"
    localStorage.setItem("color_scheme", "system")
  }

  get #colorScheme() {
    return localStorage.getItem("color_scheme") || "system"
  }
}
