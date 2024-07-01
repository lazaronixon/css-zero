import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { target: String }

  show() {
    document.querySelector(this.targetValue).showModal()
  }
}
