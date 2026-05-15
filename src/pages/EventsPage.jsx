import { useState } from 'react'

const tabs = ['All Events', 'Upcoming Events', 'Past Events']

const events = [
  {
    title: 'SkillVista 2025',
    date: 'November 21, 2025',
    description: 'A conference for industries and institutes.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'AI Skillathon 2025',
    date: 'September 1, 2025',
    description: 'An AI summit for innovation, learning, and impact.',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Hack Your Career',
    date: 'August 28, 2024',
    description: 'From classroom to corporate with full stack insights.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: '5 Hours Workshop on JavaScript',
    date: 'September 19, 2023',
    description: 'Hands-on learning with mentors and live projects.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'SkillVista - Confluence of Industries',
    date: 'September 8, 2023',
    description: 'Industry collaboration and academic innovation.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Mentor Beyond Measure',
    date: 'September 6, 2023',
    description: 'Honoring our SMEs and learning leaders.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  },
]

const pressReleases = [
  {
    title: 'Skillathon 2025 declared AI Month in Panchkula',
    date: 'August 28, 2025',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'SkillStone celebrates the success of SkillVista 2024',
    date: 'December 10, 2024',
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'SkillStone launches new mentorship initiative',
    date: 'January 3, 2024',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'SkillStone unveils SkillVista 2023',
    date: 'September 8, 2023',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'SkillStone expands partnerships across North India',
    date: 'May 11, 2023',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'SkillStone in 2022: A year of impact',
    date: 'December 27, 2022',
    image:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80',
  },
]

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
                  <button
                    type="button"
                    className="mt-4 text-xs font-semibold text-[#0086c9]"
                  >
                    Learn More →
                  </button>
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
