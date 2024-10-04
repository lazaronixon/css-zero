import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "dependee", "dependant" ]

  connect() {
    this.#checkDependee()
  }

  check({ target }) {
    target === this.dependeeTarget ? this.#checkDependants(target.checked) : this.#checkDependee()
  }

  #checkDependants(isChecked) {
    this.dependantTargets.forEach(e => e.checked = isChecked)
  }

  #checkDependee() {
    this.dependeeTarget.checked = this.#allChecked
    this.dependeeTarget.indeterminate = this.#indeterminate
  }

  get #allChecked() {
    return this.dependantTargets.every(e => e.checked)
  }

  get #indeterminate() {
    return !this.dependeeTarget.checked && this.#atLeastOneChecked;
  }

  get #atLeastOneChecked() {
    return this.dependantTargets.some(e => e.checked)
  }
}
