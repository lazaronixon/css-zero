import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "cancel" ]

  submit({ params }) {
    if (params.submitter) {
      this.element.requestSubmit(this.#get(params.submitter))
    } else {
      this.element.requestSubmit()
    }
  }

  cancel() {
    this.cancelTarget?.click()
  }

  preventAttachment(event) {
    event.preventDefault()
  }

  #get(id) {
    return document.getElementById(id) || this.#notFound(id)
  }

  #notFound(id) {
    throw new Error(`Element with ID "${id}" not found in the DOM`)
  }
}
