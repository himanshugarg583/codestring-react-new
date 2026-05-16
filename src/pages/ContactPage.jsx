import { useState } from 'react'

const contactCards = [
  {
    title: 'Call Us',
    details: ['+91 63765 32619', '+91 91234 56789'],
  },
  {
    title: 'Drop An Email',
    details: ['info@codestring.in'],
  },
  {
    title: 'Visit Us',
    details: ['Plot 14, Tech Park, Sector 52', 'Gurugram, Haryana 122001'],
  },
]

const faqItems = [
  {
    question: 'Where will the course be assigned to me?',
    answer:
      'After enrollment, your course is added to your CodeString student dashboard and you receive a confirmation by email or WhatsApp.',
  },
  {
    question: 'Do I need any technical knowledge before starting the course?',
    answer:
      'Most beginner tracks start from the basics. If a course needs prerequisites, it is mentioned on the course page.',
  },
  {
    question: 'How do I enroll in a course?',
    answer:
      'Click Enroll or fill the enquiry form. Our team contacts you, confirms the batch, and shares access after payment.',
  },
  {
    question: 'How can I get a discount?',
    answer:
      'Discounts depend on ongoing offers, early-bird windows, or group enrollments. Ask the counselor for the latest options.',
  },
  {
    question: 'Where can we attend the sessions? What if I miss a class?',
    answer:
      'Sessions are usually live online (sometimes hybrid). If you miss a class, recordings and notes are shared so you can catch up.',
  },
]

const mapSrc =
  'https://www.openstreetmap.org/export/embed.html?bbox=77.0673151%2C28.4296677%2C77.0913054%2C28.4473152&layer=mapnik&marker=28.436816%2C77.0795276'

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    question: '',
  })
  const [openIndex, setOpenIndex] = useState(0)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className="bg-white text-ink">
      <section className="bg-[linear-gradient(120deg,#f1f5ff_0%,#efe9ff_50%,#fef3e8_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Home / Contact
          </p>
          <h1 className="mt-3 text-3xl font-display font-semibold sm:text-4xl">
            Enquire With Our Experts
          </h1>
          <p className="mt-2 text-sm text-slate-600">Have questions? Ask us.</p>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-soft"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f3fb] text-[#0086c9]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    fill="currentColor"
                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 2a8 8 0 1 1-8 8 8 8 0 0 1 8-8Z"
                  />
                </svg>
              </div>
              <h2 className="mt-3 text-sm font-semibold text-ink">{card.title}</h2>
              <div className="mt-3 space-y-1 text-xs text-slate-600">
                {card.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                return (
                  <div
                    key={item.question}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex((prev) => (prev === index ? null : index))
                      }
                      className="flex w-full items-center justify-between text-left"
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <span className="text-lg text-slate-400">
                        {isOpen ? '-' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-2 text-xs text-slate-600">
                        {item.answer}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
            <button
              type="button"
              className="mt-5 rounded-md bg-[#0086c9] px-4 py-2 text-xs font-semibold text-white"
            >
              Load More
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
          >
            <h3 className="text-lg font-semibold text-ink">Enquire Now</h3>
            <div className="mt-4 space-y-3">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name*"
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID*"
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Contact Number*"
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
              />
              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                placeholder="Enquiry Question*"
                rows={3}
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
              />
              <label className="flex items-start gap-2 text-[11px] text-slate-600">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-slate-300" />
                I understand and agree that the information submitted here will be
                used to contact me.
              </label>
              <button
                type="submit"
                className="w-full rounded-md bg-[#0086c9] px-4 py-2.5 text-sm font-semibold text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-soft">
            <iframe
              title="CodeString location"
              src={mapSrc}
              className="h-80 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
