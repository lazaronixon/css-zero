import { Controller } from "@hotwired/stimulus"
import { MaskInput } from "https://esm.sh/maska@3.1.0?standalone"

export default class extends Controller {
  connect() {
    this.mask = new MaskInput(this.element)
  }

  disconnect() {
    this.mask.destroy()
  }
}
