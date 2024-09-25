import React, { useState } from 'react'
import logo from "../images/logo2.png";
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className='bg-white py-2 px-12 flex justify-between items-center'>
                <img src={logo} alt="logo" className='w-16 h-16  bg-white' />

                <ul className='hidden items-center  justify-center gap-4 sm:flex'>
                    <Link to={'/'} ><li>Home</li></Link>
                    <Link to={'/about'} ><li>About</li></Link>
                    <Link to={'/'} ><li>Courses</li></Link>
                    <Link to={'/'} ><li>Careers</li></Link>
                    <Link to={'/'} ><button className='bg-black py-2 px-4 rounded-md text-white border-2 hover:border-black hover:bg-white hover:text-black'>Fee Vouchers</button></Link>
                </ul>
                <MdMenu size={32} onClick={toggleSidebar} className='block sm:hidden' />
            </nav>
            <div
                className={`fixed flex top-0 left-0 h-full w-full   text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out sm:hidden`} onClick={(e) => e.stopPropagation()}>
                <div className="w-3/4 py-4 px-5 bg-black flex flex-col ">
                    <h1 className='font-bold text-2xl text-neutral-100 mt-12'>Genius Coaching</h1>
                    <div className='list-none flex flex-col gap-2 mt-12'>
                        <Link className='small-nav-li' to={'/'} onClick={toggleSidebar}><li>Home</li></Link>
                        <Link className='small-nav-li' to={'/about'} onClick={toggleSidebar}><li>About</li></Link>
                        <Link className='small-nav-li' to={'/'} onClick={toggleSidebar}><li>Courses</li></Link>
                        <Link className='small-nav-li' to={'/'} onClick={toggleSidebar}><li>Careers</li></Link>
                        <Link className='small-nav-li' to={'/'} onClick={toggleSidebar}><li>Fee Vouchers</li></Link>                     </div>
                </div>
                <div className='w-1/2 inset-0 bg-black opacity-25' onClick={toggleSidebar}></div>
            </div>


        </header>
    )
}

export default Navbar