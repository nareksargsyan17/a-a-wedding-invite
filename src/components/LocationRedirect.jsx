// LocationRedirect.js
import React from 'react'
import { useTranslation } from 'react-i18next'

const LocationRedirect = () => {
  const { t } = useTranslation()

  const handleRedirect = (url) => {
    window.open(url, '_blank')
  }

  return (
      <>
          <div className="location-container">
              <h1>{t('locationCeremony')}</h1>
              <div className="location">
                  <div className="monastery"/>
                  <h2>{t('monastery')}</h2>
                  <button onClick={() => handleRedirect('https://yandex.ru/maps/-/CDfVZ83P')}>
                      {t('showMap')}
                  </button>
              </div>
          </div>
        <div className="location-container">
            <h1>{t('locationHall')}</h1>
            <div className="location">
                <div className="wedding-loc"/>
                <h2>{t('hallName')}</h2>
                <button onClick={() => handleRedirect('https://yandex.ru/maps/-/CDfVjWjQ')}>
                    {t('showMap')}
                </button>
            </div>
        </div>
      </>
  )
}

export default LocationRedirect
