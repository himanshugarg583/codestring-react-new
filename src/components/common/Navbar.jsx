import React, { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { Link, matchPath, useLocation } from "react-router-dom"
import logo from "../../assets/Logo/logo2.png"
import { NavbarLinks } from "../../data/navbar-links"

function Navbar() {
  const location = useLocation()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showMobileCourses, setShowMobileCourses] = useState(false)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" className="mt-[5px] pb-4 pt-5" />
        {/* Desktop Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Caurses" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        link.path && matchRoute(link.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <p className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50">Web Development</p>
                        <p className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50">App Development</p>
                        <p className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50">Machine Learning</p>
                        <p className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50">Java</p>
                        <p className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50">C++</p>
                        <p className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50">Python</p>
                        <p className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50">Dsa</p>
                      </div>
                    </div>
                  </>
                ) : (
                  link.path ? (
                    <Link to={link.path}>
                      <p
                        className={
                          matchRoute(link.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }
                      >
                        {link.title}
                      </p>
                    </Link>
                  ) : (
                    <p className="text-richblack-25">{link.title}</p>
                  )
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Navigation links */}
        {showMobileMenu && (
          <nav className="absolute top-16 left-0 w-full bg-richblack-900 z-50 md:hidden">
            <ul className="flex flex-col gap-4 p-4 text-richblack-25">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Caurses" ? (
                    <>
                      <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => setShowMobileCourses((prev) => !prev)}
                      >
                        <span>{link.title}</span>
                        <BsChevronDown className={showMobileCourses ? "rotate-180 transition-transform" : "transition-transform"} />
                      </div>
                      {showMobileCourses && (
                        <div className="flex flex-col gap-2 pl-4 mt-2">
                          <p className="rounded-lg bg-transparent py-2 pl-2 hover:bg-richblack-50">Web Development</p>
                          <p className="rounded-lg bg-transparent py-2 pl-2 hover:bg-richblack-50">App Development</p>
                          <p className="rounded-lg bg-transparent py-2 pl-2 hover:bg-richblack-50">Machine Learning</p>
                          <p className="rounded-lg bg-transparent py-2 pl-2 hover:bg-richblack-50">Java</p>
                          <p className="rounded-lg bg-transparent py-2 pl-2 hover:bg-richblack-50">C++</p>
                          <p className="rounded-lg bg-transparent py-2 pl-2 hover:bg-richblack-50">Python</p>
                          <p className="rounded-lg bg-transparent py-2 pl-2 hover:bg-richblack-50">Dsa</p>
                        </div>
                      )}
                    </>
                  ) : link.path ? (
                    <Link to={link.path} onClick={() => setShowMobileMenu(false)}>
                      <p
                        className={
                          matchRoute(link.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }
                      >
                        {link.title}
                      </p>
                    </Link>
                  ) : (
                    <p className="text-richblack-25">{link.title}</p>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
            +91 6376532619
          </button>
          <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
            Info@codestring.in
          </button>
        </div>
        <button className="mr-4 md:hidden" onClick={() => setShowMobileMenu((prev) => !prev)}>
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  )
}

export default Navbar