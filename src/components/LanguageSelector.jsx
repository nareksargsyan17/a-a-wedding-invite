import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  { value: 'en', thumbnail: './united-kingdom.png', text: 'EN' },
  { value: 'hy', thumbnail: './armenia.png', text: 'AM' }
]

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const sessionLang = localStorage.getItem('lang')
    if (sessionLang) {
      const lang = languages.find(lang => lang.value === sessionLang)
      if (lang) setSelectedLanguage(lang)
    }
  }, [])

  const handleSelect = (language) => {
    setSelectedLanguage(language)
    localStorage.setItem('lang', language.value)
    setDropdownOpen(false)
    i18n.changeLanguage(language.value)
  }

  return (
        <div className="lang-select">
            <button className="btn-select" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <li>
                    <img src={selectedLanguage.thumbnail} alt={selectedLanguage.text} />
                    <span>{selectedLanguage.text}</span>
                </li>
            </button>
            {dropdownOpen && <div className="b open">
                <ul id="a">
                    {/* eslint-disable-next-line react/prop-types */}
                    {languages.map((language, index) => (
                        <li key={index} onClick={() => handleSelect(language)}>
                            {/* eslint-disable-next-line react/prop-types */}
                            <img src={language.thumbnail} alt={language.text}/>
                            {/* eslint-disable-next-line react/prop-types */}
                            <span>{language.text}</span>
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
  )
}

export default LanguageSelector
