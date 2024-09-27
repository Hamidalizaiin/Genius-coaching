import React from 'react'
import { RiTeamLine } from "react-icons/ri";
import { FaArrowUpLong } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { FaCommentDots } from 'react-icons/fa';

const KeyPoints = () => {
  let content = [
    {
      title: "Well-Managed System",
      description: "Our coaching programs are carefully designed with clear objectives",
      icon: <GiTeacher size={38} />

    },
    {
      title: "Development",
      description: "We focus not just on academic success but also on personal growth,",
      icon: <FaArrowUpLong size={38} />,
    },
    {
      title: "Experienced Teachers",
      description: "Our team of qualified and experienced coaches is dedicated to your success.",
      icon: <RiTeamLine size={38} />
    },
    // {
    //   title: "Commitment",
    //   description: "We are dedicated to continuous improvement and regularly update our programs based on the latest research",
    //   icon: <FaCommentDots size={38}/>
    // },
  ]
  return (
    <section>
      <div className='flex flex-wrap justify-center items-center'>
        {content.map((item, index) => (
          <div key={index} className='py-12 flex flex-col gap-3 justify-center items-center text-center'>
            <div
              className="w-32 h-32 rounded-full border-2 bg-white shadow-md shadow-slate-500 flex 
              flex-col justify-center items-center hover:bg-black  hover:text-white transition-all ease-linear duration-300"
            >
              {item.icon}
              </div>
            <h2 className='text-lg poppinFonts'>{item.title}</h2>
            <p className='max-w-sm mx-auto'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default KeyPoints