import { Controller } from "@hotwired/stimulus"
import { put } from "https://esm.sh/@rails/request.js@0.0.11?standalone"
import Sortable from "https://esm.sh/sortablejs@1.15.6?standalone"

export default class extends Controller {
  static values  = { url: String, group: String, handle: String }

  connect() {
    this.sortable = new Sortable(this.element, this.#options)
  }

  disconnect() {
    this.sortable.destroy()
  }

  #submit({ item, newIndex, to }) {
    put(item.dataset.urlValue, { query: { position: newIndex, parent_id: to.dataset.parentId } })
  }

  get #options() {
    return { animation: 150, onAdd: this.#submit, onUpdate: this.#submit, group: this.groupValue, handle: this.handleValue }
  }
}
