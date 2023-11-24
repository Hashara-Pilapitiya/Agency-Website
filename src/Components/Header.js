import React, { useEffect, useState} from 'react';
import logo from '../Assets/logo.png';
import { Link } from 'react-scroll';
import { FaAlignJustify } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isSticky, setIsSticky] = React.useState(false);

    // Set toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        };
    });

    // Navitems array
    const navItems = [
        {link: 'Home', path: 'home'},
        {link: 'Service', path: 'service'},
        {link: 'About', path: 'about'},
        {link: 'Product', path: 'product'},
        {link: 'Testimonial', path: 'testimonial'},
        {link: 'FAQ', path: 'faq'},
    ];

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>

                <a href=''className='text-2xl font-semibold flex items-center space-x-2'>
                <img src={logo} alt='' className='w-20 inline-block items-center rounded-full' />
                <span className='text-steelBlue'>PromoPluse</span>
                </a>

                {/* navitems for larage devices */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map( ({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-naturalGrey hover:text-steelBlue font-bold cursor-pointer'>{link}</Link> )
                    }
                </ul>

                {/* buttons for larage devices */}
                <div className='space-x-12 hidden lg:flex items-center'>

                    <a href='/' className='hidden lg:flex items-center text-steelBlue hover:text-silver font-bold'>Login</a>

                    <button className='bg-steelBlue text-black py-2 px-4 transition-all duration-300 rounded hover:bg-silver font-bold'>Register</button>

                </div> 

                {/* menu button for only mobile devices */}
                <div className='md:hidden'>
                    <button 
                    onClick={toggleMenu}
                    className='text-naturalGrey focus:outline-none focus:text-steelBlue'>
                        {
                            isMenuOpen ? (<FaCircleXmark className='h-6 w-6 ' />) : (<FaAlignJustify className='h-6 w-6' />)
                        }
                    </button>
                </div>

            </div>

            {/* nav items for mobile devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-steelBlue ${ isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map( ({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-silver hover:text-white font-bold cursor-pointer'>{link}</Link> )
                }
            </div>

        </nav>
    </header>
  );
};

export default Header;