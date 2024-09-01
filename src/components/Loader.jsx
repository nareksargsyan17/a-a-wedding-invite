import { useTranslation } from 'react-i18next'

export const Loader = () => {
  const { t } = useTranslation()
  return (
      <div className="loader-block">
        <div>
            <span className="animated-span-left-to-right">{t('a1')}</span>
            <span className="animated-span-appear">{t('&')}</span>
            <span className="animated-span-right-to-left">{t('a2')}</span>
        </div>
      </div>
  )
}
