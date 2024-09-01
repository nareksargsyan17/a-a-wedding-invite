import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const DateTime = () => {
  const { t } = useTranslation()

  const dateRef = useRef(null)
  const dateBlockRef = useRef(null)

  const [isVisibleDate, setIsVisibleDate] = useState(false)
  const [isVisibleDateBlock, setIsVisibleDateBlock] = useState(false)

  const [time, setTime] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  })
  const dateTime = new Date('10/28/2024')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > dateRef.current.offsetTop - window.innerHeight + dateRef.current.clientHeight) {
        setIsVisibleDate(true)
      } else {
        setIsVisibleDate(false)
      }
      if (scrollPosition > dateBlockRef.current.offsetTop - window.innerHeight + dateBlockRef.current.clientHeight) {
        setIsVisibleDateBlock(true)
      } else {
        setIsVisibleDateBlock(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  setInterval(() => {
    const currentTime = new Date()
    const days = Math.floor((dateTime - currentTime) / (1000 * 60 * 60 * 24))
    const hours = Math.floor((dateTime - currentTime) / (1000 * 60 * 60)) - days * 24
    const minutes = Math.floor((dateTime - currentTime) / (1000 * 60)) - (days * 24 * 60 + hours * 60)
    const seconds = Math.floor((dateTime - currentTime) / 1000) - (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60)

    setTime({ days, hours, minutes, seconds })
  }, 1000)

  return <div className="date-container">
            <span className={`date-text ${isVisibleDate ? 'visible' : ''}`} ref={dateRef}>
               {t('see')}
            </span>
      <div className={`date-time-container ${isVisibleDateBlock ? 'visible' : ''}`} ref={dateBlockRef}>
          <div className="date-time-block">
              <span className="time-number">{time.days < 10 ? `0${time.days}` : time.days}</span>
              <span className="time-text">{t('days')}</span>
          </div>
          <span className="point">:</span>
          <div className="date-time-block">
              <span className="time-number">{time.hours < 10 ? `0${time.hours}` : time.hours}</span>
              <span className="time-text">{t('hours')}</span>
          </div>
          <span className="point">:</span>
          <div className="date-time-block">
              <span className="time-number">{time.minutes < 10 ? `0${time.minutes}` : time.minutes}</span>
              <span className="time-text">{t('minutes')}</span>
          </div>
          <span className="point">:</span>
          <div className="date-time-block">
              <span className="time-number">{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</span>
              <span className="time-text">{t('seconds')}</span>
          </div>
      </div>
      <div className="names">
          <span>{t('arman')}</span>
          <span>♡</span>
          <span>{t('anjela')}</span>
      </div>
      <span>© Created by Narek Sargsyan</span>
  </div>
}
