const faqs = [
  {
    question: 'How do I enroll in a course?',
    answer:
      'Open the course you want and click Enroll Now. Our team will guide you through the next steps.',
  },
  {
    question: 'Do I need prior experience?',
    answer:
      'Most beginner tracks assume no prior experience. Each course page lists the expected level.',
  },
  {
    question: 'Is there a certificate after completion?',
    answer:
      'Yes. You receive a completion certificate once you finish the course requirements.',
  },
  {
    question: 'What is the class mode and schedule?',
    answer:
      'Courses are offered in online or hybrid formats. The schedule depends on the program you choose.',
  },
  {
    question: 'How can I contact support?',
    answer:
      'You can email us at info@codestring.in or call us at 6376532619.',
  },
]

function FaqPage() {
  return (
    <main className="bg-white text-ink">
      <section className="bg-[linear-gradient(120deg,#f1f5ff_0%,#efe9ff_50%,#fef3e8_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Home / FAQs
          </p>
          <h1 className="mt-3 text-3xl font-display font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Quick answers to the most common questions about CodeString programs.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-6">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
              >
                <h2 className="text-base font-semibold text-ink">
                  {item.question}
                </h2>
                <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default FaqPage
