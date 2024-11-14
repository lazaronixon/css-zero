import { Controller } from "@hotwired/stimulus";

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
    navigator.credentials.get(this.#options).then(otp => {
      this.element.value = otp.code
    }).catch(error => {
      console.log(error)
    })
  }

  get #options() {
    return { otp: { transport: ["sms"] }, signal: this.abortController.signal }
  }

  get #supportsOTP() {
    return "OTPCredential" in window
  }
}
