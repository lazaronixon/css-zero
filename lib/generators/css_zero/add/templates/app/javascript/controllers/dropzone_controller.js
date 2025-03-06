import { Controller } from "@hotwired/stimulus"
import { DirectUpload } from "https://esm.sh/@rails/activestorage@8.0.100?standalone"
import Dropzone from "https://esm.sh/dropzone@6.0.0-beta.2?standalone"

export default class extends Controller {
  static values = {
    url: String,
    paramName: String,
    maxFiles: { type: Number, default: null },
    maxFilesize: { type: Number, default: 256 },
    acceptedFiles: { type: String, default: null },
    addRemoveLinks: { type: Boolean, default: true }
  }

  connect() {
    this.dropZone = this.#createDropZone()
    this.dropZone.enqueueFile = it => this.#upload(it)
  }

  disconnect() {
    this.dropZone.destroy()
  }

  #createDropZone() {
    return new Dropzone(this.element, {
      url: this.urlValue,
      paramName: this.paramNameValue,
      maxFiles: this.maxFilesValue,
      maxFilesize: this.maxFilesizeValue,
      acceptedFiles: this.acceptedFilesValue,
      addRemoveLinks: this.addRemoveLinksValue
    })
  }

  #upload(file) {
    new Uploader(file, this.dropZone).start()
  }
}

class Uploader {
  constructor(file, dropZone) {
    this.file = file; this.dropZone = dropZone;
  }

  start() {
    this.#createDirectUpload((error, blob) => {
      if (error) {
        this.#emitDropzoneError(error)
      } else {
        this.#createHiddenInput(blob.signed_id)
        this.#emitDropzoneSuccess()
      }
    })
  }

  directUploadWillStoreFileWithXHR(xhr) {
    this.file.xhr = xhr
    this.#bindProgress()
    this.#emitDropzoneProcessing()
  }

  #createDirectUpload(callback) {
    new DirectUpload(this.file, this.dropZone.options.url, this).create(callback)
  }

  #createHiddenInput(signedId) {
    this.hiddenInput = document.createElement("input")
    this.hiddenInput.type = "hidden"
    this.hiddenInput.name = this.dropZone.options.paramName
    this.hiddenInput.value = signedId
    this.file.previewElement.appendChild(this.hiddenInput)
  }

  #bindProgress() {
    this.file.xhr.upload.addEventListener("progress", it => this.#directUploadDidProgress(it))
  }

  #directUploadDidProgress(event) {
    this.file.upload.progress = (100 * event.loaded) / event.total
    this.file.upload.total = event.total
    this.file.upload.bytesSent = event.loaded
    this.dropZone.emit("uploadprogress", this.file, this.file.upload.progress, this.file.upload.bytesSent)
  }

  #emitDropzoneProcessing() {
    this.file.status = Dropzone.PROCESSING
    this.dropZone.emit("processing", this.file)
  }

  #emitDropzoneSuccess() {
    this.file.status = Dropzone.SUCCESS
    this.dropZone.emit("success", this.file)
    this.dropZone.emit("complete", this.file)
  }

  #emitDropzoneError(error) {
    this.file.status = Dropzone.ERROR
    this.dropZone.emit("error", this.file, error)
    this.dropZone.emit("complete", this.file)
  }
}
