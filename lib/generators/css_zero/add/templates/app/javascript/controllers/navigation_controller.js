import { Controller } from "@hotwired/stimulus"
import { Turbo } from "@hotwired/turbo-rails"

export default class extends Controller {
  back() {
    history.back()
  }

  forward() {
    history.forward()
  }

  reload() {
    Turbo.visit(location.href, { action: "replace", shouldCacheSnapshot: false })
  }
}
