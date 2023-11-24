import React from 'react';
import productImg01 from '../Assets/productimg01.avif';
import productImg02 from '../Assets/productimg02.png';
import { PiDiscordLogoFill } from "react-icons/pi";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { PiRedditLogoFill } from "react-icons/pi";
import { PiSlackLogoFill } from "react-icons/pi";
import { PiNyTimesLogoBold } from "react-icons/pi";
import { IoLogoVimeo } from "react-icons/io";
import { IoLogoIonitron } from "react-icons/io";

const Products = () => {
  return (
    <div>
        <div>

{/* about text */}
<div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
    <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>

        <div>
            <img src={productImg01} alt=''/>
        </div>

        <div className='md:w-3/5 mx-auto'>

            <h2 className='text-4xl text-black mb-4 md:w-4/5 tracking-wide font-bold'>Elevate your experience with our cutting-edge products.</h2>

            <p className='md:w-3/4 text-silver mb-8 tracking-wider'>
                Unleash the power of innovation with our flagship product. Designed to meet the demands of the modern industry, it seamlessly integrates advanced features to enhance efficiency, streamline processes, and propel your business to new heights.
            </p>

            <button className='px-7 py-2 bg-steelBlue text-black font-bold rounded hover:bg-silver transition-all duration-300 hover:-translate-y-4'><span className='hover:tracking-wide'>Learn More</span></button>

        </div>
    </div>
</div>

{/* company stats */}
<div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-lightGrey'>
    <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='md:w-1/3'>
            <img src={productImg02} alt='' className='rounded-full'/>
        </div>

        <div className='md:w-2/3 mx-auto'>
            <div>
                <p className='md:-4/5 text-sm text-white tracking-wide mb-8 leading-7'>
                Immerse yourself in the perfect blend of style and substance. Our product combines sleek, user-friendly design with robust functionality. Experience unparalleled performance and discover a new standard of excellence.Your success is our priority. Our customizable product is crafted to adapt to the unique needs of your business. From scalability to user interface, every detail is meticulously designed to ensure a perfect fit for your requirements.
                </p>
                <h5 className='text-steelBlue text-xl font-semibold mb-2'>John Stilan</h5>
                <p className='text-base text-black mb-8'>British Dragon Boat Association</p>
                <div>
                    <div className='flex items-center gap-8 flex-wrap'>
                        <span className='text-steelBlue text-2xl cursor-pointer'><PiDiscordLogoFill /></span>
                        <span className='text-steelBlue text-2xl cursor-pointer'><PiDribbbleLogoFill /></span> 
                        <span className='text-steelBlue text-2xl cursor-pointer'><PiRedditLogoFill /></span>
                        <span className='text-steelBlue text-2xl cursor-pointer'><PiSlackLogoFill /></span>
                        <span className='text-steelBlue text-2xl cursor-pointer'><PiNyTimesLogoBold /> </span>
                        <span className='text-steelBlue text-2xl cursor-pointer'><IoLogoVimeo /></span>
                        <span className='text-steelBlue text-2xl cursor-pointer'><IoLogoIonitron /></span>
                        <div className='flex items-center gap-8'>
                            <a href='/' className='font-bold text-steelBlue hover:text-black hover:tracking-wide'>Meet all customers{" "}
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="17"
                                height="11"
                                viewBox='0 0 17 11'
                                fill='none'
                                className='inline-block ml-2'
                            >
                                <path 
                                    d="M12 9.39905L15.2929 6.106115C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" 
                                    stroke="#4682b4" 
                                    strokeWidth="2"
                                />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

    </div>
</div>
</div>
</div>
  );
}

export default Products;