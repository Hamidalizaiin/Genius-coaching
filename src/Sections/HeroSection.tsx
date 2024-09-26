import React from "react"
import studentImg from "../images/student-image.png";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <section className="h-[600px] flex flex-col justify-between items-center sm:flex-row px-12 xl:px-0">
      <div className="flex flex-col gap-4 ">
        <h1 className="max-w-md text-3xl">Empower Your Future with Genius_Coaching</h1>
        <p className="max-w-lg">Achieve the breakthroughs you deserve. Whether you're looking to advance in your career,
          enhance personal growth, or master new skills, our expert coaches are here to guide you every step of the way.</p>
        <Link to={'/about'}>
          <button
            className="transition-all ease-linear py-2 px-2 w-1/3 rounded-md border-2 border-black bg-black text-white hover:bg-white hover:text-black"
          >
            Get Enroll Now
          </button>
        </Link>
      </div>
      <img src={studentImg} alt="hero" className="w-1/4 " />
    </section>
  )
}

export default HeroSection