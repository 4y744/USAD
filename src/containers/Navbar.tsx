//Import components
import { NavLogo, NavLink, NavSearch, NavToggle, DropdownLink, NavLineBreak } from "../exports";

//Import React hooks
import { useState, useRef, useEffect } from "react";

//Import localization
import i18n from "../locale/config";
import { useTranslation } from "react-i18next"

export function Navbar()
{
    //const change = () => i18n.changeLanguage("bg");
    //const { t } = useTranslation();

    //Mobile navbar event handler
    const [navToggled, setNavToggled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleNavbar = () => {
        setNavToggled(!navToggled);
    }

    return (
        <nav className="bg-zinc-900 drop-shadow-md">
            {/* Big screen navbar */}
            <div className="md:flex hidden p-2">

                <div className="flex justify-start items-center xl:flex-1 flex-2">
                    <NavLogo/>
                    <NavLink url="/" text="Home"/>
                    <NavLink url="browse" text="Browse"/>
                    <NavLink url="create" text="Create"/>
                    <NavLink url="about" text="About"/>
                </div>

                <div className="flex justify-center items-center flex-1">
                    <NavSearch/>
                </div>

                <div className="flex justify-end items-center flex-1">
                    <NavLink url="/" text="Sign in"/>
                </div>

            </div>

            {/* Mobile navbar */}
            <div className="md:hidden flex flex-col">

                <div className="flex p-3">

                    <div className="flex justify-center items-center">
                        <NavLogo/>
                    </div>

                    <div className="flex justify-center items-center w-full px-3">
                        <NavSearch/>
                    </div>

                    <div className="flex justify-end items-center">
                        <NavToggle toggle={toggleNavbar}/>
                    </div>

                </div>

                {/* Dropdown */}
                <div style={navToggled ? {height: dropdownRef.current?.scrollHeight!} : {height: 0}} ref={dropdownRef} className="flex justify-start items-start overflow-hidden flex-col px-3 transition-height duration-300 ease-in-out">
                    <DropdownLink onclick={toggleNavbar} url="/" text="Home"/>
                    <DropdownLink onclick={toggleNavbar} url="browse" text="Browse"/>
                    <DropdownLink onclick={toggleNavbar} url="create" text="Create"/>
                    <DropdownLink onclick={toggleNavbar} url="about" text="About"/>
                    <hr className="h-1 w-full my-2 border-1 border-zinc-200"/>
                    <DropdownLink onclick={toggleNavbar} url="/" text="Sign in"/>
                    {/* Empty space, because margins or vertical paddings are not affected by height */}
                    <NavLineBreak/>
                </div>
                
            </div>
        </nav>
        
    );

}
