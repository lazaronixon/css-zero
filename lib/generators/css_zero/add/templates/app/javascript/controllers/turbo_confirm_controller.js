import { Controller } from "@hotwired/stimulus"
import Swal from "https://esm.sh/sweetalert2@11.16.0/dist/sweetalert2.js?standalone"

export default class extends Controller {
  static values = {
    cancel: { type: String, default: "Cancel" },
    continue: { type: String, default: "Continue" }
  }

  connect() {
    Turbo.config.forms.confirm = (message, target) => {
      Swal.fire({
        title: message,
        text: target.dataset.turboConfirmText,
        cancelButtonText: this.cancelValue,
        confirmButtonText: this.continueValue,
        icon: "warning",
        showCancelButton: true
      }).then(it => it.isConfirmed)
    }
  }
}
