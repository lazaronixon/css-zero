import { Controller } from "@hotwired/stimulus"
import DualRangeInput from "https://esm.sh/@stanko/dual-range-input@1.0.0?standalone"

export default class extends Controller {
  static targets = [ "min", "max" ]
  static values  = { precision: Number, default: 3 }

  connect() {
    this.dualRangeInput = new DualRangeInput(this.minTarget, this.maxTarget, this.precisionValue)
  }

  disconnect() {
    this.dualRangeInput.destroy()
  }
}
