import React from 'react'

export const useDevice = () => {
  const [device, setDevice] = React.useState<'mobile' | 'desktop'>('desktop')

  React.useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setDevice('mobile')
    } else {
      setDevice('desktop')
    }
  }, [])

  return device
}
