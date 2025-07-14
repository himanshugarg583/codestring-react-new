import { FaArrowRight } from "react-icons/fa"
import Banner from "../assets/Images/banner.mp4"
import Footer from "../components/common/Footer"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white pt-5">
        {/* Become a Instructor Button */}
        <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <a href="https://forms.gle/CCGFrWaMmqtxGnfn8" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                <p>Get Your Internship</p>
                <FaArrowRight />
              </div>
            </a>
          </div>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          Shape Your Future with 
          <HighlightText text={"the Power of Coding"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          Our online coding courses let you learn at your own pace,
           from anywhere, with access to hands-on projects, quizzes, 
           and personalized instructor feedback — all supported by a 
           rich library of learning resources.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto="https://forms.gle/CCGFrWaMmqtxGnfn8" > 
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto="https://forms.gle/CCGFrWaMmqtxGnfn8" >
            Book your Seat
          </CTAButton>
        </div>

        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Fuel your future in tech — 
                <HighlightText text={"coding potential"} /> start learning to code online today.
              </div>
            }
            subheading={
              "Our courses are created and led by seasoned industry professionals who bring years of coding experience and a passion for teaching to every lesson."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              active: false,
              link: "https://forms.gle/CCGFrWaMmqtxGnfn8"
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Jump into coding
                <HighlightText text={" instantly."} />
              </div>
            }
            subheading={
              "Start coding real projects from day one — no delays, just hands-on learning."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              active: false,
              link: "https://forms.gle/CCGFrWaMmqtxGnfn8"
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto="https://forms.gle/CCGFrWaMmqtxGnfn8" >
                <div className="flex items-center gap-2">
                  Register Now
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto="https://forms.gle/CCGFrWaMmqtxGnfn8" target="_blank">
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Learn the skills that open doors {" "}
              <HighlightText text={"to in-demand job opportunities."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                Modern learning platforms like Codestring set new standards.
                 Today, being a competitive professional requires more than just technical skills
              </div>
              <CTAButton active={true} linkto="https://forms.gle/CCGFrWaMmqtxGnfn8" target="_blank" >
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviws from Other Learner */}
        {/* <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other interns
        </h1>
        <ReviewSlider /> */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home