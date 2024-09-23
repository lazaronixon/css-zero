import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "image", "input", "removeInput" ]
  static values  = { defaultImage: String }

  previewImage() {
    const selectedFile = this.inputTarget.files[0]

    if (selectedFile) {
      this.imageTarget.src = URL.createObjectURL(selectedFile);
      this.imageTarget.onload = () => { URL.revokeObjectURL(this.imageTarget.src) }
      this.removeInputTarget.value = false
    }
  }

  clear() {
    this.imageTarget.src = this.defaultImageValue
    this.removeInputTarget.value = true
  }
}
