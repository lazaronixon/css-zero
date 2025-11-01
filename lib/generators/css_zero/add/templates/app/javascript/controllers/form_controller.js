import { Controller } from "@hotwired/stimulus"
import debounce from "https://esm.sh/just-debounce-it@3.2.0?standalone"

export default class extends Controller {
  static targets = [ "cancel", "submit" ]

  initialize() {
    this.debouncedSubmit = debounce(this.submit.bind(this), 300)
  }

  submit({ params: { submitter } }) {
    if (submitter) {
      this.element.requestSubmit(this.#find(submitter))
    } else {
      this.element.requestSubmit()
    }
  }

  reset() {
    this.element.reset()
  }

  cancel() {
    this.cancelTarget?.click()
  }

  preventAttachment(event) {
    event.preventDefault()
  }

  disableSubmitWhenInvalid() {
    if (this.element.checkValidity()) {
      this.submitTarget.removeAttribute("disabled")
    } else {
      this.submitTarget.toggleAttribute("disabled", true)
    }
  }

  #find(id) {
    return document.getElementById(id) || this.#notFound(id)
  }

  #notFound(id) {
    throw new Error(`Submitter with ID "${id}" not found`)
  }
}
