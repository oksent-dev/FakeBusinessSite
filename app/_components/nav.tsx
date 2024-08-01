'use client';
import Link from 'next/link';
import { useState } from 'react';


type NavItemProps = {
    href: string;
    text: string;
    className: string;
};

function NavItem({ href, text, className }: NavItemProps) {
    return (
        <Link href={href} className={className}>
            {text}
        </Link>
    );
}

export default function Nav() { 
    const navLink: string = 'text-base text-gray-700 hover:text-blue-700 transition-colors duration-300';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuFullyOpen, setIsMenuFullyOpen] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    function handleMenuClick() {
        setIsButtonDisabled(true);
        setIsMenuOpen(!isMenuOpen);
        if(!isMenuOpen)
        {
            setIsMenuFullyOpen(!isMenuFullyOpen);
            setIsButtonDisabled(false);
        } else {
            setTimeout(() => {
                setIsMenuFullyOpen(!isMenuFullyOpen);
                setIsButtonDisabled(false);
            }, 500);
        }
        
    }

    return (
        <nav className='sticky top-0 bg-white border border-b-gray-300 mb-16 lg:mb-24 z-10'>
            <div className='max-w-screen-2xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between'>
                <Link href='/'>
                    <img className='w-40 sm:w-60' src='/logo.svg' alt='logo' />
                </Link>
                <ul 
                className={`transition-opacity h-[calc(100vh)] bg-white  duration-500 lg:opacity-100 
                ${!isMenuOpen ? 'opacity-0' : 'opacity-100' } ${!isMenuFullyOpen ? 
                    'lg:flex lg:static lg:w-auto lg:h-auto items-center gap-6 w-0' :
                    'absolute top-0 left-0 flex flex-col justify-center items-center w-full gap-6'}`
                }
                >
                    <li>
                        <Link href='/'>
                            <img className={`w-60 transition-opacity duration-500 lg:opacity-0 ${!isMenuOpen ? 'opacity-0' : 'opacity-100' }`} src='/logo.svg' alt='logo' />
                        </Link>
                    </li>
                    <li>
                        <NavItem 
                            href='/' 
                            text='Offer' 
                            className={navLink}
                        />
                    </li>
                    <li>
                        <NavItem 
                            href='/' 
                            text='Pricing' 
                            className={navLink}
                        />
                    </li>
                    <li>
                        <NavItem 
                            href='/' 
                            text='Blog' 
                            className={navLink}
                        />
                    </li>
                    <li>
                        <NavItem 
                            href='/' 
                            text='Contact' 
                            className={navLink}
                        />
                    </li>
                    <li>
                        <NavItem 
                            href='/' 
                            text='Login' 
                            className='text-base inline-block font-medium text-gray-700 hover:bg-gray-100
                            transition-colors duration-300 shadow-md shadow-gray-300/50 px-6 py-2 rounded-lg border border-gray-300'
                        />
                    </li>
                    <li>
                        <NavItem 
                            href='/' 
                            text='Create account' 
                            className='text-base inline-block font-medium text-white bg-blue-700 hover:bg-blue-800
                            transition-colors duration-300 shadow-md shadow-blue-700/50 px-6 py-2 rounded-lg'
                        />
                    </li>                           
                </ul>
                <button 
                  className='sticky w-10 h-10 lg:hidden active:bg-gray-100 transition-all duration-300 rounded-md'
                  onClick={handleMenuClick}
                  disabled={isButtonDisabled}
                >
                  <img className='w-10 h-10 object-cover' src='/img/icons/menu-outline.svg' />
                </button>
            </div>
        </nav>
    );
};
