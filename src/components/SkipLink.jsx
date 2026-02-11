import { useT } from '../i18n/i18n.js'

export function SkipLink() {
  const t = useT()

  return (
    <a className="skipLink" href="#content">
      {t('skipLink.label')}
    </a>
  )
}
