import { useEffect, useMemo, useState } from 'react'

export function useActiveSection(sectionIds) {
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds])
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    if (!ids.length) return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id)
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: [0.1, 0.2, 0.4, 0.6, 0.8],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
