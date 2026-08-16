import { Controller } from "@hotwired/stimulus"
import { defineElements } from "https://esm.sh/input-otp-zero@0.0.3?standalone"

export default class extends Controller {
  connect() {
    defineElements()
  }
}
