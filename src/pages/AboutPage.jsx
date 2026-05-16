import heroImage from '../assets/Images/girl2.png'
import ceoImage from '../assets/mentors/mentor 1.png'
import team1 from '../assets/students/student 2.png'
import team2 from '../assets/students/student 3.png'
import team3 from '../assets/students/student 4.png'

const visionMission = [
  {
    title: 'Vision',
    text:
      'To build a dynamic ecosystem where academic knowledge translates into industry-ready skills for students and career switchers.',
  },
  {
    title: 'Mission',
    text:
      'Deliver practical, mentor-led learning with real-world projects that build confidence and job-ready expertise.',
  },
]

const teamMembers = [
  {
    name: 'Mehak Arora',
    role: 'Learning and Development',
    bio:
      'Designs structured learning paths that help students build confidence and grow faster.',
    image: team1,
  },
  {
    name: 'Manik Garg',
    role: 'Growth and Marketing',
    bio:
      'Leads community and brand initiatives that connect learners with the right programs.',
    image: team2,
  },
  {
    name: 'Vanshika Sharma',
    role: 'Senior Project Associate',
    bio:
      'Coordinates delivery and ensures every student gets the support they need.',
    image: team3,
  },
]

function AboutPage() {
  return (
    <main className="bg-white text-ink">
      <section className="bg-[linear-gradient(120deg,#f1f5ff_0%,#efe9ff_50%,#fef3e8_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Home / About Us
          </p>
          <h1 className="mt-3 text-3xl font-display font-semibold sm:text-4xl">
            About Us
          </h1>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl bg-slate-900 px-6 py-8 text-center text-white shadow-soft">
            <div className="grid gap-6 md:grid-cols-2">
              {visionMission.map((item) => (
                <div key={item.title}>
                  <h2 className="text-lg font-semibold text-[#5fd2ff]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-200">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative flex justify-center">
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[#fde7a0]" />
            <img
              src={heroImage}
              alt="Student learning"
              className="relative z-10 w-72 rounded-2xl object-cover shadow-soft"
            />
          </div>
          <div>
            <h2 className="text-2xl font-display font-semibold text-ink">
              About CodeString
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              CodeString is a practical learning platform that bridges academic theory
              with real-world skills. We focus on mentor-led training, hands-on
              projects, and career readiness.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Our programs are built with industry feedback so learners get the
              experience recruiters actually look for.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-display font-semibold">About Our Parent</h2>
          <p className="mt-3 text-sm text-slate-200">
            Our parent organization powers modern learning experiences across
            technology and business domains, serving students and working
            professionals globally.
          </p>
          <button
            type="button"
            className="mt-5 rounded-md bg-[#0086c9] px-5 py-2 text-sm font-semibold text-white"
          >
            Read More
          </button>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-display font-semibold text-ink">Meet Our CEO</h2>
            <p className="mt-3 text-sm text-slate-600">
              With decades of experience in tech and education, our leadership
              focuses on building future-ready programs and empowering learners
              across India.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              We believe in practical, project-based learning supported by mentors
              who have worked in real product teams.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <img
              src={ceoImage}
              alt="CEO"
              className="h-56 w-full rounded-xl object-cover"
            />
            <div className="mt-4 rounded-xl bg-[#e7f3fb] px-4 py-2 text-center">
              <p className="text-sm font-semibold text-[#0086c9]">Raj Agarwal</p>
              <p className="text-xs text-slate-600">CEO, CodeString</p>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-md bg-[#0086c9] px-4 py-2 text-sm font-semibold text-white"
            >
              Watch Now
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-display font-semibold text-ink">
                Team Profiles
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                The people who build learning experiences and guide student success.
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
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-soft"
              >
                <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-[#0086c9]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{member.name}</h3>
                <p className="text-xs text-[#0086c9]">{member.role}</p>
                <p className="mt-3 text-xs text-slate-600">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
