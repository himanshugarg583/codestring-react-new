function EventDetailPage({ item, typeLabel, backHref, backLabel }) {
  if (!item) {
    return (
      <main className="bg-white text-ink">
        <section className="bg-[linear-gradient(120deg,#f1f5ff_0%,#efe9ff_50%,#fef3e8_100%)]">
          <div className="mx-auto max-w-6xl px-4 py-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Home / Events & PR
            </p>
            <h1 className="mt-3 text-3xl font-display font-semibold sm:text-4xl">
              {typeLabel} Not Found
            </h1>
            <p className="mt-3 text-sm text-slate-600">
              The requested item is not available.
            </p>
            <a
              href={backHref}
              className="mt-6 inline-flex items-center justify-center rounded-md bg-[#0086c9] px-5 py-2 text-sm font-semibold text-white"
            >
              {backLabel}
            </a>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="bg-white text-ink">
      <section className="bg-[linear-gradient(120deg,#f1f5ff_0%,#efe9ff_50%,#fef3e8_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Home / Events & PR / {typeLabel}
          </p>
          <h1 className="mt-3 text-3xl font-display font-semibold sm:text-4xl">
            {item.title}
          </h1>
          <p className="mt-3 text-sm text-slate-600">{item.date}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-8 space-y-5 text-sm text-slate-600">
            {item.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f8fbff] p-6 text-sm text-slate-700">
            Want to know more? Contact our team for event highlights, partnerships, or collaborations.
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={backHref}
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700"
            >
              {backLabel}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#0086c9] px-5 py-2 text-sm font-semibold text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default EventDetailPage
