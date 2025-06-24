import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    document.documentElement.dataset.colorScheme = localStorage.getItem("color_scheme")
  }

  setLight() {
    document.documentElement.dataset.colorScheme = "light"
    localStorage.setItem("color_scheme", "light")
  }

  setDark() {
    document.documentElement.dataset.colorScheme = "dark"
    localStorage.setItem("color_scheme", "dark")
  }

  setSystem() {
    document.documentElement.dataset.colorScheme = ""
    localStorage.removeItem("color_scheme")
  }
}