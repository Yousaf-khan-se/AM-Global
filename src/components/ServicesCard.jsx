import React from 'react'

const ServicesCard = ({ heading, text, cardLogo, color, flexWidth }) => {
    // console.log(flexWidth);
    return (
        <div className={`sm:flex-${flexWidth ? '[' + flexWidth + ']' : '1'} shadow-[1px_1px_10px_1px_rgba(255,255,255,0.2)] max-w-64 rounded-2xl bg-${color} p-1 ${flexWidth === '2' ? 'sm:max-w-[32rem]' : 'sm:max-w-60 sm:p-0 sm:pt-1'}`}>
            {
                cardLogo && (
                    <img className='w-14 h-14 relative top-2 left-2 sm:w-16 sm:h-16 sm:top-2 sm:left-4 mb-8' src={cardLogo} alt="card logo" />
                )
            }
            <h2 className='font-bold m-1 ml-5 mr-40 mb-6 text-left text-xl sm:text-2xl'>{heading}</h2>
            <p className='text-left mt-0 ml-5 mr-5 mb-5 text-sm'>{text}</p>
        </div >
    )
}

export default ServicesCard