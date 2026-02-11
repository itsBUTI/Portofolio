import { useMemo, useRef, useState } from 'react'
import { isValidEmail, buildMailtoHref, submitContact, submitEmailJs } from '../utils/contact.js'
import { getProfile } from '../i18n/content.js'
import { useLanguage, useT } from '../i18n/i18n.js'

const initial = { name: '', email: '', subject: '', message: '' }

export function ContactForm() {
  const { lang } = useLanguage()
  const t = useT()
  const profile = getProfile(lang)

  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
  const [values, setValues] = useState(initial)
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const abortRef = useRef(null)

  const errors = useMemo(() => {
    const e = {}
    if (!values.name.trim()) e.name = t('contactForm.validation.nameRequired')
    if (!values.email.trim()) e.email = t('contactForm.validation.emailRequired')
    else if (!isValidEmail(values.email.trim())) e.email = t('contactForm.validation.emailInvalid')
    if (!values.message.trim()) e.message = t('contactForm.validation.messageRequired')
    return e
  }, [t, values])

  function onChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  async function onSubmit(e) {
    e.preventDefault()

    if (abortRef.current) abortRef.current.abort()
    setStatus({ state: 'idle', message: '' })

    const hasErrors = Object.keys(errors).length > 0
    if (hasErrors) {
      setStatus({ state: 'error', message: t('contactForm.validation.fixHighlighted') })
      return
    }

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim() || t('contactForm.defaults.subject'),
      message: values.message.trim(),
    }

    const emailJsReady = Boolean(emailJsServiceId && emailJsTemplateId && emailJsPublicKey)

    if (emailJsReady) {
      setStatus({ state: 'submitting', message: t('contactForm.cta.sending') })

      const templatePayload = {
        ...payload,
        from_name: payload.name,
        from_email: payload.email,
        reply_to: payload.email,
        to_name: profile.fullName,
      }

      const result = await submitEmailJs({
        serviceId: emailJsServiceId,
        templateId: emailJsTemplateId,
        publicKey: emailJsPublicKey,
        payload: templatePayload,
        fallbackErrorMessage: t('contactForm.errors.generic'),
      })

      if (result.ok) {
        setValues(initial)
        setStatus({ state: 'success', message: t('contactForm.status.sent') })
        return
      }

      setStatus({ state: 'error', message: result.errorMessage })
      return
    }

    if (!endpoint) {
      window.location.href = buildMailtoHref({
        to: profile.email,
        ...payload,
      })
      setStatus({
        state: 'success',
        message: t('contactForm.status.openingClient'),
      })
      return
    }

    const controller = new AbortController()
    abortRef.current = controller

    setStatus({ state: 'submitting', message: t('contactForm.cta.sending') })
    const result = await submitContact({
      endpoint,
      payload,
      signal: controller.signal,
      fallbackErrorMessage: t('contactForm.errors.generic'),
    })

    if (result.ok) {
      setValues(initial)
      setStatus({ state: 'success', message: t('contactForm.status.sent') })
      return
    }

    setStatus({ state: 'error', message: result.errorMessage })
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="grid2">
        <Field
          label={t('contactForm.labels.name')}
          name="name"
          value={values.name}
          onChange={onChange}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          label={t('contactForm.labels.email')}
          name="email"
          value={values.email}
          onChange={onChange}
          error={errors.email}
          autoComplete="email"
          inputMode="email"
        />
      </div>

      <Field
        label={t('contactForm.labels.subject')}
        name="subject"
        value={values.subject}
        onChange={onChange}
        autoComplete="off"
      />

      <Field
        label={t('contactForm.labels.message')}
        name="message"
        value={values.message}
        onChange={onChange}
        error={errors.message}
        as="textarea"
        rows={6}
      />

      <div className="formFooter">
        <button className="btn" type="submit" disabled={status.state === 'submitting'}>
          {status.state === 'submitting'
            ? t('contactForm.cta.sending')
            : t('contactForm.cta.send')}
        </button>
        <p className="muted" aria-live="polite">
          {status.message}
        </p>
      </div>
    </form>
  )
}

function Field({ label, name, value, onChange, error, as = 'input', ...rest }) {
  const Tag = as
  const id = `field-${name}`
  const describedBy = error ? `${id}-error` : undefined

  return (
    <div className="field">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <Tag
        id={id}
        className={`input ${error ? 'inputError' : ''}`.trim()}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={describedBy}
        {...rest}
      />
      {error ? (
        <p id={describedBy} className="fieldError">
          {error}
        </p>
      ) : null}
    </div>
  )
}
