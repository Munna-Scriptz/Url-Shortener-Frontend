import React, { useState } from 'react';
import HomeDecorations from '../components/ui/Decorations';
import Instructions from '../components/home/Instructions';
import Hero from '../components/home/Hero';

const Home = () => {
    return (
        <>
            {/* --- DECORATIONS --- */}
            <HomeDecorations />

            {/* --- HERO SECTION --- */}
            <Hero />

            {/* --- INSTRUCTIONS --- */}
            <Instructions />

        </>
    );
};

export default Home;