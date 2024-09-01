import React, { useEffect, useRef, useState } from 'react'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'react-i18next'

export function VideoPlayer () {
  const { t } = useTranslation()
  const audioRef = useRef(null)
  const soundRef = useRef(null)
  const [soundIcon, setSoundIcon] = useState(true)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSoundIcon(!soundIcon)
    }, 2000)
  }, [soundIcon])

  return (
      <div className="video-container">
          <LanguageSelector/>
          <audio
              ref={audioRef}
              src="/audio.mp3"
              loop
              muted={muted}
              preload="metadata"
              controls={false}
              type="audio/mpeg"></audio>
          <video
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
          <p className="video-span-1">{t('arm')}</p>
           <p className="video-span-3" ref={soundRef} onClick={() => {
             setMuted(!muted)
             if (muted) {
               audioRef.current.play()
             } else {
               audioRef.current.pause()
             }
           }}>{soundIcon ? '♡' : '♪'}</p>
          <p className="video-span-2">{t('anj')}</p>
      </div>
  )
}

export default VideoPlayer
