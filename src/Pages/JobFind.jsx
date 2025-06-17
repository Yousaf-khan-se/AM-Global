import React from 'react'
import Circles from '../assets/JobFindAssets/Circles.png'
import BG from '../assets/JobFindAssets/BG.png'
import experience from '../assets/JobFindAssets/sec1Logos/experience.png'
import jobType from '../assets/JobFindAssets/sec1Logos/jobType.png'
import location from '../assets/JobFindAssets/sec1Logos/location.png'
import salary from '../assets/JobFindAssets/sec1Logos/salary.png'
import skills from '../assets/JobFindAssets/sec1Logos/skills.png'
import workingHours from '../assets/JobFindAssets/sec1Logos/workingHours.png'
import lock from '../assets/JobFindAssets/lock.png'
import section1Bg from '../assets/JobFindAssets/section1Bg.png'

const JobFind = () => {
    return (
        <div className="w-full min-h-screen">
            {/* sec0 */}
            <section className='relative bg-cover bg-center w-screen h-[80vh] flex justify-start items-center'
                style={{ backgroundImage: `url(${BG})` }}
            >
                <div className='flex flex-col absolute z-10 gap-6 mb-20 md:w-1/2 md:ml-40 ml-5 md:mt-0 mt-40'>
                    <h1 className='text-[#B09130] md:text-[1.5rem] text-[1rem] font-semibold -mb-5'>Submit Your CV</h1>
                    <h2 className='md:text-[2.5rem] text-[1.5rem] font-bold md:pr-40'>Upload your resume & apply for your <span className='text-[#CBB04A]'>ideal job</span> .</h2>
                    <button className='flex flex-grow flex-shrink justify-end items-center rounded md:w-[165px] md:h-[50px] w-[80px] h-[25px] bg-gradient-to-r from-[#EDD569] to-[#977619]'>
                        <span className='flex justify-center items-center text-black bg-white rounded-full md:w-[1.5em] md:h-[1.5em] w-[1em] h-[1em] md:mr-4 mr-2 pb-1 font-extrabold text-sm md:text-lg leading-none'>
                            +
                        </span>
                    </button>
                </div>
            </section>

            {/* sec1 */}
            <section className='pb-16 bg-white/[0.12] relative min-h-[110vh] w-full flex flex-row flex-wrap justify-evenly items-center'>
                <div className='absolute inset-0 w-full h-full'><img src={section1Bg} alt="section 1 background" /></div>
                <div className='z-10 flex flex-col items-start gap-5'>
                    <div className='max-w-[80vw] md:max-w-[30vw]'>
                        <h1 className='text-[#C2A441] md:text-[1.8rem] text-[1rem] mb-3'>More About the Role</h1>
                        <h2 className='md:text-[2.5rem] text-[1.5rem] font-semibold'>Company Overview & Job Description</h2>
                    </div>
                    <div className='border-l border-[#CEB551] pl-10 mt-10 max-w-[90vw] md:max-w-[44vw] md:text-lg opacity-90'>
                        <p className='mb-10'>Discover more about our company and the exciting opportunities we offer. Our team is dedicated to fostering a dynamic and inclusive work environment where innovation thrives. Learn how our culture and values align with your career goals.</p>
                        <p className='pr-2'>The job role involves key responsibilities and opportunities for growth. Get detailed insights into what we’re looking for and how you can contribute to our success.</p>
                    </div>
                </div>

                <div className='z-10 p-[0.05rem] bg-gradient-to-br from-white/30 to-[#191919] rounded-xl mt-24 md:mr-5 md:ml-0 mr-2 ml-2'>
                    <div className='md:text-lg bg-black bg-gradient-to-br from-[#343434]/90 to-[#191919] rounded-xl pt-[0.5rem] pb-[1rem] pl-[1.5rem] pr-[4.5rem] md:pt-[2.5rem] md:pb-[3rem] md:pl-[3.5rem] md:pr-[6.5rem] flex flex-col justify-center items-start gap-10'>
                        <div className="flex items-center gap-5">
                            <img src={jobType} alt="jobType logo" className='scale-75 md:scale-90' />
                            <p>Job Type</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <img src={experience} alt="experience logo" className='scale-75 md:scale-90' />
                            <p>Experience</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <img src={location} alt="location logo" className='scale-75 md:scale-90' />
                            <p>Location</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <img src={workingHours} alt="workingHours logo" className='scale-75 md:scale-90' />
                            <p>Working Hours</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <img src={skills} alt="skills logo" className='scale-75 md:scale-90' />
                            <p>Skills</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <img src={salary} alt="salary logo" className='scale-75 md:scale-90' />
                            <p>Salary</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* sec2 */}
            <section className='p-4 md:p-40 pb-0 bg-black relative min-h-[50vh] w-full flex flex-col justify-center items-start gap-4'>
                <h1 className='text-[#C2A441]/85  md:text-[1.8rem] text-[1rem] font-semibold'>Requirements</h1>
                <h2 className='md:text-[2.5rem] text-[1.5rem] font-semibold'>Job Requirements</h2>
                <div className='mb-24 border-l-2 border-[#CEB551] pl-10 mt-10 max-w-[70vw] md:text-lg opacity-90'>
                    <p className='mb-10'>Discover more about our company and the exciting opportunities we offer. Our team is dedicated to fostering a dynamic and inclusive work environment where innovation thrives. Learn how our culture and values align with your career goals.</p>
                    <p className='pr-2'>The job role involves key responsibilities and opportunities for growth. Get detailed insights into what we’re looking for and how you can contribute to our success.</p>
                </div>
            </section>

            {/* sec3 */}
            <section className='bg-white/50'>
                <div>
                    <h1 className='#C2A441'>Get Started</h1>
                    <h2>Apply Now</h2>
                    <ul>
                        <li>Your resume</li>
                        <li>Your ambitions</li>
                        <li>Your selection of conversations</li>
                        <li>Your job choice</li>
                    </ul>
                </div>
                <div>
                    <form action="">
                        <span className='bg-gradient-to-br from-[#EDD569] to-[#977619]'>+</span>
                        <legend>Upload Your CV</legend>
                        <input type="text" placeholder='Surname' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Phone' />
                        <textarea name="Message" id="" cols="5"></textarea>
                        <button type="submit" className='bg-gradient-to-r from-[#EDD569] to-[#977619]'>Submit</button>
                    </form>
                    <div>
                        <p><img src={lock} alt="" />We handle your data confidentially</p>
                    </div>
                </div>
            </section>
            {/* <img src={Circles} alt="Circles" className='w-full h-auto' /> */}
        </div>
    )
}

export default JobFind