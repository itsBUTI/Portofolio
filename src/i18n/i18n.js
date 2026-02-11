import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { messages } from './messages.js'

const STORAGE_KEY = 'portfolio_lang'
const SUPPORTED = ['en', 'sq']

function normalizeLang(value) {
  if (!value) return null
  const v = String(value).toLowerCase()
  if (v.startsWith('sq')) return 'sq'
  if (v.startsWith('en')) return 'en'
  return null
}

function getPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj)
}

function interpolate(template, params) {
  if (typeof template !== 'string') return template
  return template.replace(/\{(\w+)\}/g, (_, k) => {
    const v = params?.[k]
    return v == null ? '' : String(v)
  })
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const stored = normalizeLang(window.localStorage?.getItem(STORAGE_KEY))
    const browser = normalizeLang(navigator.language)
    return stored || browser || 'en'
  })

  useEffect(() => {
    if (!SUPPORTED.includes(lang)) setLang('en')
  }, [lang])

  useEffect(() => {
    try {
      window.localStorage?.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang])

  return createElement(LanguageContext.Provider, { value }, children)
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within <LanguageProvider>')
  return ctx
}

export function useT() {
  const { lang } = useLanguage()

  return useMemo(() => {
    return (key, params) => {
      const langTable = messages[lang] || messages.en
      const raw = getPath(langTable, key)
      const fallback = raw == null ? getPath(messages.en, key) : raw
      if (fallback == null) return key
      return interpolate(fallback, params)
    }
  }, [lang])
}
