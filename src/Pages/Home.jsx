import React from 'react'
import homeYellowSquare from '../assets/homeYellowSquare.png'
import homeBlackSquare from '../assets/homeBlackSquare.png'
import homeTopBackground from '../assets/homeTopBackground.jpg'
import homeWhitePatternDesign from '../assets/homeWhitePatternDesing.png'
import homeSection1Pattern from '../assets/homeSection1Pattern.png'
import TailoredHrSolutionsLogo from '../assets/featuresLogo/TailoredHrSolutionsLogo.png'
import globalExpertiseLogo from '../assets/featuresLogo/globalExpertiseLogo.png'
import EffeciencyAndComplianceLogo from '../assets/featuresLogo/EffeciencyAndComplianceLogo.png'

import FeaturesCard from '../components/FeaturesCard'

const Home = () => {

    const tailoredHrSolDescription = 'Provide customized HR and staffing solutions, meeting the unique needs of diverse industries and business sizes.'
    const globalExpertiseDescription = 'Leverage extensive experience across Gulf countries, India, Pakistan, and the USA to deliver exceptional results.'
    const efficiencyAndComplianceDescription = 'Streamline processes with WPS-compliant payroll and HR services, reducing costs and ensuring regulatory adherence.'

    return (
        <div>
            <div className='flex flex-col items-start-start-center justify-center sm:flex-row'>
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
                className="bg-cover bg-center h-screen flex flex-col items-center justify-evenly gap-6 sm:gap-16"
                style={{ backgroundImage: `url(${homeSection1Pattern})` }}
            >
                <div className='m-12'>
                    <h1 className='text-yellow-600 text-xl sm:text-3xl font-semibold'>Features</h1>
                    <h2 className='text-2xl sm:text-4xl text-white font-semibold'>Why Partener With Us</h2>
                </div>
                <div className='flex flex-col justify-center items-center sm:flex-row gap-10'>
                    <FeaturesCard cardLogo={TailoredHrSolutionsLogo} heading='Tailored HR Solutions' text={tailoredHrSolDescription} />
                    <FeaturesCard cardLogo={globalExpertiseLogo} heading='Global Expertise' text={globalExpertiseDescription} />
                    <FeaturesCard cardLogo={EffeciencyAndComplianceLogo} heading='Efficiency and Compliance' text={efficiencyAndComplianceDescription} />
                </div>

            </section>
        </div >
    )
}


export default Home