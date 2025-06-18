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
        <div className={`${h} border-2 border-white/5 bg-gradient-to-br ${grad.from} ${grad.to} bg-black w-full lg:w-auto ${flexWidth === '2' ? 'lg:flex-[2] lg:max-w-[32rem]' : 'lg:flex-1 lg:max-w-60'} max-w-64 rounded-2xl p-3 lg:p-1 ${flexWidth === '2' ? '' : 'lg:pt-1 lg:pb-3'} font-extralight`}>
            {
                cardLogo && (
                    <img className='w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 relative top-1 lg:top-2 xl:top-3 left-1 lg:left-2 xl:left-4 mb-3 lg:mb-4' src={cardLogo} alt="card logo" />
                )
            }
            <h2 className='font-bold ml-3 lg:ml-5 mr-10 lg:mr-40 mb-2 text-left text-lg lg:text-xl'>{heading}</h2>
            <p className='text-left ml-3 lg:ml-5 mr-3 lg:mr-5 mb-3 lg:mb-5 text-xs lg:text-[0.74rem] opacity-90'>{text}</p>
        </div>
    )
}

export default React.memo(ServicesCard);