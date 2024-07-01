import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { target: String }

  close() {
    document.getElementById(this.targetValue).close()
  }

  show() {
    document.getElementById(this.targetValue).show()
  }

  showModal() {
    document.getElementById(this.targetValue).showModal()
  }
}
