import { useState } from 'react'
import { events, pressReleases } from '../data/eventsData'

const tabs = ['All Events', 'Upcoming Events', 'Past Events']


function EventsPage() {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [eventPage, setEventPage] = useState(1)
  const [pressPage, setPressPage] = useState(1)
  const eventPageSize = 6
  const pressPageSize = 4
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const parsedEventDate = (value) => {
    const parsed = Date.parse(value)
    return Number.isNaN(parsed) ? null : new Date(parsed)
  }

  const filteredEvents = events.filter((event) => {
    if (activeTab === 'All Events') return true
    const eventDate = parsedEventDate(event.date)
    if (!eventDate) return false
    if (activeTab === 'Upcoming Events') return eventDate >= today
    return eventDate < today
  })

  const eventPageCount = Math.max(
    1,
    Math.ceil(filteredEvents.length / eventPageSize),
  )
  const safeEventPage = Math.min(eventPage, eventPageCount)
  const pagedEvents = filteredEvents.slice(
    (safeEventPage - 1) * eventPageSize,
    safeEventPage * eventPageSize,
  )
  const eventPages = Array.from(
    { length: eventPageCount },
    (_, index) => index + 1,
  )

  const pressPageCount = Math.max(
    1,
    Math.ceil(pressReleases.length / pressPageSize),
  )
  const safePressPage = Math.min(pressPage, pressPageCount)
  const pagedPress = pressReleases.slice(
    (safePressPage - 1) * pressPageSize,
    safePressPage * pressPageSize,
  )
  const pressPages = Array.from(
    { length: pressPageCount },
    (_, index) => index + 1,
  )

  return (
    <main className="bg-white text-ink">
      <section className="bg-[linear-gradient(120deg,#f1f5ff_0%,#efe9ff_50%,#fef3e8_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Home / Events & PR
          </p>
          <h1 className="mt-3 text-3xl font-display font-semibold sm:text-4xl">
            Events
          </h1>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-5 text-sm font-semibold text-slate-600">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab)
                    setEventPage(1)
                  }}
                  className={
                    tab === activeTab
                      ? 'text-[#0086c9] border-b-2 border-[#0086c9]'
                      : ''
                  }
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {pagedEvents.length ? (
              pagedEvents.map((event) => (
                <article
                  key={event.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-36 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-xs text-slate-400">{event.date}</p>
                  <h3 className="mt-1 text-sm font-semibold text-ink">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600">
                    {event.description}
                  </p>
                  <a
                    href={`/events/${encodeURIComponent(event.slug)}`}
                    className="mt-4 inline-flex text-xs font-semibold text-[#0086c9]"
                  >
                    Learn More -{'>'}
                  </a>
                </article>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-center text-sm text-slate-500 md:col-span-3">
                No events found for this filter.
              </div>
            )}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-slate-600">
            {eventPages.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setEventPage(page)}
                className={`h-7 w-7 rounded-full border text-xs font-semibold ${
                  page === safeEventPage
                    ? 'border-[#0086c9] bg-[#0086c9] text-white'
                    : 'border-slate-200 text-slate-500'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(120deg,#eef4ff_0%,#efe9ff_50%,#fef3e8_100%)] py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-display font-semibold text-ink">
            Press Release
          </h2>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-soft">
            <div className="grid gap-6 md:grid-cols-2">
              {pagedPress.length ? (
                pagedPress.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <div className="h-16 w-24 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">{item.date}</p>
                      <a
                        href={`/press/${encodeURIComponent(item.slug)}`}
                        className="mt-2 inline-flex text-xs font-semibold text-[#0086c9]"
                      >
                        Read More -{'>'}
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-center text-sm text-slate-500 md:col-span-2">
                  No press releases available yet.
                </div>
              )}
            </div>
            <div className="mt-6 flex items-center justify-center gap-3 text-xs text-slate-600">
              {pressPages.map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setPressPage(page)}
                  className={`h-7 w-7 rounded-full border text-xs font-semibold ${
                    page === safePressPage
                      ? 'border-[#0086c9] bg-[#0086c9] text-white'
                      : 'border-slate-200 text-slate-500'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default EventsPage
