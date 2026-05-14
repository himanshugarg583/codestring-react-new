const badges = [
  'MSME Verified',
  'ISO Certified',
  'Offer Letter Provided',
  'Completion Certificate',
]

const benefits = [
  {
    icon: '🎓',
    title: 'Offer Letter',
    description:
      'Get an official offer letter before your internship begins - accepted by colleges and universities across India.',
  },
  {
    icon: '📜',
    title: 'Completion Certificate',
    description:
      'MSME Verified and ISO Certified completion certificate - recognized by recruiters and institutions nationwide.',
  },
  {
    icon: '📁',
    title: 'Major Project',
    description:
      'Work on a full-scale industry-level project relevant to your domain with expert guidance from day one.',
  },
  {
    icon: '📋',
    title: 'Minor Project',
    description:
      'Get hands-on with a domain-specific mini project to strengthen your practical understanding.',
  },
  {
    icon: '📝',
    title: 'Synopsis',
    description:
      'We provide a structured synopsis of your project - ready to submit to your college as part of your internship requirement.',
  },
  {
    icon: '📊',
    title: 'Internship Report',
    description:
      'A professionally formatted internship report covering your work, learnings, and outcomes - college submission ready.',
  },
]

const eligibility = [
  'B.Tech / B.E. students (all years)',
  'BCA / MCA students',
  'MBA / BBA students',
  'B.Sc. (CS / IT / Data Science) students',
  'Diploma Engineering students',
  'Any undergraduate looking for verified work experience',
]

const domains = [
  'Full Stack Development (React, Node.js)',
  'Gen AI and LLM Engineering',
  'Data Science and Machine Learning',
  'Cloud and DevOps',
  'Python Programming',
  'C++ and Java / DSA',
  'Android and iOS Development',
  'UI/UX Design',
  'Cybersecurity',
  'Digital Marketing (for MBA/BBA)',
  'Business Development and Sales (for MBA)',
  'HR and Operations (for MBA)',
]

const steps = [
  {
    title: 'Apply Online',
    description:
      'Fill out the internship application form with your details and domain preference.',
  },
  {
    title: 'Get Your Offer Letter',
    description:
      'Receive your official offer letter within 24-48 hours of enrollment.',
  },
  {
    title: 'Start Learning and Working',
    description:
      'Begin your internship with live sessions, mentor support, and project work.',
  },
  {
    title: 'Submit Your Deliverables',
    description:
      'Complete your major project, minor project, synopsis, and internship report with our guidance.',
  },
  {
    title: 'Receive Your Certificate',
    description:
      'Get your MSME Verified and ISO Certified Completion Certificate - downloadable and shareable on LinkedIn.',
  },
]

const certificateBadges = [
  'Government Recognized (MSME)',
  'ISO 9001 Certified',
  'Digitally Verifiable',
  'LinkedIn Shareable',
]

const highlights = [
  ['Duration', '4 Weeks / 6 Weeks / 8 Weeks'],
  ['Mode', 'Online / Hybrid'],
  ['Mentorship', '1-on-1 Expert Guidance'],
  ['Domains', '12+ Tech and Management Domains'],
  ['Certificate', 'MSME + ISO Verified'],
  [
    'Documents Provided',
    'Offer Letter, Report, Synopsis, Major and Minor Project',
  ],
  ['Eligibility', 'Any UG/PG Student'],
  ['Intake', 'Every Month'],
]

const testimonials = [
  {
    quote:
      'The internship gave me real project experience and the certificate was accepted by my college without any issues. The offer letter made it very professional.',
    author: 'Riya Sharma',
    detail: 'B.Tech CSE, Jaipur',
  },
  {
    quote:
      'I completed my Full Stack internship in 6 weeks. Got my certificate, report, and synopsis - everything my university needed. Highly recommended!',
    author: 'Aryan Gupta',
    detail: 'BCA 3rd Year, Delhi',
  },
  {
    quote:
      'As an MBA student I chose Digital Marketing domain. The internship report and completion certificate helped me a lot during placements.',
    author: 'Sneha Patel',
    detail: 'MBA, Ahmedabad',
  },
]

const faqs = [
  {
    question: 'Is this internship recognized by colleges?',
    answer:
      'Yes. We provide an official offer letter and an MSME Verified, ISO Certified completion certificate - accepted by most colleges and universities across India.',
  },
  {
    question: 'Will I get a physical certificate?',
    answer:
      'You will receive a digital certificate that is downloadable, printable, and shareable directly on LinkedIn.',
  },
  {
    question: 'What documents will I receive?',
    answer:
      'Offer Letter, Completion Certificate, Internship Report, Synopsis, Major Project, and Minor Project.',
  },
  {
    question: 'How long is the internship?',
    answer:
      'We offer flexible durations - 4 Weeks, 6 Weeks, and 8 Weeks depending on your requirement.',
  },
  {
    question: 'Is there any mentorship support?',
    answer: 'Yes, every intern gets dedicated mentor support throughout the program.',
  },
  {
    question: 'Can final year students apply?',
    answer: 'Yes, students from any year - 1st to final year - can apply.',
  },
  {
    question: 'When does the next batch start?',
    answer: 'We have rolling admissions - new batches start every month.',
  },
]

const certificateSamples = [
  {
    title: 'MSME Internship Certificate',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'ISO Completion Certificate',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
  },
]

function SummerInternshipPage() {
  const applicationFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSe5r6u16N-cNgy9cJfifrxatcu5UsNUsVbLvXDGbcDfMZeGGw/alreadyresponded'

  return (
    <main className="bg-surface text-ink">
      <section className="relative overflow-hidden bg-[linear-gradient(120deg,#f7fbff_0%,#eaf5ff_48%,#fff2e8_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <p className="inline-flex rounded-full bg-[#e7f3fb] px-3 py-1 text-xs font-semibold text-[#0086c9]">
            Summer Internship Program
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-display font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Launch Your Career This Summer - Intern with Industry Experts
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-600 sm:text-base">
            Join our Government-Recognized Summer Internship Program and gain
            real-world experience with certified proof that matters.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#c8e7f8] bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={applicationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#0086c9] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0077b3]"
            >
              Apply Now →
            </a>
            <button
              type="button"
              className="rounded-md border border-[#0086c9] bg-white px-6 py-2.5 text-sm font-semibold text-[#0086c9] transition hover:bg-[#e7f3fb]"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-display font-semibold text-ink sm:text-3xl">
            Everything You Need to Stand Out
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7f3fb] text-xl">
                  <span aria-hidden="true">{item.icon}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-display font-semibold text-ink">Who Is This For?</h2>
            <ul className="mt-5 grid gap-3 text-sm text-slate-700">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-[#0086c9]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-display font-semibold text-ink">Choose Your Domain</h2>
            <ul className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {domains.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-[#0086c9]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-display font-semibold text-ink sm:text-3xl">
            Simple 5-Step Process
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
              >
                <p className="inline-flex rounded-full bg-[#e7f3fb] px-3 py-1 text-xs font-semibold text-[#0086c9]">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-display font-semibold text-ink sm:text-3xl">
            Certificates That Carry Weight
          </h2>
          <p className="mt-3 max-w-4xl text-sm text-slate-600">
            Our internship certificates are MSME Verified and ISO Certified -
            making them valid proof of experience for campus placements, job
            applications, and higher studies.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {certificateSamples.map((certificate) => (
              <article
                key={certificate.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-52 w-full object-cover sm:h-60"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-ink">{certificate.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {certificateBadges.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#c8e7f8] bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-display font-semibold text-ink sm:text-3xl">
            Why Students Choose Us
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#e7f3fb] text-[#0c4a6e]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {highlights.map(([feature, detail], index) => (
                  <tr
                    key={feature}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-[#f9fcff]'}
                  >
                    <td className="border-t border-slate-100 px-4 py-3 font-semibold text-slate-700">
                      {feature}
                    </td>
                    <td className="border-t border-slate-100 px-4 py-3 text-slate-600">
                      {detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-display font-semibold text-ink sm:text-3xl">
            What Our Interns Say
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.author}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
              >
                <p className="text-sm text-slate-600">"{item.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-ink">{item.author}</p>
                <p className="text-xs text-[#0086c9]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-display font-semibold text-ink sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft"
              >
                <h3 className="text-sm font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-[linear-gradient(120deg,#0086c9_0%,#006ca1_50%,#005b87_100%)] p-8 text-white shadow-soft sm:p-10">
            <h2 className="text-2xl font-display font-semibold sm:text-3xl">
              Ready to Get Certified This Summer?
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-white/90">
              Seats are limited. Apply today and get your offer letter within 48
              hours.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={applicationFormUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-green px-6 py-2.5 text-sm font-semibold text-[#1b262c] shadow-sm"
              >
                Apply Now →
              </a>
              <a
                href="https://wa.me/916376532619?text=Hi%2C%20I%20want%20to%20talk%20to%20a%20counsellor."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-2.5 text-sm font-semibold text-white"
              >
                Talk to a Counsellor
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                'MSME Verified',
                'ISO Certified',
                '500+ Interns Trained',
                '12+ Domains',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SummerInternshipPage
