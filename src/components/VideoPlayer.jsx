import React, { useEffect, useRef, useState } from 'react'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'react-i18next'

export function VideoPlayer () {
  const { t } = useTranslation()
  const videoRef = useRef(null)
  const soundRef = useRef(null)
  const [soundIcon, setSoundIcon] = useState(true)

  useEffect(() => {
    const video = videoRef.current

    video.play()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setSoundIcon(!soundIcon)
    }, 2000)

    // return clearInterval(changeIcon)
  }, [soundIcon])

  return (
      <div className="video-container">
          <LanguageSelector/>
          <video
              ref={videoRef}
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              controls={false}
              disablePictureInPicture={true}
              className="video"
              type="video/mp4"
          ></video>
          <p className="video-span-1">{t('nar')}</p>
           <p className="video-span-3" ref={soundRef} onClick={() => {
             videoRef.current.muted = !videoRef.current.muted
           }}>{soundIcon ? '♡' : '♪'}</p>
          <p className="video-span-2">{t('av')}</p>
      </div>
  )
}

export default VideoPlayer
