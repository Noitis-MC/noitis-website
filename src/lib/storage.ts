// localStorage can throw (Safari private mode, blocked cookies, embedded
// webviews). A preference that cannot be saved must never blank the page.
export function readPreference(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writePreference(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Preference is kept for this visit only.
  }
}
