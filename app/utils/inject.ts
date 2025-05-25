import { inject } from 'vue'

export function injectStrict<T>(key: symbol, fallback?: T) {
  const resolved = inject(key, fallback)
  if (!resolved)
    throw new Error(`Could not resolve ${key.toString()}`)

  return resolved
}