export function getCookie(name) {
  const cookies = document.cookie ? document.cookie.split("; ") : []
  const prefix = `${encodeURIComponent(name)}=`
  const cookie = cookies.find(cookie => cookie.startsWith(prefix))

  if (cookie) {
    const value = cookie.split("=").slice(1).join("=")
    return value ? decodeURIComponent(value) : undefined
  }
}

export function setCookie(name, value) {
  const twentyYears = 20 * 365 * 24 * 60 * 60 * 1000
  const body = [ name, value ].map(encodeURIComponent).join("=")
  const expires = new Date(Date.now() + twentyYears).toUTCString()
  const cookie = `${body}; path=/; expires=${expires}`
  document.cookie = cookie
}
