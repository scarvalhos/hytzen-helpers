import React from 'react'

export const useToggle = (value1: unknown = true, value2: unknown = false) => {
  const [state, setState] = React.useState(value1)

  const toggle = React.useCallback(() => {
    setState((oldState: unknown) => (oldState === value1 ? value2 : value1))
  }, [])

  return [state, toggle]
}
