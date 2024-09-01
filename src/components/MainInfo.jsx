import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

const MainInfo = () => {
  const { t } = useTranslation()

  const guestRef = useRef(null)
  const guestInfoRef = useRef(null)
  const dateRef = useRef(null)
  const weekdayRef = useRef(null)

  const [isVisibleGuestInfo, setIsVisibleGuestInfo] = useState(false)
  const [isVisibleGuest, setIsVisibleGuest] = useState(false)
  const [isVisibleDate, setIsVisibleDate] = useState(false)
  const [isVisibleWeekday, setIsVisibleWeekday] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > guestRef.current.offsetTop - window.innerHeight + guestRef.current.clientHeight) {
        setIsVisibleGuest(true)
      } else {
        setIsVisibleGuest(false)
      }

      if (scrollPosition > guestInfoRef.current.offsetTop - window.innerHeight + guestInfoRef.current.clientHeight) {
        setIsVisibleGuestInfo(true)
      } else {
        setIsVisibleGuestInfo(false)
      }

      if (scrollPosition > dateRef.current.offsetTop - window.innerHeight + dateRef.current.clientHeight) {
        setIsVisibleDate(true)
      } else {
        setIsVisibleDate(false)
      }

      if (scrollPosition > weekdayRef.current.offsetTop - window.innerHeight + weekdayRef.current.clientHeight) {
        setIsVisibleWeekday(true)
      } else {
        setIsVisibleWeekday(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="scroll-container">
        <div className="animation-container">
            <div className="animated-text">
                <span className={`guests ${isVisibleGuest ? 'visible' : ''}`} ref={guestRef}>
                    {t('dearGuests')}
                </span>
                <span className={`guests-info-text ${isVisibleGuestInfo ? 'visible' : ''}`} ref={guestInfoRef}>
                   {t('invite')}
                </span>
                <span className={`date ${isVisibleDate ? 'visible' : ''}`} ref={dateRef}>28.10.2024</span>
                <span className={`weekday ${isVisibleWeekday ? 'visible' : ''}`} ref={weekdayRef}>{t('city')}</span>
            </div>
        </div>
    </div>
  )
}
export default MainInfo
