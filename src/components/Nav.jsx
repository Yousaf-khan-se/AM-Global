import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'


const ContactButton = () => {
    return (
        <button className='relative overflow-hidden text-yellow-500 border p-2 pr-6 pl-6 border-yellow-500 rounded-lg transition-colors duration-300 group'>
            <span className="absolute inset-0 w-full h-full bg-yellow-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Us</span>
        </button>
    )
}

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='flex justify-between items-center p-6 md:p-10'>
            <img src={logo} alt='Company Logo' className='h-8' />
            {/* Desktop Nav */}
            <ul className='hidden md:flex justify-center gap-4'>
                <NavLink to="/" className='hover:underline hover:decoration-yellow-500 decoration-yellow-500 underline-offset-4 [&.active]:underline [&.active]:decoration-yellow-500' end><li>Home</li></NavLink>
                <NavLink to="/about" className='hover:underline hover:decoration-yellow-500 decoration-yellow-500 underline-offset-4 [&.active]:underline [&.active]:decoration-yellow-500'><li>About</li></NavLink>
                <NavLink to="/access-control" className='hover:underline hover:decoration-yellow-500 decoration-yellow-500 underline-offset-4 [&.active]:underline [&.active]:decoration-yellow-500'><li>Access Control</li></NavLink>
                <NavLink to="/fire-alarms" className='hover:underline hover:decoration-yellow-500 decoration-yellow-500 underline-offset-4 [&.active]:underline [&.active]:decoration-yellow-500'><li>Fire Alarms</li></NavLink>
                <NavLink to="/cctv" className='hover:underline hover:decoration-yellow-500 decoration-yellow-500 underline-offset-4 [&.active]:underline [&.active]:decoration-yellow-500'><li>CCTV</li></NavLink>
            </ul>
            <div className='hidden md:block'>
                <ContactButton />
            </div>
            {/* Hamburger Icon */}
            {!menuOpen && (
                <button className='md:hidden z-20' onClick={() => setMenuOpen(!menuOpen)} aria-label="Open Menu">
                    <svg className='w-8 h-8 text-yellow-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                    </svg>
                </button>
            )}
            {/* Mobile Sliding Menu */}
            <div className={`fixed top-0 right-0 h-full w-2/3 bg-black shadow-lg transform transition-transform duration-300 ease-in-out z-10 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden text-white`}>
                <button className='absolute top-4 right-4' onClick={() => setMenuOpen(false)} aria-label="Close Menu">
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                    </svg>
                </button>
                <ul className='flex flex-col items-start gap-6 p-8 pt-16'>
                    <NavLink to="/" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-yellow-500'><li>Home</li></NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-yellow-500'><li>About</li></NavLink>
                    <NavLink to="/access-control" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-yellow-500'><li>Access Control</li></NavLink>
                    <NavLink to="/fire-alarms" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-yellow-500'><li>Fire Alarms</li></NavLink>
                    <NavLink to="/cctv" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-yellow-500'><li>CCTV</li></NavLink>
                    <ContactButton />
                </ul>
            </div>
        </nav>
    )
}

export default Nav