import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "dependent" ]

  check({ target }) {
    this.dependentTargets.forEach(element => element.checked = target.checked)
  }
}
