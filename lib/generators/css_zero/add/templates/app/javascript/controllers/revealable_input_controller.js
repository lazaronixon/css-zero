import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "input", "image" ]
  static values  = { showImage: String, hideImage: String }

  reveal() {
    this.inputTarget.type = this.#inputType
    this.imageTarget.src  = this.#imageSrc
  }

  get #inputType() {
    return this.inputTarget.type === "text" ? "password" : "text"
  }

  get #imageSrc() {
    return this.inputTarget.type === "text" ? this.hideImageValue : this.showImageValue
  }
}
