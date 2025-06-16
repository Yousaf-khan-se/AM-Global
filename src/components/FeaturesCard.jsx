import React from 'react'

const FeatureCard = ({ heading, text, cardLogo, themeNo }) => {

    return (
        < div className={`bg-gradient-to-br ${themeNo == 1 ? 'from-white/10' : 'from-themeYTwo'} ${themeNo == 1 ? 'to-black' : 'to-themeYDarkTwo'} bg-black/50 border border-white/15 w-[27%] min-h-80 rounded-xl sm:max-w-[20.5rem] flex flex-col justify-center`
        }>
            {cardLogo && (
                <img className='w-12 h-12 relative -top-4 left-2 sm:w-24 sm:h-24 sm:-top-12 sm:left-5' src={cardLogo} alt="card logo" />
            )}
            <div className='ml-6 mr-8'>
                <h2 className='font-semibold self-center text-left pr-14 sm:text-2xl'>{heading}</h2>
                <hr className='relative border mr-20 opacity-20 mt-4 mb-4' />
                <p className='text-[0.84rem] text-left mb-5 font-extralight'>{text}</p>
            </div>
        </div >
    )
}

export default FeatureCard