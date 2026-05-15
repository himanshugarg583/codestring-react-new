import { useEffect, useState } from 'react'

function CoursePage({ course, onSyllabusDownload }) {
  if (!course) return null

  const tabItems = course.tabs || []
  const applicationFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSe5r6u16N-cNgy9cJfifrxatcu5UsNUsVbLvXDGbcDfMZeGGw/alreadyresponded'

  const [activeTab, setActiveTab] = useState(tabItems[0] || '')

  const handleSyllabusDownload = () => {
    if (typeof onSyllabusDownload === 'function') {
      onSyllabusDownload(course)
      return
    }
    if (typeof window === 'undefined') return
    const syllabusUrl = course?.syllabusUrl || '/lead-magnets/detailed-syllabus.pdf'
    window.open(syllabusUrl, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    if (!tabItems.includes(activeTab)) {
      setActiveTab(tabItems[0] || '')
    }
  }, [tabItems, activeTab])

  const tabContent = {
    'Course Description': (
      <section className="bg-white py-8">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-sm text-slate-600">
            {course.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {course.callout && (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={course.callout.image}
                    alt="Callout"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{course.callout.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{course.callout.body}</p>
                </div>
              </div>
              <a
                href={applicationFormUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-[#0086c9] px-4 py-2 text-xs font-semibold text-white"
              >
                {course.callout.cta}
              </a>
            </div>
          )}
        </div>
      </section>
    ),
    Curriculum: (
      <section className="bg-white py-8">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-lg font-semibold text-ink">
            {course.curriculumTitle || 'Course Curriculum'}
          </h2>
          <div className="mt-4 grid gap-3">
            {course.curriculum.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    'Learning Outcome': (
      <section className="bg-white py-8">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-lg font-semibold text-ink">Learning Outcome</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.outcomes.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center text-[#0086c9]">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                    <path
                      fill="currentColor"
                      d="M9.2 16.2 4.9 12l1.4-1.4 2.9 2.9 8.5-8.5 1.4 1.4-9.9 9.8Z"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    Fees: (
      <section className="bg-white py-8">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-lg font-semibold text-ink">Fees</h2>
          <div className="mt-4 grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-soft sm:max-w-md">
            <div className="flex items-center justify-between">
              <span>Course Fee</span>
              <span className="font-semibold text-ink">{course.price}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Duration</span>
              <span className="font-semibold text-ink">{course.duration}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Effort Required</span>
              <span className="font-semibold text-ink">{course.effort}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Assessments</span>
              <span className="font-semibold text-ink">{course.assessments}</span>
            </div>
          </div>
        </div>
      </section>
    ),
    'How to Enrol': (
      <section className="bg-white py-8">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-lg font-semibold text-ink">How to Enrol</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-3">
            {course.enrolSteps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f3fb] text-[#0086c9]">
                  {index + 1}
                </div>
                <h3 className="mt-3 text-sm font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    FAQs: (
      <section className="bg-[#f7f5ff] py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-lg font-semibold text-ink">Frequently Asked Questions</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {course.faqs.map((question) => (
              <div
                key={question}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600"
              >
                <span>{question}</span>
                <span className="text-lg text-slate-400">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
  }

  const activeContent =
    tabContent[activeTab] || tabContent[tabItems[0]] || null

  return (
    <>
      <section className="bg-[linear-gradient(120deg,#f7f5ff_0%,#efe9ff_45%,#f7f7ff_100%)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="text-xs text-slate-500">
              Home / Courses / {course.title}
            </div>
            <h1 className="mt-3 text-2xl font-display font-semibold text-ink sm:text-3xl">
              {course.title}
            </h1>
            <p className="mt-2 text-sm text-slate-600">{course.subtitle}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {course.badge && (
                <span className="inline-flex items-center rounded-full bg-[#e7f3fb] px-3 py-1 text-xs font-semibold text-[#0086c9]">
                  {course.badge}
                </span>
              )}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => {
                  const isFilled = index < (course.rating ?? 5)

                  return (
                    <svg
                      key={index}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className={`h-4 w-4 ${
                        isFilled ? 'text-[#f97316]' : 'text-slate-300'
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
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={applicationFormUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#0086c9] px-5 py-2 text-sm font-semibold text-white shadow-sm"
              >
                Enrol Now
              </a>
              <button
                type="button"
                onClick={handleSyllabusDownload}
                className="inline-flex items-center justify-center rounded-md border border-[#0086c9] px-5 py-2 text-sm font-semibold text-[#0086c9]"
              >
                Download Detailed Syllabus
              </button>
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="overflow-hidden rounded-xl border border-slate-200">
              <img
                src={course.sidebarImage}
                alt={course.title}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-sm font-semibold text-ink">{course.price}</div>
            <a
              href={applicationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-[#0086c9] px-4 py-2 text-xs font-semibold text-white"
            >
              Enrol Now
            </a>
            <button
              type="button"
              onClick={handleSyllabusDownload}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-[#0086c9] px-4 py-2 text-xs font-semibold text-[#0086c9]"
            >
              Download Detailed Syllabus
            </button>
            <dl className="mt-4 grid gap-2 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <dt>Duration</dt>
                <dd className="font-semibold text-slate-700">{course.duration}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Effort Required</dt>
                <dd className="font-semibold text-slate-700">{course.effort}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Skill level</dt>
                <dd className="font-semibold text-slate-700">{course.skillLevel}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Language</dt>
                <dd className="font-semibold text-slate-700">{course.language}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Assessments</dt>
                <dd className="font-semibold text-slate-700">{course.assessments}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-lg font-semibold text-ink">Key Highlights</h2>
          <div className="mt-4 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:grid-cols-2">
            {course.highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center text-[#0086c9]">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                    <path
                      fill="currentColor"
                      d="M9.2 16.2 4.9 12l1.4-1.4 2.9 2.9 8.5-8.5 1.4 1.4-9.9 9.8Z"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-2">
        <div className="mx-auto flex max-w-6xl flex-nowrap gap-6 overflow-x-auto border-b border-slate-200 px-4 text-xs font-semibold text-slate-500">
          {tabItems.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`whitespace-nowrap pb-3 transition-colors hover:text-[#0086c9] ${
                activeTab === tab
                  ? 'text-[#0086c9] border-b-2 border-[#0086c9]'
                  : ''
              }`}
              aria-current={activeTab === tab ? 'page' : undefined}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {activeContent}

      {course.relatedCourses?.length > 0 && (
        <section className="bg-white py-10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-ink">Related Courses</h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">‹</span>
                </button>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500"
                  aria-label="Next"
                >
                  <span aria-hidden="true">›</span>
                </button>
              </div>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {course.relatedCourses.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-32 w-full object-cover"
                    />
                  </div>
                  <div className="mt-3 text-xs text-slate-500">Short Duration</div>
                  <h3 className="mt-1 text-sm font-semibold text-ink">{item.title}</h3>
                  <div className="mt-2 flex items-center gap-1 text-[#f97316]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className={`h-4 w-4 ${
                          index < item.rating ? 'text-[#f97316]' : 'text-slate-300'
                        }`}
                      >
                        <path
                          fill="currentColor"
                          d="M10 1.5l2.4 4.9 5.4.8-3.9 3.8.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.9-3.8 5.4-.8L10 1.5Z"
                        />
                      </svg>
                    ))}
                    <span className="ml-auto text-xs text-slate-500">
                      {item.duration}
                    </span>
                  </div>
                  <a
                    href={applicationFormUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-[#0086c9] px-4 py-2 text-xs font-semibold text-white"
                  >
                    Enrol Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default CoursePage
