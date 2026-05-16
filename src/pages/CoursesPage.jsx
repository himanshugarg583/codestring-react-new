function CoursesPage({ courses }) {
  const grouped = courses.reduce((acc, course) => {
    const category = course.category || 'General'
    if (!acc[category]) acc[category] = []
    acc[category].push(course)
    return acc
  }, {})

  const categoryOrder = [
    'Full Stack',
    'Salesforce',
    'Dev Ops',
    'QA Automation',
    'AI',
    'General',
  ]

  const orderedCategories = [
    ...categoryOrder.filter((category) => grouped[category]),
    ...Object.keys(grouped)
      .filter((category) => !categoryOrder.includes(category))
      .sort((a, b) => a.localeCompare(b)),
  ]

  return (
    <main className="bg-white text-ink">
      <section className="bg-[linear-gradient(120deg,#f1f5ff_0%,#efe9ff_50%,#fef3e8_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Home / Courses
          </p>
          <h1 className="mt-3 text-3xl font-display font-semibold sm:text-4xl">
            All Courses
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Browse every program by track and jump into the one that fits your goals.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl space-y-12 px-4">
          {orderedCategories.map((category) => (
            <div key={category} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-display font-semibold text-ink sm:text-2xl">
                    {category}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                    {grouped[category].length} Courses
                  </p>
                </div>
                <span className="rounded-full bg-[#e7f3fb] px-4 py-2 text-xs font-semibold text-[#0086c9]">
                  Updated curriculum and mentor support
                </span>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[category].map((course) => (
                  <article
                    key={course.slug}
                    className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
                  >
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {course.badge}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {course.duration}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {course.subtitle}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                      <span className="rounded-full bg-slate-100 px-3 py-1">
                        {course.skillLevel}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1">
                        {course.language}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1">
                        {course.price}
                      </span>
                    </div>
                    <div className="mt-5">
                      <a
                        href={`/course/${encodeURIComponent(course.slug)}`}
                        className="inline-flex items-center justify-center rounded-md bg-[#0086c9] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#0077b3]"
                      >
                        View Details
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default CoursesPage
