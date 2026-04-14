import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import NavBar from '../components/NavBar/NavBar';


const Root = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                foot
            </footer>
            <ToastContainer />
        </>
    );
};

export default Root;

//HoverEffect: hover:brightness-140 hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out 