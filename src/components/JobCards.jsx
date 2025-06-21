import React from 'react'
import cardlogo from '../assets/jobCard/cardlogo.png'
import locationLogo from '../assets/jobCard/locationLogo.png'

const JobCards = ({ heading, startingPrice, endingPrice, experienceLvl, location, desc }) => {
    return (
        <div className='py-2 md:p-5 flex flex-col gap-1 md:gap-4 bg-black bg-gradient-to-r from-[#979797]/25 to-[#313131]/80 border-[0.1rem] border-white/30 rounded-lg'>
            <div className='flex justify-between items-start'>
                <div className='flex justify-center items-center gap-2 md:gap-4'>
                    <div className='border bg-[#B89D32] p-1 rounded-sm'> <img src={cardlogo} alt="" className='scale-75' /></div>
                    <div className='flex flex-col gap-1 md:gap-3 justify-center items-center'>
                        <h2 className='mr-3 text-lg md:text-2xl text-[#B89D32] font-semibold'>{heading}</h2>
                        <div className='flex justify-between items-end gap-3 md:gap-10  text-xs font-light'>
                            <p className='text-sm'>{experienceLvl}</p>
                            <div className='flex justify-center items-center gap-1'><img src={locationLogo} alt="" className='w-4 h-4' /><p>{location}</p></div>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <strong className='text-[#B89D32] text-lg md:text-2xl'>${startingPrice}K - ${endingPrice}K</strong>
                </div>
            </div>

            <p className='text-sm font-light opacity-90'>{desc}</p>

            <div className='flex justify-start items-center gap-2 py-2 mt-2'>
                <button className='py-[2px] px-4 bg-[rgb(184,157,50)] rounded-full text-xs'>Remote</button>
                <button className='py-[2px] px-4 bg-white/90 rounded-full text-xs text-nowrap text-black'>Full Time</button>
            </div>

        </div>
    )
}

export default JobCards