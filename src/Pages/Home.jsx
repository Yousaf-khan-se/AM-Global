import React from 'react'
import homeYellowSquare from '../assets/homeYellowSquare.png'
import homeBlackSquare from '../assets/homeBlackSquare.png'
import homeTopBackground from '../assets/homeTopBackground.jpg'
import homeWhitePatternDesign from '../assets/homeWhitePatternDesing.png'
import homeSection1Pattern from '../assets/homeSection1Pattern.png'
import TailoredHrSolutionsLogo from '../assets/featuresLogo/TailoredHrSolutionsLogo.png'
import globalExpertiseLogo from '../assets/featuresLogo/globalExpertiseLogo.png'
import EffeciencyAndComplianceLogo from '../assets/featuresLogo/EffeciencyAndComplianceLogo.png'
import section2Img from '../assets/section2Img.png'
import star from '../assets/star.png'
import FeaturesCard from '../components/FeaturesCard'
import ServicesCard from '../components/ServicesCard'
import manPowerSupplyLogo from '../assets/servicesLogo/manPowerSupplyLogo.png'
import peoServicesLogo from '../assets/servicesLogo/peoServicesLogo.png'
import hrOutsourcingLogo from '../assets/servicesLogo/hrOutsourcingLogo.png'
import itStaffingLogo from '../assets/servicesLogo/itStaffingLogo.png'
import payrollServicesLogo from '../assets/servicesLogo/payrollServicesLogo.png'
import recruitmentServicesLogo from '../assets/servicesLogo/recruitmentServicesLogo.png'
import section4Logo from '../assets/section4Logo.png'
import section5Pattern from '../assets/section5Assets/section5Pattern.png'
import section5CrescentPattern from '../assets/section5Assets/section5CrescentPattern.png'
import section5pics from '../assets/section5Assets/section5pics.png'
import section7Background from '../assets/section7Background.png'
import automation from '../assets/sec6Images/automation.png'
import aviation from '../assets/sec6Images/aviation.png'
import financeAndBanking from '../assets/sec6Images/financeAndBanking.png'
import foodAndIndustry from '../assets/sec6Images/foodAndIndustry.png'
import marineAndShipping from '../assets/sec6Images/marineAndShipping.png'
import oilAndGasEnergy from '../assets/sec6Images/oilAndGasEnergy.png'
import technologyAndIT from '../assets/sec6Images/technologyAndIT.png'

//for sec0
const StartApplyingBtn = ({ right_margin, hover_c, txt }) => {
    // 52 for l and 28 for r
    return (
        <button className={`font-extrabold sm:mr-${right_margin} mt-2 text-xs bg-white text-black p-3 pr-10 pl-10 transition-all ${hover_c} hover:text-white ease-in-out duration-500`}>{txt}</button>
    )
}

const Home = () => {
    //Features Desc
    const tailoredHrSolDescription = 'Provide customized HR and staffing solutions, meeting the unique needs of diverse industries and business sizes.'
    const globalExpertiseDescription = 'Leverage extensive experience across Gulf countries, India, Pakistan, and the USA to deliver exceptional results.'
    const efficiencyAndComplianceDescription = 'Streamline processes with WPS-compliant payroll and HR services, reducing costs and ensuring regulatory adherence.'

    //Services Desc
    const manPowerSupplyDescription = 'We provide a comprehensive range of manpower solutions to help businesses stay staffed and productive.'
    const peoServicesDescription = 'Our PEO services can help businesses save time and money while reducing compliance risks.'
    const hrOutsourcingDescription = 'Our team of HR professionals can take on all your HR needs, from payroll to benefits administration.'
    const itStaffingDescription = 'Our highly efficient & experienced team provides IT Staffing solutions to companies across Gulf countries, India, Pakistan and USA. Our IT Staff Augmentation team has successfully delivered both short-term and long-term solutions as well as project-based deployment and we provide our customers a concise talent management solutions that matches with a particular industry, geography, or business requirement.'
    const payrollServicesDescription = 'Managing payroll, accounting, and all other financial responsibilities in house and at once is time-consuming and prone to errors. We work in partnership with our clients to develop, implement and manage bespoke payroll services. Our services are in line with the WPS and our clients enjoy considerable cost savings and can focus on core activities of the business.'
    const recruitmentServicesDescription = 'Let our experts help you find the best talent for your open positions to keep your business moving forward.'

    const sec0ParentDivStyle = 'flex items-top justify-center';
    return (
        <div>
            {/* sec0 */}
            <section className='relative flex flex-col items-center justify-center sm:flex-row pb-7 bg-gray-900'>
                {/* <div className="absolute inset-0 bg-black/50 z-0"></div> */}
                <div className={sec0ParentDivStyle}>
                    <img src={homeYellowSquare} alt="Home" id="yellow-square" />
                    <h1 className='absolute text-sm font-bold bg-black p-2 pr-7 pl-7 transform -rotate-[17.13deg] sm:top-[6.8rem] sm:left-[8.4rem] z-10'>Job Seeker</h1>
                    {/* <img src={homeWhitePatternDesign} alt="Home White Pattern" className='border absolute z-30' /> */}
                    <div className='absolute mt-36'>
                        <div className='text-start tracking-wide sm:ml-44'>
                            <h2 className='mb-4 sm:pr-24 text-xl sm:text-4xl'><strong>We help candidates find their perfect job</strong></h2>
                            <p className='mb-8 text-sm pr-16 font-light'>Concise talent management solutions that matches with a particular industry, geography, or business requirement.</p>
                        </div>
                        <div className='flex justify-center pr-5'>
                            <StartApplyingBtn right_margin={28} hover_c='hover:bg-black' txt={'Start Applying'} />
                        </div>
                    </div>
                </div>
                {/* <img src={homeTopBackground} alt="Home Background" className='z-10 absolute left-40 top-10 max-w-[80%] max-h-[100%] opacity-35' id="background-pic" /> */}
                <div className={sec0ParentDivStyle}>
                    <img src={homeBlackSquare} alt="Home" />
                    <h1 className='absolute text-sm font-bold bg-gradient-to-r from-themeY/60 to-themeYDark/90 bg-themeYDark  p-2 pr-7 pl-7 transform rotate-[17.13deg] sm:top-[7.8rem] sm:right-[6.5rem] z-10 rounded'>Companies</h1>
                    <div className='absolute mt-36'>
                        <div className='text-start tracking-wide sm:mr-28'>
                            <h2 className='mb-4 sm:pl-28 text-xl sm:text-4xl'><strong>We provide staffing Solution to our clients</strong></h2>
                            <p className='mb-8 text-sm pl-28 font-light'>Concise talent management solutions that matches with a particular industry, geography, or business requirement.</p>
                        </div>
                        <div className='flex justify-center pr-[15.5rem]'>
                            <StartApplyingBtn right_margin={52} hover_c='hover:bg-themeYDark' txt={'View Services'} />
                        </div>
                    </div>
                </div>
            </section >

            {/* sec1 */}
            <section
                className="bg-cover bg-center h-auto w-auto pb-40 flex flex-col items-center justify-evenly"
                style={{ backgroundImage: `url(${homeSection1Pattern})` }}
            >
                <div className='m-16 mb-32'>
                    <h1 className='text-themeYDark/85 text-xl sm:text-[2rem] font-semibold p-2'>Features</h1>
                    <h2 className='text-2xl sm:text-[2.4rem] text-white font-semibold p-2 pb-0'>Why Partner With Us</h2>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-10'>
                    <FeaturesCard cardLogo={TailoredHrSolutionsLogo} heading='Tailored HR Solutions' text={tailoredHrSolDescription} themeNo={1} />
                    <FeaturesCard cardLogo={globalExpertiseLogo} heading='Global Expertise' text={globalExpertiseDescription} themeNo={2} />
                    <FeaturesCard cardLogo={EffeciencyAndComplianceLogo} heading='Efficiency and Compliance' text={efficiencyAndComplianceDescription} themeNo={1} />
                </div>
            </section>

            {/* sec2 */}
            <section className='mb-16 mt-[7.1rem]'>
                <div className='h-auto flex flex-col gap-y-10 justify-center content-center sm:flex-row'>
                    <div className='flex-1 ml-4'>
                        <img src={section2Img} alt="" className=' mt-0'
                            style={{ scale: 0.8 }} />
                        <p className='relative text-white origin-top-left left-[4.5rem] transform -rotate-90 -top-12 tracking-widest font-semibold sm:tracking-[0.31rem] sm:-top-[5.5rem] sm:text-[1.1rem]'>5+ Years of Experience</p>
                    </div>

                    <div className='flex-1 mt-[4.3rem]'>
                        <h1 className='text-themeYTwo/85 p-2 text-left sm:text-[1.12rem] mb-1'>HR Simplified</h1>
                        <h2 className='font-bold text-lg p-1 mr-20 text-left sm:text-4xl sm:leading-[3.1rem]'>Outsourcing your HR needs has never been easier!</h2>
                        <div className='text-left mt-6'>
                            <div className='border-l-2 border-[#CEB551] ml-2'>
                                <p className='pl-7 mb-8 mt-4 text-sm -tracking-tighter font-[180] text-balance'><span className='text-sm font-normal'>A M Global</span>  is  the leading  provider  of  HR  outsourcing  services, and  we provide a comprehensive suite of services that allow businesses to focus on their core competencies and leave the HR functions to us.</p>
                                <p className='pl-7 text-base leading-5 text-balance'>Partner with us for streamlined HR management, ensuring your business thrives without the administrative burden.</p>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row mt-14'>
                            <div>
                                <h2 className='text-[#CEB551] flex gap-5 ml-1 pb-2 text-sm font-semibold'><img src={star} alt="" className='h-3 w-3 mt-1' /> Our Expertise</h2>
                                <p className='pl-9 pr-[7.5rem] text-left text-[0.65rem]'>Tailored HR solutions to match your business needs, ensuring efficiency and compliance.</p>
                            </div>
                            <div>
                                <h2 className='text-[#CEB551] flex gap-5 ml-1 pb-2 text-sm font-semibold'><img src={star} alt="" className='h-3 w-3 mt-1' /> Global Reach</h2>
                                <p className='pl-9 pr-[3.45rem] text-left text-[0.65rem]'>Bringing global expertise with operations in the Gulf, India, Pakistan, and the USA.</p>
                            </div>
                        </div>
                        <div className='flex justify-start pl-8 mt-[6rem]'>
                            <button className='justify-self-start bg-gradient-to-r from-[#F0D784]/70 to-[#C3A349]/90 bg-[#C3A349] hover:bg-black transition-all ease-in-out delay-100 text-white font-semibold w-[7rem] h-[1.8rem] rounded pr-0.5 pl-0 sm:ml-2 text-[0.6rem]'>Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* sec3 */}
            <section className='bg-white/[0.13] h-auto flex flex-col justify-center items-center pt-14 pb-32 ml-4'>
                <div className='pt-20 pb-36 sm:pl-28 self-start max-w-lg'>
                    <h1 className='font-bold text-3xl text-left sm:text-[2.3rem] pb-4'>Our Services</h1>
                    <p className='text-sm text-left'>Concise talent management solutions that matches with a particular industry, geography, or business requirement.</p>
                </div>
                <div className='flex flex-wrap gap-6 justify-center items-center'>
                    <ServicesCard heading='Manpower Supply' text={manPowerSupplyDescription} cardLogo={manPowerSupplyLogo} color='yellow' h='sm:min-h-60' />
                    <ServicesCard heading='PEO Services' text={peoServicesDescription} cardLogo={peoServicesLogo} h='sm:min-h-64' />
                    <ServicesCard heading='HR Outsourcing' text={hrOutsourcingDescription} cardLogo={hrOutsourcingLogo} h='sm:min-h-64' />
                    <ServicesCard heading='Recruitment Services' text={recruitmentServicesDescription} cardLogo={recruitmentServicesLogo} h='sm:min-h-60' className='sm:min-h-64' />
                    <ServicesCard heading='IT Staffing' text={itStaffingDescription} cardLogo={itStaffingLogo} flexWidth='2' h='sm:min-h-60' />
                    <ServicesCard heading='Payroll Services' text={payrollServicesDescription} cardLogo={payrollServicesLogo} color='yellow' flexWidth='2' h='sm:min-h-[15.6rem]' />
                </div>
            </section>

            {/* sec4 */}
            <section className='flex flex-col sm:flex-row pt-14 flex-wrap'>
                <div className='flex flex-col justify-center items-center sm:flex-row'>
                    <div className='pt-10 pb-10 max-w-[30rem] m-5 sm:ml-36 sm:mr-16'>
                        <h1 className=' text-left text-xl pb-2 text-[#CEB551]'>Why Choose AM Global</h1>
                        <p className='text-xl font-semibold sm:text-[2.2rem] text-left leading-[2.8rem]'>Trusted HR Solutions Tailored for Your <span className='text-[#CEB551]'>Success</span></p>
                    </div>
                    <div className='flex-1 pt-14 pb-10'>
                        <p className=' border-[#606060] -m-10 border-l p-2 mr-[5.5rem] pl-10 text-left text-[0.8rem] font-light'>AM Global has a proven track record of providing high-quality HR outsourcing and manpower  supply  solutions to businesses of all sizes. We  are the leading  provider of HR  outsourcing  services in  the UAE  and provide  top-notch  Manpower  Supply, HR Outsourcing, and Recruitment Services to our clients.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center contents-center sm:flex-row sm:mt-2'>
                    <img className='flex-1 max-w-[40rem] h-auto scale-105' src={section4Logo} alt="" />
                    <div className='flex-1 flex flex-col'>
                        <h1 className='text-xl font-bold pr-32 sm:text-[2.2rem] pt-20 leading-10 text-left'>Find the Right Solution for Your <span className='text-[#CEB551]'>Business Today!</span></h1>
                        <div className='border-l border-[#CEB551] pl-10 pr-3 opacity mt-14'>
                            <p className='mb-8 text-left pl-2 text-sm font-extralight'>A M Global   is  one  of  the  top  outsourcing  agencies  that  offer  cutting-edge solutions for all your HR requirements. A M Global covering all the seven emirates and  with  plans  of  expansion  to  the  GCC. We  have experienced  work  force deployed across various industry segments and an employee pool with a mix of nationalities. </p>
                            <p className='text-left pl-2 text-sm font-extralight pr-10'>By  providing exemplary  services  we aim to focus on  providing value to  both to our clients and employees. This has helped us gain and  maintain  good business relationship  with  our  existing  clients  and  we  hope to  continue doing  so  in  the future.</p>
                        </div>
                        <button className='bg-[#CEB551] text-white w-32 rounded p-2 pr-0 pl-0 sm:ml-12 text-md mt-14 self-start text-xs transition-none-all ease-in-out delay-100 hover:bg-[#CEB551]/90'>Learn More</button>
                    </div>
                </div>
            </section>

            {/* sec5 */}
            <section className="relative bg-cover bg-center h-auto w-auto pb-28 pt-20 flex-col justify-evenly content-evenly"
                style={{ backgroundImage: `url(${section5Pattern})` }}
            >
                <div className="absolute inset-0 bg-white/15"></div>
                <div className='p-10'>
                    <h1 className='sm:text-4xl text-4xl font-semibold p-3'>Our Office</h1>
                    <p className='text-2xl font-light'>Find us at our offices in JAFZA and Dubai Main Office</p>
                </div>
                <img src={section5CrescentPattern} className='absolute' alt="" />
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-2/3 h-auto pt-10' src={section5pics} alt="" />
                </div>
            </section>

            {/* sec6 */}
            <section className='pb-28 pt-20 flex flex-col'>
                <h1 className='sm:text-[2.2rem] text-2xl p-10 pb-20 font-bold'><span className='text-[#CEB551]'>INDUSTRIES </span>WE ARE SERVING</h1>
                <div className='flex justify-center items-center gap-4 flex-wrap'>
                    <div className='relative mr-4 flex items-end justify-center text-2xl pb-10 font-bold bg-contain bg-center bg-no-repeat h-[25rem] w-[20rem]'
                        style={{ backgroundImage: `url(${automation})` }}
                    >
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#A68628]/80'></div>
                        <p className='z-10'>AUTOMATION</p>
                    </div>
                    <div className='relative flex items-end justify-center text-xl pb-10 bg-contain bg-center bg-no-repeat h-[25rem] w-[6rem]'
                        style={{ backgroundImage: `url(${aviation})` }}
                    >
                        <div className='absolute inset-0 bg-black/75'></div>
                        <p className='z-10 transform -rotate-90 m-auto text-nowrap'>AVIATION</p>
                    </div>
                    <div
                        className='relative flex items-end justify-center text-xl pb-10 bg-contain bg-center bg-no-repeat h-[25rem] w-[6rem]'
                        style={{ backgroundImage: `url(${financeAndBanking})` }}
                    >
                        <div className='absolute inset-0 bg-black/75'></div>
                        <p className='z-10 transform -rotate-90 m-auto text-nowrap'>FINANCE & BANKING</p>
                    </div>
                    <div
                        className='relative flex items-end justify-center text-xl pb-10 bg-contain bg-center bg-no-repeat h-[25rem] w-[6rem]'
                        style={{ backgroundImage: `url(${foodAndIndustry})` }}
                    >
                        <div className='absolute inset-0 bg-black/75'></div>
                        <p className='z-10 transform -rotate-90 m-auto text-nowrap'>FOOD INDUSTRY</p>
                    </div>
                    <div
                        className='relative flex items-end justify-center text-xl pb-10 bg-contain bg-center bg-no-repeat h-[25rem] w-[6rem]'
                        style={{ backgroundImage: `url(${marineAndShipping})` }}
                    >
                        <div className='absolute inset-0 bg-black/75'></div>
                        <p className='z-10 transform -rotate-90 m-auto text-nowrap'>MARINE & SHIPPING</p>
                    </div>
                    <div
                        className='relative flex items-end justify-center text-xl pb-10 bg-contain bg-center bg-no-repeat h-[25rem] w-[6rem]'
                        style={{ backgroundImage: `url(${oilAndGasEnergy})` }}
                    >
                        <div className='absolute inset-0 bg-black/75'></div>
                        <p className='z-10 transform -rotate-90 m-auto text-nowrap'>OIL & GAS/ENERGY</p>
                    </div>
                    <div
                        className='relative flex items-end justify-center text-xl pb-10 bg-contain bg-center bg-no-repeat h-[25rem] w-[6rem]'
                        style={{ backgroundImage: `url(${technologyAndIT})` }}
                    >
                        <div className='absolute inset-0 bg-black/75'></div>
                        <p className='z-10 transform -rotate-90 m-auto text-nowrap'>TECHNOLOGY & IT</p>
                    </div>
                </div>
            </section>

            {/* sec7 */}
            <section className='relative bg-cover bg-center h-auto w-auto pb-20 pt-20 flex flex-col justify-center items-center gap-10'
                style={{ backgroundImage: `url(${section7Background})` }}>
                <div className='absolute inset-0 bg-themeYDark bg-gradient-to-b from-themeYTwo to-themeYDarkTwo opacity-50 -z-10'></div>
                <h1 className='text-2xl sm:text-4xl font-bold'>Our <span className='bg-black'>Impact</span> in Numbers</h1>
                <p className='m-auto mr-[17rem] ml-[17rem] text-sm'>Our outsourcing and manpower solutions have helped businesses in a wide range of industries to save time and money while reducing compliance risks.</p>
                <div className='flex flex-col sm:flex-row w-auto justify-evenly items-center content-center bg-[#2F2F2F] rounded-xl p-8 pb-14 sm:pb-14 gap-4 '>
                    <div className='w-60 h-20'>
                        <h1 className='font-semibold text-3xl sm:text-4xl'>20+</h1>
                        <p className='font-extralight text-sm p-2'>Industries</p>
                    </div>
                    <div className='w-60 h-20'>
                        <h1 className='font-semibold text-3xl sm:text-4xl'>1000+</h1>
                        <p className='font-extralight text-sm p-2'>Resource Pool Available</p>
                    </div>
                    <div className='w-60 h-20'>
                        <h1 className='font-semibold text-3xl sm:text-4xl'>20+</h1>
                        <p className='font-extralight text-sm p-2 pb-0'>Business Partnerships</p>
                        <p className='font-extralight text-sm p-2 pt-0'>(still growing)</p>
                    </div>
                    <div className='w-44 h-20'>
                        <h1 className='font-semibold text-3xl sm:text-4xl'>10+</h1>
                        <p className='font-extralight text-sm p-2 text-balance'>A M Global Team has
                            10+ Year's experience
                            in staffing business</p>
                    </div>
                </div>
            </section>
        </div >
    )
}


export default Home