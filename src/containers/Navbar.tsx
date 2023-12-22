//Import components
import { NavLogo, NavLink, NavSearch, NavToggle, DropdownLink } from "../exports";

//Import React hooks
import { useState } from "react";

//Import localization
import i18n from "../locale/config";
import { useTranslation } from "react-i18next"

export default function Navbar()
{
    //const change = () => i18n.changeLanguage("bg");
    //const { t } = useTranslation();

    const [dropdownHeight, setDropdownHeight] = useState(0);

    const toggleNavbar = () => {
        if(dropdownHeight > 0) setDropdownHeight(0);
        else setDropdownHeight(300);
    }

    return (
        <nav className="bg-gray-800 shadow-lg">
            {/* Big screen navbar */}
            <section className="md:flex hidden p-2">

                <section className="flex justify-start items-center xl:flex-1 flex-2">
                    <NavLogo/>
                    <NavLink url="/" text="Home"/>
                    <NavLink url="browse" text="Browse"/>
                    <NavLink url="create" text="Create"/>
                    <NavLink url="about" text="About"/>
                </section>

                <section className="flex justify-center items-center flex-1">
                    <NavSearch/>
                </section>

                <section className="flex justify-end items-center flex-1">
                    <NavLink url="/" text="Sign in"/>
                </section>

            </section>

            {/* Mobile navbar */}
            <section className="md:hidden flex flex-col">

                <section className="flex px-3 py-3">

                    <section className="flex justify-center items-center">
                        <NavLogo/>
                    </section>

                    <section className="flex justify-center items-center w-full px-3">
                        <NavSearch/>
                    </section>

                    <section className="flex justify-end items-center">
                        <NavToggle toggle={toggleNavbar}/>
                    </section>

                </section>

                {/* Dropdown */}
                <section style={{maxHeight: dropdownHeight}} className="flex justify-start items-start overflow-hidden flex-col px-3 transition-max-height duration-500 ease-in-out">
                    <DropdownLink url="/" text="Home"/>
                    <DropdownLink url="browse" text="Browse"/>
                    <DropdownLink url="create" text="Create"/>
                    <DropdownLink url="about" text="About"/>
                    <hr className="w-full border-none h-[1px] my-2 bg-gray-400"/>
                    <DropdownLink url="/" text="Sign in"/>
                    {/* Empty space, because padding or margin breaks navbar toggle */}
                    <hr className="w-full my-2 border-transparent"/>
                </section>
                
            </section>
        </nav>
        
    );

}
