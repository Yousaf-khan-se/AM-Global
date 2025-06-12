import React from 'react'

const FeaturesCard = ({ heading, text, cardLogo }) => {

    return (
        <div className='shadow-white-soft max-w-56 p-4 pl-1 pt-0 rounded-lg sm:max-w-80 sm:p-8 sm:pt-0 sm:pl-4'>
            <img className='w-16 h-16 relative -top-4 left-2 sm:w-32 sm:h-32 sm:-top-12 sm:left-4' src={cardLogo} alt="card logo" />
            <h2 className='font-semibold p-2 pr-10 pt-0 text-left sm:text-2xl'>{heading}</h2>
            <hr className='m-6 ml-2 opacity-50' />
            <p className='text-left p-2 sm:text-lg'>{text}</p>
        </div>
    )
}

export default FeaturesCard