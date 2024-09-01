import { useEffect, useRef } from 'react'

export const Photo = () => {
  const photoRef = useRef(null)
  useEffect(() => {
    const currentWidth = photoRef.current.clientWidth / window.innerWidth * 100
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > photoRef.current.offsetTop - window.innerHeight) {
        const progress = (scrollPosition - (photoRef.current.offsetTop - window.innerHeight))
        const progressNumber = progress / photoRef.current.clientHeight * 10
        photoRef.current.style.width = `${currentWidth + progressNumber}vw`
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [photoRef.current])

  return <div className="photo-container">
        <div className="photo" ref={photoRef} />
    </div>
}
