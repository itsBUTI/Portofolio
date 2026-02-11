import emailjs from '@emailjs/browser'

export function isValidEmail(value) {
  if (!value) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function buildMailtoHref({ to, name, email, subject, message }) {
  const safeTo = to || ''
  const lines = [
    `Name: ${name || ''}`,
    `Email: ${email || ''}`,
    '',
    message || '',
  ]
  const body = encodeURIComponent(lines.join('\n'))
  const encodedSubject = encodeURIComponent(subject || 'Portfolio inquiry')
  return `mailto:${safeTo}?subject=${encodedSubject}&body=${body}`
}

export async function submitContact({ endpoint, payload, signal, fallbackErrorMessage }) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    signal,
  })

  if (res.ok) return { ok: true }

  let errorMessage =
    typeof fallbackErrorMessage === 'string' && fallbackErrorMessage.trim()
      ? fallbackErrorMessage
      : 'Something went wrong. Please try again.'
  try {
    const data = await res.json()
    if (typeof data?.error === 'string') errorMessage = data.error
  } catch {
    // ignore
  }

  return { ok: false, errorMessage }
}

export async function submitEmailJs({ serviceId, templateId, publicKey, payload, fallbackErrorMessage }) {
  try {
    await emailjs.send(serviceId, templateId, payload, { publicKey })
    return { ok: true }
  } catch (err) {
    const fallback =
      typeof fallbackErrorMessage === 'string' && fallbackErrorMessage.trim()
        ? fallbackErrorMessage
        : 'Something went wrong. Please try again.'
    const errorMessage =
      typeof err?.text === 'string'
        ? err.text
        : fallback
    return { ok: false, errorMessage }
  }
}
