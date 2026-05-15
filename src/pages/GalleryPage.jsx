import { useState } from 'react'

const imageItems = [
  {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    alt: 'Workshop session',
  },
  {
    src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80',
    alt: 'Seminar hall',
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    alt: 'Classroom session',
  },
  {
    src: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=900&q=80',
    alt: 'Student gathering',
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
    alt: 'Graduation group',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    alt: 'Mentor group photo',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    alt: 'Learning session',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    alt: 'Workshop crowd',
  },
  {
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
    alt: 'Team collaboration',
  },
  {
    src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
    alt: 'Classroom activity',
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    alt: 'Coding workshop',
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    alt: 'Student demo day',
  },
]

const videoItems = [
  {
    title: 'SkillStone Thought Ticklers',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Aalok Ramsisaria | CEO',
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Why QA Automation Testing is Great',
    image:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Unleashing the Power of Salesforce',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Career Insights: Product Engineering',
    image:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Data Science Roadmap 2026',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Gen AI Bootcamp Highlights',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Full Stack Project Showcase',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
  },
]

function GalleryPage() {
  const [imagePage, setImagePage] = useState(1)
  const [videoPage, setVideoPage] = useState(1)
  const imagePageSize = 6
  const videoPageSize = 4
  const imagePageCount = Math.max(
    1,
    Math.ceil(imageItems.length / imagePageSize),
  )
  const videoPageCount = Math.max(
    1,
    Math.ceil(videoItems.length / videoPageSize),
  )
  const safeImagePage = Math.min(imagePage, imagePageCount)
  const safeVideoPage = Math.min(videoPage, videoPageCount)
  const pagedImages = imageItems.slice(
    (safeImagePage - 1) * imagePageSize,
    safeImagePage * imagePageSize,
  )
  const pagedVideos = videoItems.slice(
    (safeVideoPage - 1) * videoPageSize,
    safeVideoPage * videoPageSize,
  )
  const videoPages = Array.from(
    { length: videoPageCount },
    (_, index) => index + 1,
  )

  return (
    <main className="bg-white text-ink">
      <section className="bg-[linear-gradient(120deg,#f1f5ff_0%,#efe9ff_50%,#fef3e8_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Home / Gallery
          </p>
          <h1 className="mt-3 text-3xl font-display font-semibold sm:text-4xl">
            Our Images
          </h1>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink">Our Images</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setImagePage((prev) => Math.max(1, prev - 1))
                }
                disabled={safeImagePage === 1}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500"
                aria-label="Previous"
              >
                <span aria-hidden="true">&lt;</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  setImagePage((prev) => Math.min(imagePageCount, prev + 1))
                }
                disabled={safeImagePage === imagePageCount}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500"
                aria-label="Next"
              >
                <span aria-hidden="true">&gt;</span>
              </button>
            </div>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pagedImages.map((item) => (
              <div
                key={item.src}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(120deg,#f1f5ff_0%,#efe9ff_50%,#fef3e8_100%)] py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-display font-semibold text-ink">
            Our Videos
          </h2>
          <div className="mx-auto mt-4 flex w-full max-w-xl items-center rounded-full border border-slate-200 bg-white px-4 py-2 shadow-soft">
            <input
              type="text"
              placeholder="Type to Search..."
              className="w-full bg-transparent text-sm text-slate-600 focus:outline-none"
            />
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0086c9] text-white">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 19a8 8 0 1 1 5.66-2.34L21 21"
                />
              </svg>
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <h3 className="text-sm font-semibold text-ink">Filters</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:max-w-md">
              <select className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">
                <option>Category</option>
                <option>Workshops</option>
                <option>Talks</option>
                <option>Community</option>
              </select>
              <select className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">
                <option>Year</option>
                <option>2026</option>
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pagedVideos.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-3 shadow-soft"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-32 w-full object-cover"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label="Play video"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0086c9]">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                        <path
                          fill="currentColor"
                          d="M8 5v14l11-7L8 5Z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <h4 className="mt-3 text-xs font-semibold text-ink">{item.title}</h4>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-xs text-slate-600">
            {videoPages.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setVideoPage(page)}
                className={`h-7 w-7 rounded-full border text-xs font-semibold ${
                  page === safeVideoPage
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
    </main>
  )
}

export default GalleryPage
