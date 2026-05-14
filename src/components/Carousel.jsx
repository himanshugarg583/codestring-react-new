import { useEffect, useRef, useState } from 'react'

const getItemsPerView = () => {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 3
}

export default function Carousel({
  title,
  items,
  renderItem,
  gap = 24,
  itemsPerViewOverride,
  sectionClassName = 'bg-[#f7f7fb] py-14',
  cardClassName =
    'rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-soft',
  headerClassName = 'flex items-center justify-between',
  titleClassName = 'text-2xl font-display font-semibold text-ink sm:text-3xl',
  controlsClassName = 'flex items-center gap-3',
}) {
  const resolveItemsPerView = () =>
    typeof itemsPerViewOverride === 'number'
      ? itemsPerViewOverride
      : getItemsPerView()
  const [itemsPerView, setItemsPerView] = useState(resolveItemsPerView())
  const [offset, setOffset] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    const handleResize = () => setItemsPerView(resolveItemsPerView())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [itemsPerViewOverride])

  useEffect(() => {
    const viewport = trackRef.current
    if (!viewport) return
    const updateWidth = () => {
      const width = viewport.clientWidth
      const nextWidth = (width - gap * (itemsPerView - 1)) / itemsPerView
      setCardWidth(nextWidth)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [itemsPerView, gap])

  useEffect(() => {
    setOffset(0)
  }, [itemsPerView])

  const cardBasis = `calc((100% - ${gap * (itemsPerView - 1)}px) / ${itemsPerView})`
  const extendedItems =
    items.length <= itemsPerView ? [...items, ...items] : items
  const maxOffset = Math.max(0, extendedItems.length - itemsPerView)

  const handlePrev = () => {
    if (maxOffset === 0) return
    setOffset((prev) => (prev - 1 + (maxOffset + 1)) % (maxOffset + 1))
  }

  const handleNext = () => {
    if (maxOffset === 0) return
    setOffset((prev) => (prev + 1) % (maxOffset + 1))
  }

  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-6xl px-4">
        <div className={headerClassName}>
          <h2 className={titleClassName}>{title}</h2>
          <div className={controlsClassName}>
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#0086c9] text-[#0086c9] transition hover:bg-[#0086c9]/10"
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 6l-6 6 6 6"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#0086c9] text-[#0086c9] transition hover:bg-[#0086c9]/10"
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6l6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div ref={trackRef} className="mt-8 overflow-hidden">
          <div
            className="flex pb-2 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${offset * (cardWidth + gap)}px)`,
              gap: `${gap}px`,
            }}
          >
            {extendedItems.map((item, index) => (
              <div
                key={`${item.titleLines ? item.titleLines.join('-') : item.title || item.name || 'item'}-${index}`}
                className={cardClassName}
                style={{ flex: `0 0 ${cardBasis}` }}
              >
                {renderItem(item)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
