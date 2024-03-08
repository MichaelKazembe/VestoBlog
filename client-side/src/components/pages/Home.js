//home.js
import React from 'react';
import HeroSection from '../layout/HeroSection';
import LatestArticles from '../layout/LatestArticles';
// import Categories from '../layout/Categories';
// import PopularArticles from '../layout/Categories';
import News from '../layout/News';
import Subscribe from '../layout/Subscribe';
import Services from '../layout/Services';

const Home = () => {

    return (
        <div>
            <HeroSection />
            <Services />
            <LatestArticles />
            <News />
            {/* <Categories />
            <PopularArticles /> */}
            <Subscribe />
        </div>
    );
};

export default Home;
