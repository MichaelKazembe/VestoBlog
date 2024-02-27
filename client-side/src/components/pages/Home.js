//home.js
import React from 'react';
import HeroSection from '../layout/HeroSection';
//import React, { useState, useEffect} from 'react';

// const Home = () => {
//     const [home, setHome] = useState(" ");

//     useEffect(() => {
//         fetch('/home')
//         .then(response => {
//             if(response.ok) {
//                 return response.text()
//                     .then(data => setHome(data));
//             }
//         })
//     }, []);

//     return (
//         <div> 
//             <h3>Home Page From Backend</h3>
//                 <div dangerouslySetInnerHTML={{ __html: home}}></div>
//         </div>
//     );
// };

const Home = () => {
    return (
        <div>
            <HeroSection />
        </div>
    );
};

export default Home;
