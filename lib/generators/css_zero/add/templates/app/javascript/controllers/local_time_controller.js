import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "time", "date", "shortdate", "datetime", "ago" ]

  #timer

  initialize() {
    this.timeFormatter = new Intl.DateTimeFormat(undefined, { timeStyle: "short" })
    this.dateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: "long" })
    this.shortdateFormatter = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" })
    this.datetimeFormatter = new Intl.DateTimeFormat(undefined, { timeStyle: "short", dateStyle: "short" })
    this.agoFormatter = new TimeAgoFormat(undefined, { numeric: "always" })
  }

  connect() {
    this.#timer = setInterval(() => this.#refreshRelativeTimes(), 30_000)
  }

  disconnect() {
    clearInterval(this.#timer)
  }

  timeTargetConnected(target) {
    this.#formatTime(this.timeFormatter, target)
  }

  dateTargetConnected(target) {
    this.#formatTime(this.dateFormatter, target)
  }

  datetimeTargetConnected(target) {
    this.#formatTime(this.datetimeFormatter, target)
  }

  shortdateTargetConnected(target) {
    this.#formatTime(this.shortdateFormatter, target)
  }

  agoTargetConnected(target) {
    this.#formatTime(this.agoFormatter, target)
  }

  #refreshRelativeTimes() {
    this.agoTargets.forEach(it => this.#formatTime(this.agoFormatter, it))
  }

  #formatTime(formatter, target) {
    const date = new Date(target.getAttribute("datetime"))
    target.textContent = formatter.format(date)
    target.title = this.datetimeFormatter.format(date)
  }
}

class TimeAgoFormat extends Intl.RelativeTimeFormat {
  format(date) {
    const seconds = (Date.now() - date) / 1000
    const minutes = seconds / 60
    const hours   = minutes / 60
    const days    = hours / 24
    const weeks   = days / 7
    const months  = days / 30.4
    const years   = days / 365

    if (years >= 1) {
      return super.format(-Math.floor(years), "years")
    } else if (months >= 1) {
      return super.format(-Math.floor(months), "months")
    } else if (weeks >= 1) {
      return super.format(-Math.floor(weeks), "weeks")
    } else if (days >= 1) {
      return super.format(-Math.floor(days), "days")
    } else if (hours >= 1) {
      return super.format(-Math.floor(hours), "hours")
    } else if (minutes >= 1) {
      return super.format(-Math.floor(minutes), "minutes")
    } else {
     return this.#formatAsTime(date)
    }
  }

  #formatAsTime(date) {
    return new Intl.DateTimeFormat(undefined, { timeStyle: "short" }).format(date)
  }
}
