import React from 'react'

const FeatureCard = ({ heading, text, cardLogo }) => {

    return (
        <div className='shadow-[1px_1px_10px_1px_rgba(255,255,255,0.2)] max-w-60 rounded-2xl sm:max-w-80'>
            {cardLogo && (
                <img className='w-16 h-16 relative -top-4 left-2 sm:w-32 sm:h-32 sm:-top-12 sm:left-4' src={cardLogo} alt="card logo" />
            )}
            <h2 className='font-semibold m-0 ml-10 mr-20 text-left sm:text-2xl'>{heading}</h2>
            <hr className='m-6 ml-10 mr-20 opacity-50' />
            <p className='text-left mt-0-0 ml-10 mr-10 mb-5'>{text}</p>
        </div>
    )
}

export default FeatureCard