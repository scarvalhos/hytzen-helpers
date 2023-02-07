import React from 'react'

export const useSkipFirstRender = (
  callback: React.EffectCallback,
  dependencies: React.DependencyList
) => {
  const firstRenderRef = React.useRef(true)

  React.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
    } else {
      callback()
    }
  }, [callback, ...dependencies])
}
