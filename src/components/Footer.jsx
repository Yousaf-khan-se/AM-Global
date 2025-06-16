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
        <nav className='pb-8'>
            <div className='flex flex-col sm:flex-row justify-evenly items-center contents-center pb-5 pt-36'>
                <img className='w-[11%] h-auto ml-14' src={AMGlobal} alt="AM Global" />
                <div className='mt-10'>
                    <p className='text-[0.65rem] font-extralight p-6'>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
                    <div className='text-[0.65rem] font-extralight flex sm:flex-row flex-col justify-center gap-32'>
                        <p>(123) 456-7890</p>
                        <p>(123) 456-7890</p>
                    </div>
                    <div className='ml-28 text-[0.65rem] font-extralight flex sm:flex-row flex-col justify-center gap-2 p-10'>
                        <h1 className='pt-3 opacity-50'>Social Media</h1>
                        <Link><img src={facebook} alt="facebook" className='scale-75' /></Link>
                        <Link><img src={twitter} alt="twitter" className='scale-75' /></Link>
                        <Link><img src={linkedin} alt="linkedin" className='scale-75' /></Link>
                        <Link><img src={youtube} alt="youtube" className='scale-75' /></Link>
                        <Link><img src={twitter} alt="twitter" className='scale-75' /></Link>
                        <Link><img src={instagram} alt="instagram" className='scale-75' /></Link>
                        <Link><img src={googleplus} alt="googleplus" className='scale-75' /></Link>
                        <Link><img src={pinterest} alt="pinterest" className='scale-75' /></Link>
                        <Link><img src={rss} alt="rss" className='scale-75' /></Link>
                    </div>
                </div>
            </div>
            <div className='ml-40 mr-40'>
                <hr className=' opacity-40' />
                <div className="flex justify-between items-center px-4">
                    <ul className="flex justify-start items-center gap-12 text-[0.65rem] font-extralight pt-5 pb-5">
                        <Link className='hover:font-normal'><li>ABOUT US</li></Link>
                        <Link className='hover:font-normal'><li>CONTACT US</li></Link>
                        <Link className='hover:font-normal'><li>HELP</li></Link>
                        <Link className='hover:font-normal'><li>PRIVACY POLICY</li></Link>
                        <Link className='hover:font-normal'><li>DISCLAIMER</li></Link>
                    </ul>

                    <p className="opacity-60 text-[0.65rem] font-extralight whitespace-nowrap">
                        Copyright &copy; 2024 <span className="font-extrabold">.</span> GM Global
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default Footer