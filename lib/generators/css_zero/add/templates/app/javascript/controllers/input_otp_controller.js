import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input" ]

  initialize() {
    this.abortController = new AbortController()
  }

  disconnect() {
    this.abortController.abort()
  }

  connect() {
    this.#supportsOTP && this.#requestOTP()
  }

  #requestOTP() {
    navigator.credentials.get(this.#options).then(credential => {
      this.inputTarget.value = credential.code
      this.element.requestSubmit()
    }).catch(error => {})
  }

  get #options() {
    return { otp: { transport: ["sms"] }, signal: this.abortController.signal }
  }

  get #supportsOTP() {
    return "OTPCredential" in window
  }
}
