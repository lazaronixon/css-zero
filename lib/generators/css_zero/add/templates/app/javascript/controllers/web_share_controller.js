import { Controller } from "@hotwired/stimulus"

const APPLICATION_NAME = "my_application"

export default class extends Controller {
  static values = { title: String, text: String, url: String, file: String }

  connect() {
    this.element.hidden = !navigator.canShare
  }

  async share() {
    try {
      await navigator.share(await this.#getShareData())
    } catch {}
  }

  async #getShareData() {
    const data = { title: this.titleValue, text: this.textValue }

    if (this.urlValue) {
      data.url = this.urlValue
    }

    if (this.fileValue) {
      data.files = [await this.#getFileObject()]
    }

    return data
  }

  async #getFileObject() {
    const response = await fetch(this.fileValue)
    const blob = await response.blob()
    const randomPrefix = `${APPLICATION_NAME}_${Math.random().toString(36).slice(2)}`
    const fileName = `${randomPrefix}.${blob.type.split('/').pop()}`

    return new File([ blob ], fileName, { type: blob.type })
  }
}
