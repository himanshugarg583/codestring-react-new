import { useState } from 'react'
import logo from '../assets/Logo/logo.png'

function Header({ navItems }) {
  const [openSubmenu, setOpenSubmenu] = useState(null)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-3" aria-label="Go to home page">
          <img src={logo} alt="CodeString" className="h-9 w-auto" />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          {navItems.map((item) => {
            const hasDropdown = item.dropdown.length > 0
            return (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={
                  item.label === 'Courses' ? () => setOpenSubmenu(null) : undefined
                }
                onMouseLeave={
                  item.label === 'Courses' ? () => setOpenSubmenu(null) : undefined
                }
              >
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 hover:text-brand-600"
                  aria-haspopup={hasDropdown ? 'menu' : undefined}
                  aria-expanded="false"
                >
                  {item.label}
                  {hasDropdown && (
                    <svg
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-slate-500"
                    >
                      <path
                        fill="currentColor"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L8.53 10.53a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      />
                    </svg>
                  )}
                </a>
                {hasDropdown && (
                  <div className="absolute left-0 top-full w-56 rounded-md border-t-2 border-brand-500 bg-white py-2 shadow-lg ring-1 ring-slate-200/60 opacity-0 pointer-events-none transition duration-150 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
                    <ul role="menu" className="py-1">
                      {item.dropdown.map((link) => (
                        <li
                          key={link.label}
                          role="none"
                          className={link.submenu ? 'relative' : undefined}
                          onMouseEnter={
                            link.submenu
                              ? () => setOpenSubmenu(link.label)
                              : undefined
                          }
                          onMouseLeave={
                            link.submenu ? () => setOpenSubmenu(null) : undefined
                          }
                        >
                          {link.submenu ? (
                            <button
                              type="button"
                              role="menuitem"
                              onClick={(event) => {
                                event.preventDefault()
                                setOpenSubmenu((prev) =>
                                  prev === link.label ? null : link.label,
                                )
                              }}
                              aria-expanded={openSubmenu === link.label}
                              className="flex w-full items-center justify-between px-5 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                            >
                              <span>{link.label}</span>
                              {link.arrow && (
                                <svg
                                  viewBox="0 0 16 16"
                                  aria-hidden="true"
                                  className="h-3.5 w-3.5 text-slate-500"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 4l4 4-4 4"
                                  />
                                </svg>
                              )}
                            </button>
                          ) : (
                            <a
                              role="menuitem"
                              href={link.href}
                              className="flex items-center justify-between px-5 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                            >
                              <span>{link.label}</span>
                              {link.arrow && (
                                <svg
                                  viewBox="0 0 16 16"
                                  aria-hidden="true"
                                  className="h-3.5 w-3.5 text-slate-500"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 4l4 4-4 4"
                                  />
                                </svg>
                              )}
                            </a>
                          )}
                          {link.submenu && (
                            <div
                              className={`absolute left-full top-0 w-[340px] rounded-md border border-slate-200 bg-white py-3 shadow-lg transition ${
                                openSubmenu === link.label
                                  ? 'pointer-events-auto opacity-100'
                                  : 'pointer-events-none opacity-0'
                              }`}
                            >
                              <ul className="max-h-[380px] overflow-y-auto px-4 text-sm text-slate-700">
                                {link.submenu.map((subItem) => {
                                  const label =
                                    typeof subItem === 'string'
                                      ? subItem
                                      : subItem.label
                                  const href =
                                    typeof subItem === 'string' ? '#' : subItem.href

                                  return (
                                    <li key={label}>
                                      <a
                                        href={href}
                                        className="block py-1.5 hover:text-[#0086c9]"
                                      >
                                        {label}
                                      </a>
                                    </li>
                                  )
                                })}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden text-sm font-semibold text-slate-700 hover:text-brand-600 md:inline-flex"
          >
            {/* Login */}
          </a>
          <button
            type="button"
            className="hidden rounded-md bg-[#0086c9] px-6 py-2.5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#0077b3] md:inline-flex"
          >
            {/* Register */}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:text-brand-600"
            aria-label="Cart"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 9h10l-1.2 8.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 6H4"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                d="M9 12h6"
              />
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:text-brand-600"
            aria-label="Search"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 19a8 8 0 1 1 5.66-2.34L21 21"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
