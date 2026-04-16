import React from 'react';
import { Outlet } from 'react-router';
import { Slide, ToastContainer } from 'react-toastify';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/footer/Footer';


const Root = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className='min-h-[50vh] bg-[#F8FAFC] py-10 md:py-20'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Slide}
            />
        </>
    );
};

export default Root;

//HoverEffect: hover:brightness-140 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out 