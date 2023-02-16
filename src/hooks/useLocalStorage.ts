import React from 'react'

export const useLocalStorage = (key: string, initialValue: unknown = '') => {
  const [state, setState] = React.useState(() => {
    try {
      const storedValue = localStorage.getItem(key)

      return storedValue ? JSON.parse(storedValue) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = React.useCallback(
    (value: unknown) => {
      try {
        setState(value)
        localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.error(error)
      }
    },
    [key]
  )

  return [state, setValue]
}
