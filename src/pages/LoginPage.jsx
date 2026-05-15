import { useState } from 'react'

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(120deg,#f7fbff_0%,#eaf5ff_45%,#fff2e8_100%)] px-4 py-12">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0086c9]">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-display font-semibold text-ink sm:text-4xl">
            Login to continue your learning journey.
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Access your courses, track progress, and pick up right where you left off.
          </p>
          <div className="mt-6 rounded-2xl border border-white/60 bg-white/80 p-4 text-sm text-slate-600 shadow-soft">
            New here? Create an account to save your progress and unlock course updates.
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-ink">Login</h2>
          <p className="mt-1 text-sm text-slate-500">
            Use your registered email and password.
          </p>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            />
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-brand-400 focus:outline-none"
            />
            <div className="flex items-center justify-between text-xs text-slate-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                Remember me
              </label>
              <a href="#" className="font-semibold text-[#0086c9]">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#0086c9] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0077b3]"
            >
              Login
            </button>
            <p className="text-center text-xs text-slate-500">
              Don&apos;t have an account?{' '}
              <a href="/register" className="font-semibold text-[#0086c9]">
                Create one
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}

export default LoginPage
