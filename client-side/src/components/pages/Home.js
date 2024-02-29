//home.js
import React from 'react';
import HeroSection from '../layout/HeroSection';
import LatestArticles from '../layout/LatestArticles';
import Categories from '../layout/Categories';
import PopularArticles from '../layout/Categories';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <LatestArticles />
            <Categories />
            <PopularArticles />
        </div>
    );
};

export default Home;
