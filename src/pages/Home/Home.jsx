import React, { Suspense } from 'react';
import Hero from '../../components/pageComponents/home/hero/Hero';
import Dashboard from '../../components/pageComponents/home/dashboard/Dashboard';
import Friends from '../../components/pageComponents/home/friends/Friends';

const Home = () => {

    return (
        <section className='home-section container mx-auto'>
            <Hero />
            <Dashboard />
            <hr className="border-gray-500 opacity-20 mb-10" />
            <Friends />
        </section>
    );
};

export default Home;