import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values  = { defaultImage: String }
  static targets = [ "image", "input", "removeInput" ]

  previewImage() {
    const file = this.inputTarget.files[0]
    this.imageTarget.src = URL.createObjectURL(this.inputTarget.files[0]);
    this.imageTarget.onload = () => { URL.revokeObjectURL(this.imageTarget.src) }
    this.removeInputTarget.value = false
  }

  clear() {
    this.imageTarget.src = this.defaultImageValue
    this.removeInputTarget.value = true
  }
}
