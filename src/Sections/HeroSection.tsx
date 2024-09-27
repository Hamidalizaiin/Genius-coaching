import React from "react"
import studentImg from "../images/student-image.png";
import { Link } from "react-router-dom";
import { FaPen, FaEraser } from "react-icons/fa";


const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center  md:justify-between md:flex-row relative">
      <div className="flex flex-col gap-2 sm:gap-4 justify-center text-center md:text-left">
        <h1 className="max-w-full text-xl sm:text-3xl md:max-w-xl poppinFonts">Empower Your Future with Genius_Coaching</h1>
        <p className="max-w-full md:max-w-md">
          Unlock your potential with Genius Coaching! Join us for personalized guidance that empowers you to reach your goals. Together, we’ll build your path to success!
        </p>
        <Link to={'/courses'}>
          <button
            className="mx-auto md:mx-0 gap-3 flex items-center justify-center transition-all mt-2 ease-linear py-2 px-2 w-[80%] rounded-md border-2 border-black bg-black text-white hover:bg-white hover:text-black sm:w-[60%] md:w-1/2 lg:w-1/3"
          >
            Get Enroll Now
            <span>
              <FaPen size={22} className='hidden  md:block animate-pulse' />
            </span>
          </button>
        </Link>
      </div>
      <img src={studentImg} alt="hero" className="w-[250px] hidden -z-10 right-0 absolute md:static md:block md:w-[300px] lg:w-[350px] xl:w-[400px] " />
      <FaPen size={32} className='block  text-black absolute top-36 right-10 md:hidden animate-pulse' />
      <FaEraser size={32} className='block  text-black absolute bottom-36 left-10 md:hidden animate-pulse' />
    </section>
  )
}

export default HeroSection