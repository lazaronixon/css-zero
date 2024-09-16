import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input" ]

  copy() {
    navigator.clipboard.writeText(this.inputTarget.value)
  }
}
