import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "time", "date", "shortdate", "datetime", "ago", "indays" ]
  static values  = { lessThanAMinuteAgoText: { type: String, default: "Less than a minute ago" } }

  #timer

  initialize() {
    this.timeFormatter = new Intl.DateTimeFormat(undefined, { timeStyle: "short" })
    this.dateFormatter = new Intl.DateTimeFormat(undefined, { dateStyle: "long" })
    this.shortdateFormatter = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" })
    this.datetimeFormatter = new Intl.DateTimeFormat(undefined, { timeStyle: "short", dateStyle: "short" })
    this.indaysFormatter = new InDaysFormat(undefined, { numeric: "auto" })
    this.agoFormatter = new TimeAgoFormat(undefined, { lessThanAMinuteAgoText: this.lessThanAMinuteAgoTextValue })
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

  indaysTargetConnected(target) {
    this.#formatTime(this.indaysFormatter, target)
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
  constructor(locales, options) {
    super(locales, options); this.options = options
  }

  format(value) {
    const seconds = (Date.now() - value) / 1000
    const minutes = seconds / 60
    const hours   = minutes / 60
    const days    = hours / 24
    const weeks   = days / 7
    const months  = days / 30.4
    const years   = days / 365

    if (years >= 1)   return super.format(-Math.floor(years), "year")
    if (months >= 1)  return super.format(-Math.floor(months), "month")
    if (weeks >= 1)   return super.format(-Math.floor(weeks), "week")
    if (days >= 1)    return super.format(-Math.floor(days), "day")
    if (hours >= 1)   return super.format(-Math.floor(hours), "hour")
    if (minutes >= 1) return super.format(-Math.floor(minutes), "minute")

    return this.options.lessThanAMinuteAgoText || "Less than a minute ago"
  }
}

class InDaysFormat extends Intl.RelativeTimeFormat {
  format(value) {
    return super.format((value - Date.now()) / 1000/60/60/24, "day")
  }
}
