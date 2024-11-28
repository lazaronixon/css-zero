import { Controller } from "@hotwired/stimulus"
import { put } from "https://cdn.skypack.dev/@rails/request.js@0.0.11?min"
import Sortable from "https://cdn.skypack.dev/sortablejs?min"

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
