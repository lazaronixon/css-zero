import { Controller } from "@hotwired/stimulus"
import { play } from "https://esm.sh/cuelume@0.2.2?standalone"

export default class extends Controller {
  static values = { connect: String, disconnect: String, volume: { type: Number, default: 1 } }

  connect() {
    this.hasConnectValue && this.#play(this.connectValue)
  }

  disconnect() {
    this.hasDisconnectValue && this.#play(this.disconnectValue)
  }

  chime() {
    this.#play("chime")
  }

  sparkle() {
    this.#play("sparkle")
  }

  droplet() {
    this.#play("droplet")
  }

  bloom() {
    this.#play("bloom")
  }

  whisper() {
    this.#play("whisper")
  }

  tick() {
    this.#play("tick")
  }

  press() {
    this.#play("press")
  }

  release() {
    this.#play("release")
  }

  toggle() {
    this.#play("toggle")
  }

  success() {
    this.#play("success")
  }

  error() {
    this.#play("error")
  }

  page() {
    this.#play("page")
  }

  loading() {
    this.#play("loading")
  }

  ready() {
    this.#play("ready")
  }

  #play(sound) {
    play(sound, { volume: this.volumeValue })
  }
}
