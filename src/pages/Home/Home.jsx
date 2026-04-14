import React from 'react';
import Hero from '../../components/pageComponents/home/hero/Hero';
import Dashboard from '../../components/pageComponents/home/dashboard/Dashboard';

const Home = () => {
    return (
        <section className='home-section container mx-auto py-10 md:py-20'>
            <Hero />
            <Dashboard />

        </section>
    );
};

export default Home;