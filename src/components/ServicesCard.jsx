import React from 'react'

const ServicesCard = ({ heading, text, cardLogo, color, flexWidth, h }) => {
    const grad = {
        from: color == 'yellow' ? 'from-[#EDD569]/90' : 'from-[#484848]/85',
        to: color == 'yellow' ? 'to-[#977619]' : 'to=[#1E1E1E]'
    }

    if (!h) {
        console.log('hight is not given for service cards.')
    }

    return (
        <div className={`${h} border-2 border-white/5 bg-gradient-to-br ${grad.from} ${grad.to} bg-black sm:flex-${flexWidth ? '[' + flexWidth + ']' : '1'} max-w-64 rounded-2xl p-1 ${flexWidth === '2' ? 'sm:max-w-[32rem]' : 'sm:max-w-60 sm:p-0 sm:pt-1 sm:pb-2 font-extralight'}`}>
            {
                cardLogo && (
                    <img className='w-14 h-14 relative top-2 left-2 sm:w-16 sm:h-16 sm:top-3 sm:left-4 mb-4' src={cardLogo} alt="card logo" />
                )
            }
            <h2 className='font-bold ml-5 mr-40 mb-2 text-left text-xl sm:text-xl'>{heading}</h2>
            <p className='text-left ml-5 mr-5 mb-5 text-[0.74rem] opacity-90'>{text}</p>
        </div >
    )
}

export default ServicesCard