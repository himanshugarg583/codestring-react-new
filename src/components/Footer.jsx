function Footer({ content, socialLinks }) {
  if (!content) return null

  const socialIcons = {
    Facebook: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M14 9h3V6h-3c-2 0-3 1.6-3 3.5V12H8v3h3v6h3v-6h2.7l.5-3H14V9.5c0-.3.3-.5.6-.5Z"
        />
      </svg>
    ),
    X: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M6 5h3.2l3.1 4.4L16.2 5H19l-5.2 7 5.4 7h-3.2l-3.5-4.8-3.6 4.8H6l5.6-7.3L6 5Z"
        />
      </svg>
    ),
    YouTube: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M21 8.2a3 3 0 0 0-2.1-2.1C17 5.6 12 5.6 12 5.6s-5 0-6.9.5A3 3 0 0 0 3 8.2c-.5 1.7-.5 3.8-.5 3.8s0 2.1.5 3.8a3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1c.5-1.7.5-3.8.5-3.8s0-2.1-.5-3.8ZM10 14.5V9.5l4.5 2.5L10 14.5Z"
        />
      </svg>
    ),
    Instagram: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm6-.8a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z"
        />
      </svg>
    ),
    LinkedIn: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M6 9h3v10H6V9Zm1.5-4a1.8 1.8 0 1 1-1.8 1.8A1.8 1.8 0 0 1 7.5 5ZM11 9h2.9v1.4h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.6V19h-3v-4.2c0-1 0-2.2-1.4-2.2-1.4 0-1.7 1-1.7 2.2V19h-3V9Z"
        />
      </svg>
    ),
  }

  const resolvedSocialLinks = Array.isArray(socialLinks) ? socialLinks : []

  return (
    <footer className="bg-[#3a3a3a] text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.9fr_1.1fr]">
          <div>
            <h3 className="text-base font-semibold text-white">
              {content.brandTagline}
            </h3>
            <div className="mt-4 flex items-center gap-3">
              {resolvedSocialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                  aria-label={item.label}
                >
                  {socialIcons[item.label]}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {content.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Support &amp; Information</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {content.supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center text-white">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                    <path
                      fill="currentColor"
                      d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"
                    />
                  </svg>
                </span>
                <span>{content.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center text-white">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                    <path
                      fill="currentColor"
                      d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2 0v.5l8 4.8 8-4.8V6H6Zm12 12V9.1l-7.5 4.5a1 1 0 0 1-1 0L6 9.1V18h12Z"
                    />
                  </svg>
                </span>
                {content.contact.email}
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center text-white">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                    <path
                      fill="currentColor"
                      d="M6.6 10.2a15.2 15.2 0 0 0 7.2 7.2l2.4-2.4a1 1 0 0 1 1-.24c1.1.36 2.3.55 3.5.55a1 1 0 0 1 1 1v3.7a1 1 0 0 1-1 1C9.6 21 3 14.4 3 6.3a1 1 0 0 1 1-1H7.7a1 1 0 0 1 1 1c0 1.2.19 2.4.55 3.5a1 1 0 0 1-.24 1l-2.38 2.4Z"
                    />
                  </svg>
                </span>
                {content.contact.phone}
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center text-white">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                    <path
                      fill="currentColor"
                      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 2a8 8 0 1 1-8 8 8 8 0 0 1 8-8Zm-1 3h2v5.2l3.6 2.1-1 1.7L11 13.1Z"
                    />
                  </svg>
                </span>
                {content.contact.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">
        {content.copyright}
      </div>
    </footer>
  )
}

export default Footer
