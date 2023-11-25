import React from 'react';
import { Carousel } from 'flowbite-react';
import heroImg01 from '../Assets/heroimg01.png';
import heroImg02 from '../Assets/heroimg02.png';
import heroImg03 from '../Assets/heroimg03.png';
import heroImg04 from '../Assets/heroimg04.png';

const Hero = () => {
  return (
    <div className="bg-lightGrey">
        
        <div className="h-screen min-h-screen px-4 mx-auto lg:px-14 max-w-screen-2xl">
            <Carousel className='w-full mx-auto'>

                <div className="flex flex-col items-center justify-between gap-12 py-12 my-28 md:my-8 md:flex-row-reverse">
                    <div className>
                        <img src={heroImg01} alt=''/>
                    </div>

                    {/* hero text */}
                    <div className='md:w-1/2'>

                        <h1 className='mb-4 text-5xl font-semibold leading-snug text-black md:w-3/4'>Lessons are insights <span className='leading-snug text-steelBlue'>from 8 years</span></h1>

                        <p className='mb-8 text-base tracking-wide text-white'>Where to grow your business as a photographer:site or social media?</p>

                        <button className='py-2 font-bold text-black transition-all duration-300 rounded px-7 bg-steelBlue hover:bg-silver hover:-translate-y-4'><span className='hover:tracking-wide'>Register</span></button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-10 py-12 my-28 md:my-8 md:flex-row-reverse">
                    <div>
                        <img src={heroImg02} alt=''/>
                    </div>

                    {/* hero text */}
                    <div className='md:w-1/2'>

                        <h1 className='mb-4 text-5xl font-semibold leading-snug text-black md:w-3/4'>Where ideas take flight and <span className='leading-snug text-steelBlue'>join</span> with us.</h1>

                        <p className='mb-8 text-base tracking-wide text-white'>At our agency, creativity knows no bounds. We bring visions to life through stunning designs and imaginative concepts. </p>

                        <button className='py-2 font-bold text-black transition-all duration-300 rounded px-7 bg-steelBlue hover:bg-silver hover:-translate-y-4'><span className='hover:tracking-wide'>Register</span></button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-10 py-12 my-28 md:my-8 md:flex-row-reverse">
                    <div>
                        <img src={heroImg03} alt=''/>
                    </div>

                    {/* hero text */}
                    <div className='md:w-1/2'>

                        <h1 className='mb-4 text-5xl font-semibold leading-snug text-black md:w-3/4'>Guiding <span className='leading-snug text-steelBlue'>success,</span> every step of the way.</h1>

                        <p className='mb-8 text-base tracking-wide text-white'>Our consultancy goes beyond advice; we partner with you on your journey to success.  </p>

                        <button className='py-2 font-bold text-black transition-all duration-300 rounded px-7 bg-steelBlue hover:bg-silver hover:-translate-y-4'><span className='hover:tracking-wide'>Register</span></button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-10 py-12 my-28 md:my-8 md:flex-row-reverse">
                    <div>
                        <img src={heroImg04} alt=''/>
                    </div>

                    {/* hero text */}
                    <div className='md:w-1/2'>

                        <h1 className='mb-4 text-5xl font-semibold leading-snug text-black md:w-3/4'>Crafting campaigns that <span className='leading-snug text-steelBlue'>captivate.</span></h1>

                        <p className='mb-8 text-base tracking-wide text-white'>We are more than an agency; we are storytellers through strategic marketing and compelling advertising.  </p>

                        <button className='py-2 font-bold text-black transition-all duration-300 rounded px-7 bg-steelBlue hover:bg-silver hover:-translate-y-4'><span className='hover:tracking-wide'>Register</span></button>
                    </div>
                </div>

            </Carousel>
        </div>
    
  </div>
  )
}

export default Hero;