import React from 'react';
import { PiDiscordLogoFill } from "react-icons/pi";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { PiRedditLogoFill } from "react-icons/pi";
import { PiSlackLogoFill } from "react-icons/pi";
import { PiNyTimesLogoBold } from "react-icons/pi";
import { IoLogoVimeo } from "react-icons/io";
import { IoLogoIonitron } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import { BsFillSuitClubFill } from "react-icons/bs";
import { FaBuildingColumns } from "react-icons/fa6";

const Services = () => {

    const services =  [
        {id: 1, 
        title: "Membership Organizations", 
        description: "We help membership organizations grow their communities and increase revenue through digital marketing and web development.", 
        icon:<HiUserGroup />}, 

        {id: 2, 
            title: "National Association", 
            description: "Join our National Association and become part of a dynamic community committed to excellence.As a member, access exclusive resources.", 
            icon:<FaBuildingColumns />}, 

        {id: 3, 
            title: "Clubs and Groups", 
            description: "Join our vibrant community of clubs and groups, where shared passions thrive. Connect with like-minded individuals, whether you're exploring hobbies.", 
            icon:<BsFillSuitClubFill />}
    ]
    

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
        <div className='text-center my-2'>
            <h2 className='text-4xl text-silver font-semibold mb-2'>Our Clients</h2>
            <p className='text-silver tracking-wide'>
                We have worked with a wide variety of clients, ranging from non-profits to large corporations.
            </p>

            {/* company logos */}
            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <span className='text-steelBlue text-5xl'><PiDiscordLogoFill /></span>
                <span className='text-steelBlue text-5xl'><PiDribbbleLogoFill /></span> 
                <span className='text-steelBlue text-5xl'><PiRedditLogoFill /></span>
                <span className='text-steelBlue text-5xl'><PiSlackLogoFill /></span>
                <span className='text-steelBlue text-5xl'><PiNyTimesLogoBold /> </span>
                <span className='text-steelBlue text-5xl'><IoLogoVimeo /></span>
                <span className='text-steelBlue text-5xl'><IoLogoIonitron /></span>
            </div>

            {/* service cards */}
            <div className='mt-20 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-black font-semibold mb-3'>Elevate your brand with strategic digital campaigns.</h2>
                <p className='text-silver tracking-wider'>
                    Who is suitable for?
                </p>
            </div>

            {/* cards */}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-steelBlue transition-all duration-300 flex items-center justify-center h-full'>

                        <div>

                            <div className='bg-[#dfe7f2] text-steelBlue mb-4 h-18 w-16 mx-auto rounded-tl-3xl rounded-br-3xl'>
                                <span className='text-6xl'>{service.icon}</span>
                            </div>

                            <h4 className='text-2xl font-bold text-silver mb-2 px-2 tracking-wide'>{service.title}</h4>

                            <p className='text-sm text-silver tracking-wider'>{service.description}</p>

                        </div>

                    </div>)
                }
            
            </div>
        </div>
    </div>
  )
}

export default Services;


