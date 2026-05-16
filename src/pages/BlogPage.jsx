import { useEffect, useState } from 'react'
import { blogCategories, blogPosts } from '../data/blogPosts'

const categoryIcons = {
  DevOps: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 7h14M5 12h14M5 17h9"
      />
    </svg>
  ),
  'Full Stack': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 7l6-4 6 4-6 4-6-4Zm0 5l6 4 6-4M6 17l6 4 6-4"
      />
    </svg>
  ),
  General: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6h12v12H6zM9 9h6M9 12h6M9 15h4"
      />
    </svg>
  ),
  Insights: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3a7 7 0 0 1 4 12l-1.5 1.5H9.5L8 15A7 7 0 0 1 12 3Zm-2 18h4"
      />
    </svg>
  ),
  QA: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7h16v8H7l-3 3V7Zm4 2h6M8 12h4"
      />
    </svg>
  ),
  Salesforce: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 14a4 4 0 1 1 2-7.5 4.5 4.5 0 0 1 8 2A3.5 3.5 0 0 1 16 16H8a3 3 0 0 1-1-2Z"
      />
    </svg>
  ),
}

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 6
  const filteredPosts = activeCategory
    ? blogPosts.filter((post) => post.category === activeCategory)
    : blogPosts
  const totalPages = Math.ceil(filteredPosts.length / pageSize)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  useEffect(() => {
    if (totalPages === 0) {
      setCurrentPage(1)
      return
    }
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  return (
    <main className="bg-white text-ink">
      <section className="bg-[linear-gradient(120deg,#f1f5ff_0%,#efe9ff_50%,#fef3e8_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Home / Blog
          </p>
          <h1 className="mt-3 text-3xl font-display font-semibold sm:text-4xl">
            Blog
          </h1>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-ink">
                Sharing Insights, Trends, and Tech!
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Browse the latest perspectives from our mentors and students.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {blogCategories.map((category) => {
              const isActive = activeCategory === category.label
              const icon = categoryIcons[category.label]

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() =>
                    setActiveCategory((prev) => {
                      const nextValue =
                        prev === category.label ? '' : category.label
                      setCurrentPage(1)
                      return nextValue
                    })
                  }
                  className={`flex flex-col items-center justify-center rounded-xl border px-4 py-3 text-xs font-semibold shadow-soft transition ${
                    isActive
                      ? 'border-[#0086c9] bg-[#f0f8ff] text-[#0086c9]'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <span
                    className="mb-2 flex h-9 w-9 items-center justify-center rounded-full text-slate-700"
                    style={{ backgroundColor: category.accent }}
                  >
                    {icon}
                  </span>
                  {category.label}
                </button>
              )
            })}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.length ? (
              paginatedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 text-xs text-slate-400">Blog Post</div>
                  <h3 className="mt-1 text-sm font-semibold text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600">{post.excerpt}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                    <span>{post.readTime}</span>
                    <a
                      href={`/blog/${encodeURIComponent(post.slug)}`}
                      className="rounded-md bg-[#0086c9] px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-center text-sm text-slate-500 md:col-span-2 lg:col-span-3">
                No posts found for this category yet.
              </div>
            )}
          </div>

          {totalPages > 1 ? (
            <div className="mt-8 flex items-center justify-center gap-3 text-xs text-slate-600">
              {pages.map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`h-7 w-7 rounded-full border text-xs font-semibold ${
                    page === currentPage
                      ? 'border-[#0086c9] bg-[#0086c9] text-white'
                      : 'border-slate-200 text-slate-500'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  )
}

export default BlogPage
