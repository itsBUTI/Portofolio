import { createElement } from 'react'

export function Container({ as = 'div', className = '', children }) {
  return createElement(
    as,
    { className: `container ${className}`.trim() },
    children,
  )
}
