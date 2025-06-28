import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    document.cookie = `timezone=${encodeURIComponent(this.#timezone)}; path=/`
  }

  get #timezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  }
}
