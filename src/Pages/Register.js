import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/End';
import { BiUser } from 'react-icons/bi';
import { AiOutlineLock } from 'react-icons/ai';

const Register = () => {
  return (
    
    <>

    <Header />
   
    <div className='text-clack h-[100vh] flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500' >
        <div>
            <div className='bg-blue-200 border border-blue-600 rounded-md p-8 mt-28 shadow-lg backdrop-filter backdrop-blur-sm
            bg-opacity-40 relative'>

                <h1 className='text-4xl text-white font-bold text-center mb-6'>Register</h1>

                <form action=''>

                    <div className='relative my-7'>
                        <input type="email" placeholder='Your Name...' className='block w-80 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder:italic placeholder:text-white'/>
                        <BiUser className='absolute top-3 right-2 text-white text-2xl'/>
                    </div>

                    <div className='relative my-7'>
                        <input type="password" placeholder='Your Password...' className='block w-80 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder:italic placeholder:text-white'/>
                        <AiOutlineLock className='absolute top-3 right-2 text-white text-2xl'/>
                    </div>

                    <div className='relative my-7'>
                        <input type="password" placeholder='Confirm Password...' className='block w-80 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder:italic placeholder:text-white'/>
                        <AiOutlineLock className='absolute top-3 right-2 text-white text-2xl'/>
                    </div>

                    <Link to='/signin'><button type='submit' className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-400 hover:bg-blue-200 hover:text-black py-2 transition-colors duration-300'>Register</button></Link>

                    <div className='text-center mt-5'>
                        <span className='m-4 text-white'>Already Create an Account? <Link to='/signin' className='text-blue-800'>Login Here</Link></span>
                    </div> 

                </form>

            </div>
        </div>
    </div>

    <Footer />
    </>

  )
}

export default Register;