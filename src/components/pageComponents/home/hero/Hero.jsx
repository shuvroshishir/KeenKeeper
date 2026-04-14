import React from 'react';
import { MdAdd } from "react-icons/md";

const Hero = () => {
    return (
        <div className='Hero-section text-center'>
            <h1 className='text-(--secondary-color) text-4xl md:text-5xl font-bold mb-4'>Friends to keep close in your life</h1>
            <p className='text-(--para-color) mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.
            </p>
            <button className='bg-(--primary-color) px-4 py-2.5 rounded-sm text-white font-semibold flex items-center hover:brightness-140 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out mx-auto cursor-pointer'>
                <MdAdd size={20} /> Add a Friend</button>
        </div>
    );
};

export default Hero;