import React from 'react'
import sideImg from "../images/sideWave.png";
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <section className='h-[600px] flex flex-col gap-4 items-center justify-center relative'>
            <h1 className='text-4xl poppinFonts sm:text-5xl'>About Us</h1>
            <p className='max-w-5xl text-sm text-center md:text-base '>
                What sets us apart is our team of highly qualified coaches who are not just experts in their fields but are
                passionate about helping you succeed. Whether you’re aiming to excel academically, enhance your career prospects,
                or build new skills, our coaches are here to provide the mentorship and resources needed to make it happen.
            </p>
            <Link to={'/about'} className='w-1/2 mt-2 border-2 bg-black text-white rounded-md transition-all ease-linear
                hover:bg-white hover:text-black border-black p-2 lg:w-1/3 text-center'>
                Learn more
            </Link>
            <img src={sideImg} alt="" className='absolute top-0 -left-20 w-52 md:-left-32 ' />

        </section>
    )
}

export default AboutUs