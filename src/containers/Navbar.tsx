import { NavLink, NavSearch, NavToggle, DropdownLink } from '../exports';
//Import
import style from '/src/css/navbar.module.css';
import image from "/src/assets/images/usad-logo.png";

import { useTranslation } from 'react-i18next'
import { Suspense } from 'react';
import i18n from '../locale/config';

function Navbar()
{
    const change = () => i18n.changeLanguage("bg");
    const { t } = useTranslation();

    return (
        <nav className='bg-gray-800 w-full shadow-lg'>
            {/* Big screen navbar */}
            <section className='md:flex hidden justify-center items-center w-full py-2 px-2'>

                <section className='flex justify-start items-center xl:flex-1 flex-2'>
                    <img className='h-8 mx-1 px-3 border-8' src={image} alt="" />
                    <NavLink url='/' name='Home'/>
                    <NavLink url='browse' name='Browse'/>
                    <NavLink url='create' name='Create'/>
                    <NavLink url='about' name='About'/>
                </section>

                <section className='flex justify-center items-center xl:flex-1 flex-2'>
                    <NavSearch/>
                </section>

                <section className='flex justify-end items-center flex-1'>
                    <NavLink url='/' name='Sign in'/>
                </section>
            </section>

            {/* Mobile navbar */}
            <section className='md:hidden flex flex-col w-full py-3'>
                <section className='flex px-3'>
                    <section className='flex justify-center items-center'>
                        <img className='h-8 mx-1 rounded-md' src={image} alt="" />
                    </section>

                    <section className='flex justify-center items-center w-full px-3'>
                        <NavSearch/>
                    </section>

                    <section className='flex justify-end items-center'>
                        <NavToggle/>
                    </section>

                </section>

                {/* Dropdown */}
                <section className='flex justify-start items-start flex-col px-3 py-3'>
                    <DropdownLink url='/' name='Home'/>
                    <DropdownLink url='browse' name='Browse'/>
                    <DropdownLink url='create' name='Create'/>
                    <DropdownLink url='about' name='About'/>
                </section>
            </section>
        </nav>
        
    );

}

export default Navbar;