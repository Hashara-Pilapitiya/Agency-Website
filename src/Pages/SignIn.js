import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/End';
import { BiUser } from 'react-icons/bi';
import { AiOutlineLock } from 'react-icons/ai';

const SignIn = () => {
  return (

    <>

    <Header />
   
    <div className='text-clack h-[100vh] flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500' >
        <div>
            <div className='bg-blue-200 border border-blue-600 rounded-md p-8 mt-28 shadow-lg backdrop-filter backdrop-blur-sm
            bg-opacity-40 relative'>

                <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>

                <form action=''>

                    <div className='relative my-7'>
                        <input type="email" placeholder='Your Name...' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder:italic placeholder:text-white'/>
                        <BiUser className='absolute top-3 right-0 text-white text-2xl'/>
                    </div>

                    <div className='relative my-7'>
                        <input type="password" placeholder='Your Password...' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer placeholder:italic placeholder:text-white'/>
                        <AiOutlineLock className='absolute top-3 right-0 text-white text-2xl'/>
                    </div>

                    <div className='flex justify-between items-center text-white'>
                        <div className='flex mt-4'>
                            <input type='checkbox' className='mt-0.5 mr-2' name='' id='' />
                            <label htmlFor='Remember Me' className='text-sm'>Remember Me</label>
                        </div>
                        <span className='text-white text-sm cursor-pointer mt-3'>Forgot Password?</span>
                    </div>

                    <button type='submit' className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-blue-400 hover:bg-blue-200 hover:text-black py-2 transition-colors duration-300'>Login</button>

                    <div className='text-center mt-5'>
                        <span className='m-4 text-white'>New Here? <Link to='/register' className='text-blue-800'>Create an Account</Link></span>
                    </div> 

                </form>

            </div>
        </div>
    </div>

    <Footer />
    </>
  )
}

export default SignIn;