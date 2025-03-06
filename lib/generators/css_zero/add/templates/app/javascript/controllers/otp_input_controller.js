import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
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
    navigator.credentials.get(this.#options).then(it => {
      this.element.value = it.code
      this.elementForm?.requestSubmit()
    }).catch(error => {})
  }

  get #options() {
    return { otp: { transport: ["sms"] }, signal: this.abortController.signal }
  }

  get #supportsOTP() {
    return "OTPCredential" in window
  }

  get elementForm() {
    return this.element.closest("form")
  }
}
