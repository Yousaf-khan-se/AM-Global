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
            <div className='flex flex-col sm:flex-row justify-evenly gap-14 items-center contents-center pb-5 pt-28'>
                <img className='w-[12%] h-auto ml-14' src={AMGlobal} alt="AM Global" />
                <div className='mt-10 text-[0.7rem]'>
                    <p className='font-extralight p-6'>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
                    <div className='font-extralight flex sm:flex-row flex-col justify-center gap-[9.2rem] ml-5'>
                        <p>(123) 456-7890</p>
                        <p>(123) 456-7890</p>
                    </div>
                    <div className='ml-[5rem] text-[0.75rem] font-extralight flex sm:flex-row flex-col justify-center gap-[0.6rem] p-10 pl-5'>
                        <h1 className='pt-3 opacity-50 mr-2'>Social Media</h1>
                        <Link><img src={facebook} alt="facebook" className='scale-[0.7]' /></Link>
                        <Link><img src={twitter} alt="twitter" className='scale-[0.7]' /></Link>
                        <Link><img src={linkedin} alt="linkedin" className='scale-[0.7]' /></Link>
                        <Link><img src={youtube} alt="youtube" className='scale-[0.7]' /></Link>
                        <Link><img src={instagram} alt="instagram" className='scale-[0.7]' /></Link>
                        <Link><img src={googleplus} alt="googleplus" className='scale-[0.7]' /></Link>
                        <Link><img src={pinterest} alt="pinterest" className='scale-[0.7]' /></Link>
                        <Link><img src={rss} alt="rss" className='scale-[0.7]' /></Link>
                    </div>
                </div>
            </div>
            <div className='ml-28 mr-24 mt-5'>
                <hr className='ml-4 opacity-40' />
                <div className="flex justify-between items-center px-4">
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