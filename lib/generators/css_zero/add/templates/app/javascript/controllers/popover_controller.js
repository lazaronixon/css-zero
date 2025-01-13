import { Controller } from "@hotwired/stimulus"
import { computePosition, flip, shift, offset, autoUpdate } from "https://esm.sh/@floating-ui/dom@1.6.13?standalone"

export default class extends Controller {
  static targets = [ "button", "menu" ]
  static values  = { placement: { type: String, default: "bottom" } }

  initialize() {
    this.orient = this.orient.bind(this)
  }

  connect() {
    this.cleanup = autoUpdate(this.buttonTarget, this.menuTarget, this.orient)
  }

  disconnect() {
    this.cleanup()
  }

  show() {
    this.menuTarget.showPopover()
  }

  showLater() {
    setTimeout(() => this.show(), 700)
  }

  hide() {
    this.menuTarget.hidePopover()
  }

  orient() {
    computePosition(this.buttonTarget, this.menuTarget, this.#options).then(({x, y}) => {
      this.menuTarget.style.insetInlineStart = `${x}px`
      this.menuTarget.style.insetBlockStart  = `${y}px`
    })
  }

  get #options() {
    return { placement: this.placementValue, middleware: [offset(4), flip(), shift({padding: 4})] }
  }
}
