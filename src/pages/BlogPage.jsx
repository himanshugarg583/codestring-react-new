import { useState } from 'react'

const categories = [
  { label: 'DevOps', accent: '#e7f3fb' },
  { label: 'Full Stack', accent: '#fde7a0' },
  { label: 'General', accent: '#e9efff' },
  { label: 'Insights', accent: '#e6f6ef' },
  { label: 'QA', accent: '#f7e5a8' },
  { label: 'Salesforce', accent: '#e3f0c9' },
]

const blogPosts = [
  {
    title: 'How Netflix Uses Data Structures and Algorithms',
    excerpt:
      'Ever wondered how recommendation engines work? We break down the core ideas.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    readTime: '8 Min. Read',
    category: 'General',
  },
  {
    title: 'UI/UX Design: The Difference Every Designer Should Know',
    excerpt:
      'Understand the frameworks and thinking that separate UI from UX.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    readTime: '8 Min. Read',
    category: 'Insights',
  },
  {
    title: 'What Marketers Must Own in an AI-Driven Market',
    excerpt:
      'AI is changing how we create, measure, and optimize campaigns.',
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'Insights',
  },
  {
    title: 'Why HR Training Is a Must for Engineers in 2026',
    excerpt:
      'Soft skills and communication are part of every high-performing team.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'General',
  },
  {
    title: 'How Low-Code and AI Help Junior Full Stack Devs',
    excerpt:
      'Explore how tooling helps engineers ship faster without sacrificing quality.',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'Full Stack',
  },
  {
    title: 'Top Full Stack Development Trends to Watch',
    excerpt:
      'A quick scan of what employers want and how you can prepare.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'Full Stack',
  },
  {
    title: 'Still Ignoring DSA? This Might Be Why',
    excerpt:
      'DSA is not just interviews. It powers efficient production systems too.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    readTime: '5 Min. Read',
    category: 'General',
  },
  {
    title: 'What Gen AI Means for Your Career in 2026',
    excerpt:
      'How to stay relevant when AI tools become part of every workflow.',
    image:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    readTime: '5 Min. Read',
    category: 'Insights',
  },
  {
    title: '10 Important Soft Skills Every Computer Engineer Needs',
    excerpt:
      'Communication, collaboration, and clarity are now mandatory skills.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    readTime: '4 Min. Read',
    category: 'General',
  },
  {
    title: 'DevOps Pipelines Recruiters Expect in 2026',
    excerpt:
      'CI/CD fundamentals, cloud pipelines, and practical tooling checklists.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    readTime: '5 Min. Read',
    category: 'DevOps',
  },
  {
    title: 'QA Automation Testing: What to Learn First',
    excerpt:
      'A starter roadmap for tools, frameworks, and real-world testing skills.',
    image:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'QA',
  },
  {
    title: 'Salesforce Admin to Developer: First 90 Days',
    excerpt:
      'Key skills, tools, and mini-projects to level up in the ecosystem.',
    image:
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    readTime: '6 Min. Read',
    category: 'Salesforce',
  },
]

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 6
  const filteredPosts = activeCategory
    ? blogPosts.filter((post) => post.category === activeCategory)
    : blogPosts
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize))
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

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
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500"
                aria-label="Previous"
              >
                <span aria-hidden="true">&lt;</span>
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500"
                aria-label="Next"
              >
                <span aria-hidden="true">&gt;</span>
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => {
              const isActive = activeCategory === category.label

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
                    className="mb-2 h-9 w-9 rounded-full"
                    style={{ backgroundColor: category.accent }}
                  />
                  {category.label}
                </button>
              )
            })}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.length ? (
              paginatedPosts.map((post) => (
                <article
                  key={post.title}
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
                    <button
                      type="button"
                      className="rounded-md bg-[#0086c9] px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      Read More
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-center text-sm text-slate-500 md:col-span-2 lg:col-span-3">
                No posts found for this category yet.
              </div>
            )}
          </div>

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
        </div>
      </section>
    </main>
  )
}

export default BlogPage
