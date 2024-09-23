import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "dialog", "zoomedImage", "download", "share" ]

  show(event) {
    this.dialogTarget.showModal()
    this.#set(event.target.parentNode)
  }

  close() {
    this.dialogTarget.close()
  }

  reset() {
    this.zoomedImageTarget.src = ""
    this.downloadTarget.href = ""
    this.shareTarget.dataset.webShareFileValue = "";
  }

  #set(target) {
    this.zoomedImageTarget.src = target.href
    this.downloadTarget.href = target.dataset.lightboxUrlValue;
    this.shareTarget.dataset.webShareFileValue = target.dataset.lightboxUrlValue;
  }
}
