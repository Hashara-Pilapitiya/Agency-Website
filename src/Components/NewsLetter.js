import React from 'react';

const NewsLetter = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 py-16'>
        <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
            <div className='text-center'>
                <h2 className='lg:text-5xl text-3xl text-black font-semibold mb-6 lg:leading-snug'>
                    Subscribe to our newsletter.
                </h2>
                <div className='flex items-center justify-center gap-8'>
                    <button className='py-2 font-bold text-black transition-all duration-300 rounded px-7 bg-steelBlue hover:bg-silver hover:-translate-y-4'><span className='hover:tracking-wide'>Get a Demo
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
                        stroke="#000000" 
                        strokeWidth="2"
                    />
                    </svg>
                    </span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter;