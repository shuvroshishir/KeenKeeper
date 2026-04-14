import React from 'react';
import { Link, NavLink } from 'react-router';
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";

const NavBar = () => {

    return (
        <nav className='bg-white shadow-sm'>
            <div className='nav-section max-w-[90%] mx-auto flex justify-between items-center py-4.5'>

                <Link to={'/'} className='text-(--secondary-color) text-lg sm:text-2xl font-extrabold'>Keen
                    <span className='text-(--primary-color) font-semibold'>Keeper</span>
                </Link>

                <div className="nav-right flex items-center bg-gray-100 p-0.5 rounded-sm w-fit font-semibold">
                    <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'bg-(--primary-color) text-white' : ''} rounded-sm  py-2.5 px-3 flex items-center gap-1      hover:brightness-140  transition-all duration-200 ease-in-out`}>
                        <RiHome2Line />
                        <p className='hidden sm:block'>Home</p>
                    </NavLink>
                    <NavLink to={'/timeline'} className={({ isActive }) => `${isActive ? 'bg-(--primary-color) text-white' : ''} rounded-sm  py-2.5 px-3 flex items-center gap-1      hover:brightness-140  transition-all duration-200 ease-in-out`}>
                        <IoTimeOutline />
                        <p className='hidden sm:block'>Timeline</p>
                    </NavLink>

                    <NavLink to={'/stats'} className={({ isActive }) => `${isActive ? 'bg-(--primary-color) text-white' : ''} rounded-sm  py-2.5 px-3 flex items-center gap-1     hover:brightness-140  transition-all duration-200 ease-in-out`}>
                        <FaChartLine />
                        <p className='hidden sm:block'>Stats</p>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;