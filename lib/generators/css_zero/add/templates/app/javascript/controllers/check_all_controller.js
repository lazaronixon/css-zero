import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "dependee", "dependant" ]

  connect() {
    this.#checkDependee()
  }

  check({ target }) {
    target === this.dependeeTarget ? this.#checkDependants() : this.#checkDependee()
  }

  #checkDependants() {
    this.dependantTargets.forEach(e => e.checked = this.dependeeTarget.checked)
  }

  #checkDependee() {
    this.dependeeTarget.checked = this.#allChecked
    this.dependeeTarget.indeterminate = this.#indeterminate
  }

  get #indeterminate() {
    return this.#atLeastOneChecked && !this.#allChecked
  }

  get #atLeastOneChecked() {
    return this.dependantTargets.some(e => e.checked)
  }

  get #allChecked() {
    return this.dependantTargets.every(e => e.checked)
  }
}
