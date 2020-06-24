export const API_ROOT = 'http://localhost:3000/api/v1'

export const API_WS_ROOT = 'ws://localhost:3000/cable'

export const headers = (token) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  if (token) headers['Authorization'] = `Bearer ${token}`

  return headers
}