import { Controller } from "@hotwired/stimulus"
import debounce from "https://esm.sh/just-debounce-it@3.2.0?standalone"

export default class extends Controller {
  static targets = [ "cancel" ]

  #requestLater

  initialize() {
    this.#requestLater = debounce(this.#request.bind(this), 500)
  }

  submit({ params: { submitter, debounce = false } }) {
    debounce ? this.#requestLater(submitter) : this.#request(submitter)
  }

  cancel() {
    this.cancelTarget?.click()
  }

  preventAttachment(event) {
    event.preventDefault()
  }

  #request(submitter) {
    submitter ? this.element.requestSubmit(this.#find(submitter)) : this.element.requestSubmit()
  }

  #find(id) {
    return document.getElementById(id) || this.#notFound(id)
  }

  #notFound(id) {
    throw new Error(`Element with ID "${id}" not found`)
  }
}
