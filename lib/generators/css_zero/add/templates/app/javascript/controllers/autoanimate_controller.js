import { Controller } from "@hotwired/stimulus"
import autoAnimate from "https://cdn.skypack.dev/@formkit/auto-animate@0.8.2"

export default class extends Controller {
  connect() {
    autoAnimate(this.element)
  }
}
