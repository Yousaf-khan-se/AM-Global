import React from 'react'
import AMGlobal from '../assets/footerLogo/AMGlobal.png'
import facebook from '../assets/footerLogo/facebook.png'
import googleplus from '../assets/footerLogo/googleplus.png'
import instagram from '../assets/footerLogo/instagram.png'
import linkedin from '../assets/footerLogo/linkedin.png'
import pinterest from '../assets/footerLogo/pinterest.png'
import rss from '../assets/footerLogo/rss.png'
import twitter from '../assets/footerLogo/twitter.png'
import youtube from '../assets/footerLogo/youtube.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <nav className='pb-4 lg:pb-8 w-full bg-black'>
            {/* Main Footer Content */}
            <div className='flex flex-col lg:flex-row justify-center lg:justify-evenly gap-8 lg:gap-4 items-center px-4 lg:px-0 pb-5 pt-16 lg:pt-28'>
                {/* Logo Section */}
                <div className='flex justify-center lg:block'>
                    <img className='w-32 lg:w-[55%] h-auto lg:ml-14' src={AMGlobal} alt="AM Global" />
                </div>

                {/* Contact and Social Media Section */}
                <div className='text-center lg:text-left lg:mt-10 text-xs lg:text-[0.7rem]'>
                    {/* Address */}
                    <p className='font-extralight p-4 lg:p-6 lg:ml-[7.5rem]'>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>

                    {/* Phone Numbers */}
                    <div className='font-extralight flex flex-col sm:flex-row justify-center gap-4 lg:gap-[9.2rem] lg:ml-14 mb-6 lg:mb-0'>
                        <p>(123) 456-7890</p>
                        <p>(123) 456-7890</p>
                    </div>

                    {/* Social Media Section */}
                    <div className='lg:ml-[5rem] text-sm lg:text-[0.75rem] font-extralight flex flex-col lg:flex-row items-center lg:justify-center gap-4 lg:gap-[0.6rem] p-6 lg:p-10 lg:pl-5'>
                        <h1 className='opacity-50 mb-2 lg:mb-0 lg:pt-3 lg:mr-2'>Social Media</h1>
                        <div className='flex flex-wrap justify-center gap-2 lg:gap-1'>
                            <Link><img src={facebook} alt="facebook" className='scale-[0.6] lg:scale-[0.7] hover:scale-[0.7] lg:hover:scale-[0.8] transition-transform' /></Link>
                            <Link><img src={twitter} alt="twitter" className='scale-[0.6] lg:scale-[0.7] hover:scale-[0.7] lg:hover:scale-[0.8] transition-transform' /></Link>
                            <Link><img src={linkedin} alt="linkedin" className='scale-[0.6] lg:scale-[0.7] hover:scale-[0.7] lg:hover:scale-[0.8] transition-transform' /></Link>
                            <Link><img src={youtube} alt="youtube" className='scale-[0.6] lg:scale-[0.7] hover:scale-[0.7] lg:hover:scale-[0.8] transition-transform' /></Link>
                            <Link><img src={instagram} alt="instagram" className='scale-[0.6] lg:scale-[0.7] hover:scale-[0.7] lg:hover:scale-[0.8] transition-transform' /></Link>
                            <Link><img src={googleplus} alt="googleplus" className='scale-[0.6] lg:scale-[0.7] hover:scale-[0.7] lg:hover:scale-[0.8] transition-transform' /></Link>
                            <Link><img src={pinterest} alt="pinterest" className='scale-[0.6] lg:scale-[0.7] hover:scale-[0.7] lg:hover:scale-[0.8] transition-transform' /></Link>
                            <Link><img src={rss} alt="rss" className='scale-[0.6] lg:scale-[0.7] hover:scale-[0.7] lg:hover:scale-[0.8] transition-transform' /></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className='mx-4 lg:ml-28 lg:mr-24 mt-5'>
                <hr className='lg:ml-4 opacity-40' />

                {/* Mobile Layout */}
                <div className="block lg:hidden px-4 py-6">
                    {/* Navigation Links - Mobile */}
                    <ul className="flex flex-wrap justify-center items-center gap-4 text-xs font-extralight mb-6">
                        <Link className='hover:font-normal'><li>ABOUT US</li></Link>
                        <Link className='hover:font-normal'><li>CONTACT US</li></Link>
                        <Link className='hover:font-normal'><li>HELP</li></Link>
                        <Link className='hover:font-normal'><li>PRIVACY POLICY</li></Link>
                        <Link className='hover:font-normal'><li>DISCLAIMER</li></Link>
                    </ul>

                    {/* Copyright - Mobile */}
                    <p className="opacity-60 text-center text-xs font-extralight font-Assistant">
                        Copyright &copy; 2024 <span className="font-extrabold">.</span> GM GLOABAL
                    </p>
                </div>

                {/* Desktop Layout - Hidden on Mobile */}
                <div className="hidden lg:flex justify-between items-center px-4">
                    <ul className="flex justify-start items-center gap-[3.2rem] text-[0.7rem] font-extralight pt-7 pb-7">
                        <Link className='hover:font-normal'><li>ABOUT US</li></Link>
                        <Link className='hover:font-normal'><li>CONTACT US</li></Link>
                        <Link className='hover:font-normal'><li>HELP</li></Link>
                        <Link className='hover:font-normal'><li>PRIVACY POLICY</li></Link>
                        <Link className='hover:font-normal'><li>DISCLAIMER</li></Link>
                    </ul>

                    <p className="opacity-60 ml-4 text-[0.7rem] font-extralight font-Assistant">
                        Copyright &copy; 2024 <span className="font-extrabold">.</span> GM GLOABAL
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default Footer