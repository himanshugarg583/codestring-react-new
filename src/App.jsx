import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import MentorsCarousel from './components/MentorsCarousel'
import CoursePage from './pages/CoursePage'
import SummerInternshipPage from './pages/SummerInternshipPage'
import { courses } from './data/courses'
import { siteContent } from './data/siteContent'

const courseHrefByCategory = (category) => {
  const course = courses.find((item) => item.category === category)
  return course ? `course=${course.slug}` : '#'
}

const fullStackSubmenu = courses
  .filter((course) => course.category === 'Full Stack')
  .map((course) => ({
    label: course.menuLabel || course.title,
    href: `course=${course.slug}`,
  }))

const navItems = [
  {
    label: 'Courses',
    href: '#',
    dropdown: [
      {
        label: 'Salesforce',
        href: courseHrefByCategory('Salesforce'),
        arrow: false,
      },
      {
        label: 'Full Stack',
        href: '#',
        arrow: true,
        submenu: fullStackSubmenu,
      },
      {
        label: 'QA Automation',
        href: courseHrefByCategory('QA Automation'),
        arrow: false,
      },
      {
        label: 'Dev Ops',
        href: courseHrefByCategory('Dev Ops'),
        arrow: false,
      },
      { label: 'AI', href: courseHrefByCategory('AI'), arrow: false },
    ],
  },
  {
    label: 'Summer Internship',
    href: 'summer-internship',
    dropdown: [],
  },
  {
    label: 'Resource Center',
    href: '#',
    dropdown: [
      { label: 'Events & PR', href: '#', arrow: false },
      { label: 'Blog', href: '#', arrow: false },
      { label: 'Gallery', href: '#', arrow: false },
    ],
  },
  {
    label: 'About',
    href: '#',
    dropdown: [
      { label: 'About Us', href: '#', arrow: false },
      { label: 'Contact Us', href: '#', arrow: false },
    ],
  },
]

const {
  hero,
  stats,
  whyChoose,
  programs,
  skills,
  partners,
  mentors,
  popup,
  ctaBanner,
  enquiryForm,
  contactHelp,
  trending,
  spotlights,
  blog,
  footer,
  socialLinks,
} = siteContent

const benefitIcons = {
  target: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h10a2 2 0 0 1 2 2v6H6a2 2 0 0 1-2-2V6Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 9h4v7a2 2 0 0 1-2 2H8"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 19h6"
      />
    </svg>
  ),
  laptop: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 4h7l3 3v12a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 6 19V5.5A1.5 1.5 0 0 1 7.5 4Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 11l2 2 4-4"
      />
    </svg>
  ),
  builder: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16v10H4z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 20h6"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10l2 2 3-3"
      />
    </svg>
  ),
}

const skillIcons = {
  stack: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4l8 4-8 4-8-4 8-4Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12l8 4 8-4"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16l8 4 8-4"
      />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 8L5 12l4 4"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 8l4 4-4 4"
      />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 18h9a4 4 0 0 0 .5-7.97A5 5 0 0 0 6.4 9.5 3.5 3.5 0 0 0 7 18Z"
      />
    </svg>
  ),
  qa: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 8h6v5a3 3 0 0 1-6 0V8Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l-2-2"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 5l2-2"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h4"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12h4"
      />
    </svg>
  ),
}

const contactIcons = {
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path
        fill="currentColor"
        d="M6.6 10.2a15.2 15.2 0 0 0 7.2 7.2l2.4-2.4a1 1 0 0 1 1-.24c1.1.36 2.3.55 3.5.55a1 1 0 0 1 1 1v3.7a1 1 0 0 1-1 1C9.6 21 3 14.4 3 6.3a1 1 0 0 1 1-1H7.7a1 1 0 0 1 1 1c0 1.2.19 2.4.55 3.5a1 1 0 0 1-.24 1l-2.38 2.4Z"
      />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path
        fill="currentColor"
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2 0v.5l8 4.8 8-4.8V6H6Zm12 12V9.1l-7.5 4.5a1 1 0 0 1-1 0L6 9.1V18h12Z"
      />
    </svg>
  ),
}

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    question: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activePage, setActivePage] = useState('home')
  const [activeCourseSlug, setActiveCourseSlug] = useState(
    courses[0]?.slug || '',
  )
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false)
  const [whatsappMessage, setWhatsappMessage] = useState('')

  const whatsappNumber = '916376532619'
  const applicationFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSe5r6u16N-cNgy9cJfifrxatcu5UsNUsVbLvXDGbcDfMZeGGw/alreadyresponded'

  useEffect(() => {
    const updateFromHash = () => {
      if (typeof window === 'undefined') return
      const hash = window.location.hash.replace('#', '')

      if (hash === 'summer-internship') {
        setActivePage('summer-internship')
        return
      }

      if (hash.startsWith('course=')) {
        const slug = hash.replace('course=', '')
        const match = courses.find((course) => course.slug === slug)
        setActiveCourseSlug(match ? match.slug : courses[0]?.slug || '')
        setActivePage('course')
        return
      }
      setActivePage('home')
    }

    updateFromHash()
    window.addEventListener('hashchange', updateFromHash)
    return () => window.removeEventListener('hashchange', updateFromHash)
  }, [])

  useEffect(() => {
    if (!popup?.enabled) return
    if (typeof window === 'undefined') return

    const storageKey = popup.storageKey || 'codestring_popup_v1'
    const hasSeen = window.localStorage.getItem(storageKey) === 'true'
    if (hasSeen) return

    const delay = typeof popup.delayMs === 'number' ? popup.delayMs : 10000
    const timer = window.setTimeout(() => {
      window.localStorage.setItem(storageKey, 'true')
      setIsPopupOpen(true)
    }, delay)

    return () => window.clearTimeout(timer)
  }, [popup])

  const handleClosePopup = () => {
    setIsPopupOpen(false)
    if (typeof window === 'undefined') return
    const storageKey = popup?.storageKey || 'codestring_popup_v1'
    window.localStorage.setItem(storageKey, 'true')
  }

  const activeCourse =
    courses.find((course) => course.slug === activeCourseSlug) || courses[0]

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    window.setTimeout(() => {
      setIsSubmitting(false)
    }, 700)
  }

  const handleSendWhatsApp = (event) => {
    event.preventDefault()
    const trimmedMessage = whatsappMessage.trim()
    const messageQuery = trimmedMessage
      ? `?text=${encodeURIComponent(trimmedMessage)}`
      : ''
    const whatsappUrl = `https://wa.me/${whatsappNumber}${messageQuery}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setIsWhatsappOpen(false)
    setWhatsappMessage('')
  }

  return (
    <div className="bg-surface text-ink">
      <Header navItems={navItems} />

      {popup?.enabled && isPopupOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
          onClick={handleClosePopup}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-[#0b0f1a] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClosePopup}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white"
              aria-label="Close popup"
            >
              <span aria-hidden="true">x</span>
            </button>
            <div className="grid gap-6 p-6 text-white md:grid-cols-[1.2fr_0.8fr] md:p-8">
              <div>
                <div className="flex items-center gap-3">
                  {popup.logo ? (
                    <img
                      src={popup.logo}
                      alt="CodeString"
                      className="h-9 w-auto"
                    />
                  ) : null}
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    CodeString
                  </span>
                </div>
                <h2 className="mt-5 text-3xl font-semibold text-[#f6b73c] sm:text-4xl">
                  {popup.title}
                </h2>
                <p className="mt-2 text-lg text-slate-200">{popup.subtitle}</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase text-[#f6b73c]">
                    Program Highlights
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
                    {popup.highlights?.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#f6b73c]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6">
                <div className="self-end rounded-full bg-[#1f5ad6] px-4 py-2 text-xs font-semibold">
                  {popup.startDate}
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-sm text-slate-300">{popup.feeLabel}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    {popup.feeValue}
                  </p>
                </div>
                <a
                  href={applicationFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#f6b73c] px-4 py-2 text-sm font-semibold text-[#0b0f1a]"
                >
                  {popup.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {activePage === 'course' ? (
        <main>
          <CoursePage course={activeCourse} />
        </main>
      ) : activePage === 'summer-internship' ? (
        <SummerInternshipPage />
      ) : (
        <main>
          <section className="relative overflow-hidden bg-[linear-gradient(100deg,#fffaf2_0%,#fffaf2_45%,#f4f7ff_70%,#ffe6d2_100%)]">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h1 className="text-3xl font-display font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
                  {hero.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="mt-4 max-w-xl text-base text-slate-700">
                  {hero.tagline}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    className="rounded-md bg-[#0086c9] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0077b3]"
                  >
                    {hero.cta}
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[320px] w-[320px] rounded-full border border-dashed border-[#7cc5f1]" />
                  <div className="absolute h-[380px] w-[380px] rounded-full border border-dashed border-[#9bd5f5]" />
                  <div className="absolute h-[440px] w-[440px] rounded-full border border-dashed border-[#f2b78c]" />
                </div>
                <img
                  src={hero.image}
                  alt={hero.imageAlt}
                  className="relative z-10 w-[320px] max-w-full"
                />
              </div>
            </div>
          </section>

          <section className="bg-[#0086c9] text-white">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-6 text-center sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-display font-semibold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-brand-100">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Carousel
            title={whyChoose.title}
            items={whyChoose.cards}
            renderItem={(benefit) => (
              <>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#d8eefb] text-[#0086c9]">
                  {benefitIcons[benefit.iconKey]}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{benefit.text}</p>
              </>
            )}
          />

          <section className="bg-white py-14">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex items-center justify-center">
                <div className="flex h-[380px] w-[380px] items-center justify-center overflow-visible rounded-full bg-[#fde7a0]">
                  <img
                    src={programs.image}
                    alt={programs.imageAlt}
                    className="h-[340px] w-auto object-contain"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-display font-semibold text-ink sm:text-3xl">
                  {programs.title}
                </h2>
                <div className="mt-6 space-y-5">
                  {programs.items.map((card) => (
                    <div
                      key={card.title}
                      className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-full"
                          style={{ backgroundColor: card.accent }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-6 w-6 text-slate-700"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 7h16v9H4z"
                            />
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 17h8"
                            />
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 10l2 2 4-4"
                            />
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            {card.badge}
                          </span>
                          <h3 className="mt-1 text-base font-semibold text-ink">
                            {card.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600">
                            {card.description}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="whitespace-nowrap rounded-md bg-[#0086c9] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm"
                      >
                        {card.cta}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-14">
            <div className="mx-auto max-w-6xl px-4 text-center">
              <h2 className="text-2xl font-display font-semibold text-ink sm:text-3xl lg:text-4xl">
                {skills.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600">{skills.subtitle}</p>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {skills.tracks.map((track) => (
                  <div
                    key={track.title}
                    className="rounded-2xl border border-slate-200 bg-white px-6 py-7 text-center shadow-soft"
                  >
                    <div
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-slate-900"
                      style={{ backgroundColor: track.accent }}
                    >
                      {skillIcons[track.iconKey]}
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-ink">
                      {track.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#0086c9]">
                      {track.count}
                    </p>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="mt-8 rounded-md bg-[#0086c9] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0077b3]"
              >
                {skills.cta}
              </button>
            </div>
          </section>

          <section className="bg-white py-14">
            <div className="mx-auto max-w-6xl px-4 text-center">
              <h2 className="text-2xl font-display font-semibold text-ink">
                {partners.title}
              </h2>
            </div>
            <div className="mx-auto mt-8 max-w-6xl px-4">
              <div className="logo-marquee">
                <div className="logo-track">
                  {[...partners.logos, ...partners.logos].map((logoItem, index) => (
                    <div key={`${logoItem.alt}-${index}`} className="logo-item">
                      <img
                        src={logoItem.src}
                        alt={logoItem.alt}
                        className="h-16 w-auto sm:h-20 md:h-24"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </section>

        <MentorsCarousel
          title={mentors.title}
          description={mentors.subtitle}
          items={mentors.items}
        />

        <section className="bg-white">
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-[220px] overflow-hidden bg-slate-900 sm:h-[260px] lg:h-[300px]">
              <img
                src={ctaBanner.background}
                alt="Enquiry background"
                className="h-full w-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/55" />
            </div>
            <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pt-4 pb-0 lg:pt-5 lg:pb-0 lg:grid-cols-[1.1fr_0.8fr]">
              <div className="text-white lg:pr-6">
                <p className="text-sm font-semibold text-[#2da8ff]">
                  {ctaBanner.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-display font-semibold leading-tight sm:text-4xl">
                  {ctaBanner.headline}
                </h2>
                <p className="mt-3 max-w-xl text-sm text-white/85">
                  {ctaBanner.subtext}
                </p>
              </div>
              <div className="lg:justify-self-end lg:translate-y-20">
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-[440px] rounded-2xl bg-white p-5 text-slate-800 shadow-[0_20px_40px_rgba(15,23,42,0.25)]"
                >
                  <h3 className="text-lg font-semibold text-ink">{enquiryForm.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{enquiryForm.subtitle}</p>
                  <div className="mt-4 space-y-3">
                    <input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={enquiryForm.fields.name}
                      className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={enquiryForm.fields.email}
                      className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
                    />
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={enquiryForm.fields.phone}
                      className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
                    />
                    <textarea
                      id="question"
                      name="question"
                      value={formData.question}
                      onChange={handleChange}
                      placeholder={enquiryForm.fields.question}
                      rows={2}
                      className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
                    />
                    <label className="flex items-start gap-2 text-xs text-slate-600">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-slate-300"
                      />
                      <span>
                        <span className="font-semibold text-red-500">*</span>{' '}
                        {enquiryForm.consent}
                      </span>
                    </label>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-md bg-[#0086c9] px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0077b3] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? 'Submitting...' : enquiryForm.submit}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="mx-auto -mt-[150px] max-w-6xl px-4 pb-12 pt-12">
              <div className="grid gap-4 lg:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-display font-semibold text-ink">
                    {contactHelp.title}
                  </h3>
                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    {contactHelp.options.map((option) => (
                      <div
                        key={option.label}
                        className="flex items-start gap-4 justify-center sm:justify-start"
                      >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0086c9] text-white">
                          {contactIcons[option.iconKey]}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-ink">{option.label}</p>
                          {option.details.map((detail) => (
                            <p key={detail} className="text-sm text-slate-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:block" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <Carousel
          title={trending.title}
          items={trending.items}
          sectionClassName="bg-[#f7f7fb] py-14"
          cardClassName="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-soft"
          renderItem={(course) => (
            <>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-36 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[#0086c9] px-3 py-1 text-[11px] font-semibold text-white">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
                    <path
                      fill="currentColor"
                      d="M12 2c1.9 2.3 2.7 4.7 1.7 6.9 2.1-.7 3.7-2.5 4.3-4.7C20 7 22 9.5 22 12.7 22 17 18.6 20.5 14 21.6c-4.6 1.1-9.2-1.2-10.6-5.5C2.2 12.2 4.1 8 8.2 6.2c-.1 2.2 1 4.3 2.9 5.2C10.2 8.6 10.7 5.4 12 2Z"
                    />
                  </svg>
                  {course.badge}
                </div>
              </div>
              <h3 className="mt-3 text-base font-semibold text-ink">
                {course.title}
              </h3>
              <span className="mt-2 inline-flex rounded-md bg-[#e7f3fb] px-2 py-1 text-xs font-semibold text-slate-700">
                {course.level}
              </span>
              <div className="mt-3 flex items-center gap-1 text-[#f97316]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className={`h-4 w-4 ${
                      index < (course.rating || 0) ? '' : 'text-slate-300'
                    }`}
                  >
                    <path
                      fill="currentColor"
                      d="M10 1.5l2.4 4.9 5.4.8-3.9 3.8.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.9-3.8 5.4-.8L10 1.5Z"
                    />
                  </svg>
                ))}
              </div>
              <a
                href={applicationFormUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-[#0086c9] px-4 py-2 text-xs font-semibold text-white shadow-sm"
              >
                {course.cta}
              </a>
            </>
          )}
        />

        <Carousel
          title={spotlights.title}
          items={spotlights.items}
          gap={56}
          itemsPerViewOverride={3}
          sectionClassName="bg-[#f7f7fb] py-14"
          headerClassName="relative flex items-center justify-center"
          titleClassName="text-2xl font-display font-semibold text-ink sm:text-3xl"
          controlsClassName="absolute right-0 flex items-center gap-3"
          cardClassName="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft"
          renderItem={(student) => (
            <>
              <div className="flex justify-center">
                <div className="h-20 w-20 overflow-hidden rounded-full">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#0086c9]">
                {student.name}
              </h3>
              <p className="text-sm text-slate-500">{student.role}</p>
              <p className="mt-4 text-sm text-slate-600">{student.quote}</p>
              <div className="mt-4 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => {
                  const isFilled = index < student.rating
                  return (
                    <svg
                      key={index}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className={`h-4 w-4 ${
                        isFilled ? 'text-[#0086c9]' : 'text-slate-300'
                      }`}
                    >
                      <path
                        fill="currentColor"
                        d="M10 1.5l2.4 4.9 5.4.8-3.9 3.8.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.9-3.8 5.4-.8L10 1.5Z"
                      />
                    </svg>
                  )
                })}
              </div>
            </>
          )}
        />

        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-2xl font-display font-semibold text-ink">
              {blog.title}
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {blog.items.map((post) => (
                <div key={post.title} className="flex items-start gap-4">
                  <div className="h-16 w-28 overflow-hidden rounded-md border border-slate-200 bg-white">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{post.title}</h3>
                    {post.excerpt ? (
                      <p className="mt-1 text-xs text-slate-600">{post.excerpt}</p>
                    ) : null}
                    <a
                      href={post.link}
                      className="mt-2 inline-flex text-xs font-semibold text-[#0086c9]"
                    >
                      {post.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      )}

      <Footer content={footer} socialLinks={socialLinks} />

      <button
        type="button"
        onClick={() => setIsWhatsappOpen(true)}
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_28px_rgba(0,0,0,0.25)] transition hover:scale-105"
        aria-label="Open WhatsApp chat"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
          <path
            fill="currentColor"
            d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.5-1.2A9 9 0 1 0 12 3Zm5.2 12.8c-.2.6-1.3 1.1-1.9 1.2-.5.1-1.2.1-2-.1-.5-.2-1.1-.3-1.9-.7-3.3-1.4-5.5-4.8-5.6-5s-1.1-1.5-1.1-2.9.7-2.1.9-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5.2.6.7 2.1.7 2.3 0 .2 0 .4-.1.5-.1.2-.2.3-.4.5-.2.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1 2.2 1.3 2.5 1.5.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.1.1.7-.1 1.3Z"
          />
        </svg>
      </button>

      {isWhatsappOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 px-4 py-6 sm:items-center"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsWhatsappOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-ink">WhatsApp Chat</p>
                <p className="mt-1 text-xs text-slate-500">
                  Type your message and it will open in WhatsApp.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsWhatsappOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600"
                aria-label="Close WhatsApp popup"
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
            <form onSubmit={handleSendWhatsApp} className="mt-4">
              <textarea
                value={whatsappMessage}
                onChange={(event) => setWhatsappMessage(event.target.value)}
                rows={4}
                placeholder="Type your message..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#25d366] focus:outline-none"
              />
              <div className="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsWhatsappOpen(false)}
                  className="text-sm font-semibold text-slate-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-[#25d366] px-5 py-2 text-sm font-semibold text-white shadow-sm"
                >
                  Send on WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
