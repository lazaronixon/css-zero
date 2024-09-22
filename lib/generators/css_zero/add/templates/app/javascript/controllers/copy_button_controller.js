import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input" ]

  async copy() {
    try {
      await navigator.clipboard.writeText(this.inputTarget.value)
    } catch (error) {
      console.error(error.message);
    }
  }
}
