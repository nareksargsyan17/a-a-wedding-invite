import VideoPlayer from './VideoPlayer'
import MainInfo from './MainInfo'
import { useEffect, useState } from 'react'
import { Photo } from './Photo'
import { Plan } from './Plan'
import { DateTime } from './Date'
import LocationRedirect from './LocationRedirect'

export const Home = () => {
  const [isVisibleContext, setIsVisibleContext] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsVisibleContext(true)
    }, 4000)
  }, [])
  return (
      <>
          <VideoPlayer/>
          {isVisibleContext
            ? <>
                  <MainInfo/>
                  <Photo/>
                  <Plan/>
                  <LocationRedirect/>
                  <DateTime/>
          </>
            : null}
      </>
  )
}
