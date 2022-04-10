import { useEffect, useState } from 'react'

const useScrollingUp = () => {
  const [scrollingUp, setScrollingUp] = useState(false)
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrollingUp(true)
    } else {
      setScrollingUp(false)
    }


  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollingUp
}

export default useScrollingUp