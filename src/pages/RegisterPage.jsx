import { useState } from 'react'

function RegisterPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(120deg,#fffaf2_0%,#f7f7ff_45%,#eaf5ff_100%)] px-4 py-12">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0086c9]">
            Get started
          </p>
          <h1 className="mt-3 text-3xl font-display font-semibold text-ink sm:text-4xl">
            Create your CodeString account.
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Save your progress, access exclusive roadmaps, and receive learning updates.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            <li>• Personalized course recommendations</li>
            <li>• Priority access to new batches</li>
            <li>• Mentor guidance and support</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-ink">Register</h2>
          <p className="mt-1 text-sm text-slate-500">
            Fill in your details to create an account.
          </p>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="WhatsApp number"
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            />
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            />
            <label className="flex items-start gap-2 text-xs text-slate-600">
              <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-slate-300" />
              I agree to the Terms & Conditions and Privacy Policy.
            </label>
            <button
              type="submit"
              className="w-full rounded-md bg-[#0086c9] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0077b3]"
            >
              Create Account
            </button>
            <p className="text-center text-xs text-slate-500">
              Already have an account?{' '}
              <a href="/login" className="font-semibold text-[#0086c9]">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}

export default RegisterPage
