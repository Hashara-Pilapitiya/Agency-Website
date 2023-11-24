import React from 'react';
import aboutImg from '../Assets/aboutimg.avif';
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuClub } from "react-icons/lu";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";

const About = () => {
  return (
    <div>

        {/* about text */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>

                <div>
                    <img src={aboutImg} alt=''/>
                </div>

                <div className='md:w-3/5 mx-auto'>

                    <h2 className='text-4xl text-black mb-4 md:w-4/5 tracking-wide font-bold'>Discover the heart of our agency, where vision meets innovation.</h2>

                    <p className='md:w-3/4 text-silver mb-8 tracking-wider'>
                        At <span className='text-steelBlue text-lg font-bold tracking-widest'>PromoPluse</span>, we're more than a team; we're a collective force driven by passion and expertise. Explore our journey, values, and commitment to delivering excellence in every service we offer. Join us in shaping the future together.
                    </p>

                    <button className='px-7 py-2 bg-steelBlue text-black font-bold rounded hover:bg-silver transition-all duration-300 hover:-translate-y-4'><span className='hover:tracking-wide'>Learn More</span></button>

                </div>
            </div>
        </div>

        {/* company stats */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-lightGrey'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>

                    <h2 className='mx-20 text-4xl text-black mb-4 md:w-4/5 tracking-wide font-bold'>Embarking on a <span className='text-steelBlue'>journey of innovation and excellence.</span></h2>

                    <p className='mx-20 md:w-3/4 text-white mb-8 tracking-wider'>
                        Our story begins with a vision to redefine industry standards. 
                    </p>

                </div>

                <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>

                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <span className='text-4xl text-steelBlue'><HiOutlineUserGroup /></span>
                            <div>
                                <h4 className='text-2xl text-black font-semibold'>2,345,678</h4>
                                <p>Members</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <span className='text-4xl text-steelBlue'><LuClub /></span>
                            <div>
                                <h4 className='text-2xl text-black font-semibold'>24,680</h4>
                                <p>Clubs</p>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <span className='text-4xl text-steelBlue'><MdOutlineEmojiEvents /></span>
                            <div>
                                <h4 className='text-2xl text-black font-semibold'>3,365,478</h4>
                                <p>Event Bookings</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <span className='text-4xl text-steelBlue'><MdOutlinePayments /></span>
                            <div>
                                <h4 className='text-2xl text-black font-semibold'>1,926,678</h4>
                                <p>Payments</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About;