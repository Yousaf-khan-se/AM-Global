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
    const payrollServicesDescription = 'Managing payroll, accounting, and all other financial responsibilities in house and at once is time-consuming and prone to errors. We work in partnership with our clients to develop, implement and manage bespoke payroll services. Our services are in line with the WPS and our clients enjoy considerable cost savings and can focus on core activities of the business.'
    const recruitmentServicesDescription = 'Let our experts help you find the best talent for your open positions to keep your business moving forward.'
    return (
        <div>
            <div className='flex flex-col items-start-start-center justify-center sm:flex-row'>
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                <div className='flex items-center justify-center'>
                    <img src={homeYellowSquare} alt="Home" id="yellow-square" />
                    {/* <img src={homeWhitePatternDesign} alt="Home White Pattern" className='border absolute z-30' /> */}
                    <div className='absolute sm:p-32'>
                        <p className='mb-5'><strong className='text-xl sm:text-4xl'>We help candidates find their perfect job</strong></p>
                        <p className='mb-8'>Concise talent management solutions that matches with a particular industry, geography, or business requirement.</p>
                        <button className='bg-white text-black p-2 pr-8 pl-8 text-sm font-semibold transition-all hover:bg-yellow-500 ease-in-out duration-500'>Start Applying</button>
                    </div>
                </div>
                {/* <img src={homeTopBackground} alt="Home Background" className='z-10 absolute left-40 top-10 max-w-[80%] max-h-[100%] opacity-35' id="background-pic" /> */}
                <div className='flex items-center justify-center'>
                    <img src={homeBlackSquare} alt="Home" />
                    <div className='absolute sm:p-32 sm:mb-7'>
                        <p className='mb-5'><strong className='text-xl sm:text-4xl'>We provide staffing
                            Solution to our clients</strong></p>
                        <p className='mb-8'>Concise talent management solutions that matches with a particular industry, geography, or business requirement.</p>
                        <button className='bg-white text-black p-2 pr-8 pl-8 text-sm font-semibold transition-all hover:bg-yellow-500 ease-in-out duration-500'>Start Applying</button>
                    </div>
                </div>
            </div>

            <section
                className="bg-cover bg-center h-auto w-auto pb-20 flex flex-col items-center justify-evenly"
                style={{ backgroundImage: `url(${homeSection1Pattern})` }}
            >
                <div className='m-20'>
                    <h1 className='text-yellow-600 text-xl sm:text-3xl font-semibold'>Features</h1>
                    <h2 className='text-2xl sm:text-4xl text-white font-semibold'>Why Partener With Us</h2>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-10'>
                    <FeaturesCard cardLogo={TailoredHrSolutionsLogo} heading='Tailored HR Solutions' text={tailoredHrSolDescription} />
                    <FeaturesCard cardLogo={globalExpertiseLogo} heading='Global Expertise' text={globalExpertiseDescription} />
                    <FeaturesCard cardLogo={EffeciencyAndComplianceLogo} heading='Efficiency and Compliance' text={efficiencyAndComplianceDescription} />
                </div>

            </section>

            <section className='pb-28 pt-28'>
                <div className='h-auto pb-16 flex flex-col gap-12 justify-center content-center sm:flex-row'>
                    <div className='sm:w-1/3 sm:h-1/3'>
                        <img src={section2Img} alt="" />
                        <p className='relative text-white origin-top-left left-0 transform -rotate-90 -top-12 tracking-widest font-semibold sm:tracking-[0.25rem] sm:-top-16 sm:text-lg'>5+ Years of Experience</p>
                    </div>

                    <div className='p-5 pr-0 pb-0 sm:w-2/4'>
                        <h1 className='text-yellow-500 p-4 text-left sm:text-lg'>HR Simplified</h1>
                        <h2 className='font-bold text-lg p-4 pr-0 text-left sm:text-4xl'>Outsourcing your HR needs has never been easier!</h2>
                        <div className='text-left border border-l-yellow-500 border-t-0 border-r-0 border-b-0 mb-6'>
                            <p className='p-4'>AM Global  is  the leading  provider  of  HR  outsourcing  services, and  we provide a comprehensive suite of services that allow businesses to focus on their core competencies and leave the HR functions to us.</p>
                            <p className='p-4'>Partner with us for streamlined HR management, ensuring your business thrives without the administrative burden.</p>
                        </div>
                        <div className='flex flex-col gap-10 sm:flex-row'>
                            <div>
                                <h2 className='text-yellow-500 flex gap-10'><img src={star} alt="" className='h-4 w-4' /> Our Expertise</h2>
                                <p className='pl-14 pr-2 text-left text-sm'>Tailored HR solutions to match your business needs, ensuring efficiency and compliance.</p>
                            </div>
                            <div>
                                <h2 className='text-yellow-500 flex gap-10'><img src={star} alt="" className='h-4 w-4' /> Global Reach</h2>
                                <p className='pl-14 pr-2 text-left text-sm'>Bringing global expertise with operations in the Gulf, India, Pakistan, and the USA.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='bg-yellow-500 text-white w-28 rounded p-1 pr-0.5 pl-0 sm:ml-24 text-sm'>Learn More</button>
            </section>

            <section className='bg-white/15 h-auto flex flex-col justify-center items-center pt-28 pb-28'>
                <div className='pt-20 pb-40 sm:pl-28 pl-8 self-start max-w-lg'>
                    <h1 className='font-bold text-3xl text-left sm:text-4xl pb-4'>Our Services</h1>
                    <p className='text-sm text-left'>Concise talent management solutions that matches with a particular industry, geography, or business requirement.</p>
                </div>
                <div className='flex flex-wrap gap-6 justify-center items-center'>
                    <ServicesCard heading='Manpower Supply' text={manPowerSupplyDescription} cardLogo={manPowerSupplyLogo} color='yellow-500' />
                    <ServicesCard heading='PEO Services' text={peoServicesDescription} cardLogo={peoServicesLogo} color='black' />
                    <ServicesCard heading='HR Outsourcing' text={hrOutsourcingDescription} cardLogo={hrOutsourcingLogo} color='black' />
                    <ServicesCard heading='Recruitment Services' text={recruitmentServicesDescription} cardLogo={recruitmentServicesLogo} color='black' />
                    <ServicesCard heading='IT Staffing' text={itStaffingDescription} cardLogo={itStaffingLogo} color='black' flexWidth='2' />
                    <ServicesCard heading='Payroll Services' text={payrollServicesDescription} cardLogo={payrollServicesLogo} color='yellow-500' flexWidth='2' />
                </div>
            </section>

            <section className='flex flex-col sm:flex-row p-10 flex-wrap'>
                <div className='flex flex-col justify-center contents-center sm:flex-row sm:min-w-full'>
                    <div className='pt-10 pb-10 flex-1 pr-10'>
                        <h1 className='text-yellow-500 text-left'>Why Choose AM Global</h1>
                        <p className='text-xl font-semibold sm:text-4xl text-left pr-40'>Trusted HR Solutions Tailored for Your <span className='text-yellow-500'>Success</span></p>
                    </div>
                    <div className='flex-1 pt-10 pb-10'>
                        <p className=' border-yellow-500 border-l pr-2 pl-10 text-left'>AM Global has a proven track record of providing high-quality HR outsourcing and manpower  supply  solutions to businesses of all sizes. We  are the leading  provider of HR  outsourcing  services in  the UAE  and provide  top-notch  Manpower  Supply, HR Outsourcing, and Recruitment Services to our clients.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center contents-center sm:flex-row'>
                    <img className='flex-1 w-20 h-auto' src={section4Logo} alt="" />
                    <div className='flex-1 flex flex-col'>
                        <h1 className='text-xl font-bold p-8 sm:text-4xl'>Find the Right Solution for Your <span className='text-yellow-500'>Business Today!</span></h1>
                        <div className='border-l border-yellow-500 pl-10 pr-2'>
                            <p className='mb-8 text-left'>A M Global   is  one  of  the  top  outsourcing  agencies  that  offer  cutting-edge solutions for all your HR requirements. A M Global covering all the seven emirates and  with  plans  of  expansion  to  the  GCC. We  have experienced  work  force deployed across various industry segments and an employee pool with a mix of nationalities. </p>
                            <p className='text-left'>By  providing exemplary  services  we aim to focus on  providing value to  both to our clients and employees. This has helped us gain and  maintain  good business relationship  with  our  existing  clients  and  we  hope to  continue doing  so  in  the future.</p>
                        </div>
                        <button className='bg-yellow-500 text-white w-32 rounded p-1 pr-0 pl-0 sm:ml-10 text-md mt-14 self-start'>Learn More</button>
                    </div>
                </div>
            </section>
            <section className="bg-cover bg-center h-auto w-auto pb-20 pt-20 flex-1 flex-col justify-evenly content-evenly"
                style={{ backgroundImage: `url(${section5Pattern})` }}
            >

            </section>
        </div >
    )
}


export default Home