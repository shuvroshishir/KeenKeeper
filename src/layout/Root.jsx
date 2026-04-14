import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/footer/Footer';


const Root = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className='min-h-[50vh] bg-[#F8FAFC]'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
            <ToastContainer />
        </>
    );
};

export default Root;

//HoverEffect: hover:brightness-140 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out 