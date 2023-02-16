import React from 'react'

export const useOnScreen = <T extends Element>(
  ref: React.MutableRefObject<T>,
  rootMargin: string = '0px'
): boolean => {
  const [isIntersecting, setIntersecting] = React.useState<boolean>(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, [])

  return isIntersecting
}
