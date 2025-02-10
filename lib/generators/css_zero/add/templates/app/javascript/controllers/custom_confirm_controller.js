import { Controller } from "@hotwired/stimulus"
import Swal from "https://esm.sh/sweetalert2@11.16.0/dist/sweetalert2.js?standalone"

export default class extends Controller {
  connect() {
    Turbo.config.forms.confirm = this.#confirm
  }

  #confirm(message, element) {
    return Swal.fire({ title: message, text: element.dataset.turboConfirmText, icon: "warning", showCancelButton: true }).then(result => result.isConfirmed)
  }
}
