const API_PORT = process.env.API_PORT || 3001
const API_URL = process.env.API_URL || `//localhost:${API_PORT}/api/v1`

/**
 * Returns a promise which resolves to the local API result.
 *
 * @param {string} path The local API path.
 * @param {RequestInit} init fetch() options.
 */
const clientApi = async <T>(
  path: string,
  init: RequestInit = {}
): Promise<T | undefined> => {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  })
  return await res.json()
}

export default clientApi
