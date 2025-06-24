import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../thunk/authThunk'
import logo from '../assets/logo.png'

const t_size = 0.6; // in rem

const ContactButton = () => {
    return (
        <button className={`text-[${t_size}rem] relative overflow-hidden text-[#EDD569] border p-2 pr-7 pl-7 md:ml-48 border-themeY/50 rounded transition-colors duration-300 group`}>
            <span className="absolute inset-0 w-full h-full bg-themeYDark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Us</span>
        </button>
    )
}

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuthenticated, user } = useSelector(state => state.user)

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/')
    }

    return (
        <nav className='fixed w-full flex sm:justify-evenly justify-between items-center p-4 md:p-10 bg-black/70 z-30'>
            <img src={logo} alt='Company Logo' className='h-8 md:pr-28' />
            {/* Desktop Nav */}
            <ul className={`hidden md:flex justify-center gap-6 lg:gap-10 text-[${t_size}rem]`}>
                <NavLink to="/" className='hover:underline hover:decoration-themeYDark decoration-themeYDark underline-offset-4 [&.active]:underline [&.active]:decoration-themeYDark' end><li>Home</li></NavLink>
                <NavLink to="/about" className='hover:underline hover:decoration-themeYDark decoration-themeYDark underline-offset-4 [&.active]:underline [&.active]:decoration-themeYDark'><li>About</li></NavLink>
                <NavLink to="/services" className='hover:underline hover:decoration-themeYDark decoration-themeYDark underline-offset-4 [&.active]:underline [&.active]:decoration-themeYDark'><li>Our Services</li></NavLink>
                <NavLink to="/whyus" className='hover:underline hover:decoration-themeYDark decoration-themeYDark underline-offset-4 [&.active]:underline [&.active]:decoration-themeYDark'><li>Why Us</li></NavLink>
                <NavLink to="/industries" className='hover:underline hover:decoration-themeYDark decoration-themeYDark underline-offset-4 [&.active]:underline [&.active]:decoration-themeYDark'><li>Industries</li></NavLink>
            </ul>            <div className='hidden md:flex items-center gap-4'>
                {isAuthenticated ? (
                    <>
                        <span className="text-white text-xs">Welcome, {user?.firstName || 'User'}</span>
                        <button
                            onClick={handleLogout}
                            className="text-[#EDD569] hover:underline text-xs"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" className="text-white hover:text-[#EDD569] text-xs">Login</NavLink>
                        <NavLink to="/signup" className="text-white hover:text-[#EDD569] text-xs">Signup</NavLink>
                        <ContactButton />
                    </>
                )}
            </div>
            {/* Hamburger Icon */}
            {!menuOpen && (
                <button className='md:hidden z-20' onClick={() => setMenuOpen(!menuOpen)} aria-label="Open Menu">
                    <svg className='w-8 h-8 text-themeYDark' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                    </svg>
                </button>
            )}
            {/* Mobile Sliding Menu */}
            <div className={`fixed top-0 right-0 h-full w-2/3 bg-black shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden text-white`}>
                <button className='absolute top-4 right-4' onClick={() => setMenuOpen(false)} aria-label="Close Menu">
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                    </svg>
                </button>
                <ul className='flex flex-col items-start gap-6 p-8 pt-16'>
                    <NavLink to="/" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-themeYDark'><li>Home</li></NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-themeYDark'><li>About</li></NavLink>
                    <NavLink to="/services" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-themeYDark'><li>Our Services</li></NavLink>                    <NavLink to="/whyus" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-themeYDark'><li>Why Us</li></NavLink>
                    <NavLink to="/industries" onClick={() => setMenuOpen(false)} className='hover:underline hover:decoration-themeYDark'><li>Industries</li></NavLink>

                    {/* Auth links for mobile */}
                    {isAuthenticated ? (
                        <>
                            <div className="border-t border-white/20 w-full my-2 pt-2">
                                <span className="text-white text-xs">Welcome, {user?.firstName || 'User'}</span>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setMenuOpen(false);
                                    }}
                                    className="block mt-2 text-[#EDD569] hover:underline text-xs"
                                >
                                    Logout
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="border-t border-white/20 w-full my-2 pt-2">
                                <NavLink to="/login" onClick={() => setMenuOpen(false)} className='block mb-2 text-[#EDD569] hover:underline text-xs'><li>Login</li></NavLink>
                                <NavLink to="/signup" onClick={() => setMenuOpen(false)} className='block mb-2 text-[#EDD569] hover:underline text-xs'><li>Sign Up</li></NavLink>
                                <ContactButton />
                            </div>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Nav