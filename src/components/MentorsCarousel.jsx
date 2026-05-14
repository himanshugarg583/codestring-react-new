import { useEffect, useRef, useState } from 'react'

const getItemsPerView = () => {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 3
}

export default function MentorsCarousel({ title, description, items }) {
  const gap = 24
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView())
  const [offset, setOffset] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
    <section className="bg-[#f7f7fb] py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-2xl font-display font-semibold text-ink">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-3">
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
            className="flex gap-6 pb-2 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${offset * (cardWidth + gap)}px)`,
            }}
          >
            {extendedItems.map((mentor, index) => (
              <div
                key={`${mentor.name}-${index}`}
                className={`rounded-2xl border p-6 text-center shadow-[0_12px_30px_rgba(15,23,42,0.12)] ${
                  mentor.featured
                    ? 'border-[#b7d8ef] bg-[#b7d8ef]'
                    : 'border-slate-200 bg-white'
                }`}
                style={{ flex: `0 0 ${cardBasis}` }}
              >
                <div className="flex justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#0086c9] bg-white">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                  </div>
                </div>
                <h3
                  className={`mt-5 text-lg font-semibold ${
                    mentor.featured ? 'text-slate-700' : 'text-ink'
                  }`}
                >
                  {mentor.name}
                </h3>
                <p
                  className={`mt-1 text-sm font-semibold ${
                    mentor.featured ? 'text-white' : 'text-[#0086c9]'
                  }`}
                >
                  {mentor.role}
                </p>
                <div
                  className={`mt-4 max-h-[140px] overflow-y-auto pr-2 text-sm leading-relaxed ${
                    mentor.featured ? 'text-white/90' : 'text-slate-600'
                  }`}
                >
                  {mentor.bio}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
