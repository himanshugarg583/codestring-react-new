const termsSections = [
  {
    title: 'Acceptance of Terms',
    body:
      'By accessing or using CodeString services, you agree to follow these terms and all applicable laws.',
  },
  {
    title: 'Course Access',
    body:
      'Course access is granted after enrollment and may be limited to the duration specified on the program page.',
  },
  {
    title: 'Payments and Refunds',
    body:
      'Fees and refund policies are described on the relevant course pages or support documents. Please review them before enrolling.',
  },
  {
    title: 'User Conduct',
    body:
      'You agree not to misuse the platform, share restricted content publicly, or violate the rights of other learners.',
  },
  {
    title: 'Changes to Services',
    body:
      'We may update content, schedules, or pricing to improve the experience. Any major changes will be communicated.',
  },
  {
    title: 'Contact',
    body:
      'If you have questions about these terms, contact us at info@codestring.in.',
  },
]

function TermsPage() {
  return (
    <main className="bg-white text-ink">
      <section className="bg-[linear-gradient(120deg,#f1f5ff_0%,#efe9ff_50%,#fef3e8_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Home / Terms & Conditions
          </p>
          <h1 className="mt-3 text-3xl font-display font-semibold sm:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Please read these terms carefully before using CodeString services.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl space-y-6 px-4">
          {termsSections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <h2 className="text-base font-semibold text-ink">
                {section.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default TermsPage
