import React from 'react'
import bg from '../assets/proposal/bg.png'
import formPic from '../assets/proposal/formPic.png'

const Porposal = () => {
    return (
        <div>
            <section className='relative flex flex-col justify-around items-center md:h-[120vh] h-auto '>
                <div className='absolute top-20 '><img src={bg} alt="" /></div>
                <div className='text-center'>
                    <h1 className='text-xl md:text-5xl font-bold mb-2 md:mb-8'>Request Proposal</h1>
                    <p className='text-center opacity-90 md:w-[30vw] md:mb-20 mb-2'>Share details of the role you're looking to fill and we'll be in touch within 24 hours.</p>
                </div>
                <div className='md:p-12 p-2 rounded flex flex-wrap justify-center items-center bg-[#272727] m-2 gap-2 md:gap-8 w-auto md:w-[80vw] h-atuo md:h-[110vw] z-10'>
                    <form action="" className='md:vw[50vw] border'>
                        <h1 className='text-lg md:text-xl font-semibold my-1'>Let's Connect </h1>
                        <p className='font-extralight opacity-90 w-[24vw] mb-6 text-xs'>Have questions or need support? Contact us today to discuss your HR needs. Our team is here to help.</p>
                        <div className='flex flex-col justify-center items-start gap-2 text-black'>
                            <div>
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                            </div>
                            <input type="text" placeholder='Business Email' />
                            <div>
                                <input type="text" placeholder='Phone Number' />
                                <input type="text" placeholder='+92' />
                            </div>
                            <div>
                                <input type="text" placeholder='Company Name' />
                                <input type="text" placeholder='Your Jon Title' />
                            </div>
                            <input type="text" placeholder='Payroll Outsourcing' />
                            <input type="text" placeholder='What is your payroll headcount?' />
                            <input type="text" placeholder='Which Country do you want to cover for Payroll Outsoursing Services?' />
                        </div>
                        <label htmlFor="privacy" className='flex justify-start items-start text-sm p-2 md:w-[40vw]'><input type="checkbox" id='privacy' className='mr-2 border border-white bg-transparent' /><p>Yes, I agree to recieve communication over emails (service related, newsletters, weekly updates), phone, fax or post from AM Global.</p></label>
                        <button type='submit' className='bg-gradient-to-r from-[#D5BB54] to-[#977619] py-2 md:w-[10vw] w-[20vw] md:text-sm text-xs rounded-full'>Submit</button>
                    </form>
                    <div><img src={formPic} alt="" className='md:h-[70vh] h-auto' /></div>
                </div>
            </section>
        </div>
    )
}

export default Porposal