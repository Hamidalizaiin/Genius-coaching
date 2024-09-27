import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const FAQS = () => {
    const [openId, setOpenId] = useState<null | number>(null);

    const [qna, setQna] = useState([
        {
            id: 0,
            ques: "What are the Coaching operating hours?",
            ans: "Our school operates from Monday to Friday, 8:00 AM to 3:30 PM. ",
            link: "",
            linkText:""
        },
        {
            id: 1,
            ques: "How do I apply for admission?",
            ans: `You can apply for admission by completing the Online Application Form available on our website `,
            link: "http://localhost:3000//courses",
            linkText:"Admission ."
        },
        {
            id: 2,
            ques: "What grade levels do you offer?",
            ans: `Genius Coaching offers education from Prep-1 to 12th grade) `,
            link: "",
            linkText:""
        },
        {
            id: 3,
            ques: "How can I apply for a teaching position?",
            ans: "To apply for a teaching or staff position, visit our ",
            link: "http://localhost:3000/careers"
            ,
            linkText:"Careers."
        },
    ]);

    const toggleFaq = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className='py-12'>
            <h3 className='text-3xl poppinFonts text-center'>Frequently Asked Questions</h3>
            <div className='max-w-3xl mx-auto flex flex-col gap-2 items-start mt-12'>
                {qna.map((item) => (
                    <div className='w-full' key={item.id}>
                        <button
                            onClick={() => toggleFaq(item.id)}
                            className='text-sm flex justify-between items-center font-semibold rounded-md p-2 border-2 w-full text-left hover:bg-zinc-100 sm:text-xl'>
                            {item.ques}
                            <span>{openId === item.id ? <FaMinus /> : <FaPlus />}</span>
                        </button>
                        <div
                            className={`   transition-all ease-linear overflow-hidden ${openId === item.id ? 'max-h-40 opacity-100 p-2 translate-y-1' : 'max-h-0 opacity-0 -translate-y-6'
                                }`}>
                            <p>
                                {item.ans}
                                <Link className='text-blue-400' to={item.link}>{item.linkText}</Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQS;
