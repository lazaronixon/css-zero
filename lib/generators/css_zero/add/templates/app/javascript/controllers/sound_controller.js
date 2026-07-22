import { Controller } from "@hotwired/stimulus"
import { play } from "https://esm.sh/cuelume@0.1.2?standalone"

export default class extends Controller {
  static values = { connect: String, disconnect: String }

  connect() {
    this.hasConnectValue && play(this.connectValue)
  }

  disconnect() {
    this.hasDisconnectValue && play(this.disconnectValue)
  }

  chime() {
    play("chime")
  }

  sparkle() {
    play("sparkle")
  }

  droplet() {
    play("droplet")
  }

  bloom() {
    play("bloom")
  }

  whisper() {
    play("whisper")
  }

  tick() {
    play("tick")
  }

  press() {
    play("press")
  }

  release() {
    play("release")
  }

  toggle() {
    play("toggle")
  }

  success() {
    play("success")
  }

  error() {
    play("error")
  }

  page() {
    play("page")
  }

  loading() {
    play("loading")
  }

  ready() {
    play("ready")
  }
}
