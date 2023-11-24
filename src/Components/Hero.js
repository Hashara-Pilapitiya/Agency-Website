import React from 'react';
import { Carousel } from 'flowbite-react';
import heroImg01 from '../Assets/heroimg01.png';
import heroImg02 from '../Assets/heroimg02.png';
import heroImg03 from '../Assets/heroimg03.png';
import heroImg04 from '../Assets/heroimg04.png';

const Hero = () => {
  return (
    <div className="bg-paperWhite">
        
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
            <Carousel className='w-full mx-auto'>

                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                    <div className>
                        <img src={heroImg01} alt=''/>
                    </div>

                    {/* hero text */}
                    <div className='md:w-1/2'>

                        <h1 className='text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug'>Lessons are insights <span className='text-steelBlue leading-snug'>from 8 years</span></h1>

                        <p className='text-silver text-base tracking-wide mb-8'>Where to grow your business as a photographer:site or social media?</p>

                        <button className='px-7 py-2 bg-steelBlue text-white rounded hover:bg-silver transition-all duration-300 hover:-translate-y-4'><span className='hover:tracking-wide'>Register</span></button>
                    </div>
                </div>

                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-10">
                    <div>
                        <img src={heroImg02} alt=''/>
                    </div>

                    {/* hero text */}
                    <div className='md:w-1/2'>

                        <h1 className='text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug'>Where ideas take flight and <span className='text-steelBlue leading-snug'>join</span> with us.</h1>

                        <p className='text-silver text-base tracking-wide mb-8'>At our agency, creativity knows no bounds. We bring visions to life through stunning designs and imaginative concepts. </p>

                        <button className='px-7 py-2 bg-steelBlue text-white rounded hover:bg-silver transition-all duration-300 hover:-translate-y-4'><span className='hover:tracking-wide'>Register</span></button>
                    </div>
                </div>

                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-10">
                    <div>
                        <img src={heroImg03} alt=''/>
                    </div>

                    {/* hero text */}
                    <div className='md:w-1/2'>

                        <h1 className='text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug'>Guiding <span className='text-steelBlue leading-snug'>success,</span> every step of the way.</h1>

                        <p className='text-silver text-base tracking-wide mb-8'>Our consultancy goes beyond advice; we partner with you on your journey to success.  </p>

                        <button className='px-7 py-2 bg-steelBlue text-white rounded hover:bg-silver transition-all duration-300 hover:-translate-y-4'><span className='hover:tracking-wide'>Register</span></button>
                    </div>
                </div>

                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-10">
                    <div>
                        <img src={heroImg04} alt=''/>
                    </div>

                    {/* hero text */}
                    <div className='md:w-1/2'>

                        <h1 className='text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug'>Crafting campaigns that <span className='text-steelBlue leading-snug'>captivate.</span></h1>

                        <p className='text-silver text-base tracking-wide mb-8'>We are more than an agency; we are storytellers through strategic marketing and compelling advertising.  </p>

                        <button className='px-7 py-2 bg-steelBlue text-white rounded hover:bg-silver transition-all duration-300 hover:-translate-y-4'><span className='hover:tracking-wide'>Register</span></button>
                    </div>
                </div>

            </Carousel>
        </div>
    
  </div>
  )
}

export default Hero;