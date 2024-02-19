//Routes.js

import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Blog from '../components/pages/Blog';
import NotFound from '../components/pages/NotFound';

const routes = [
    { path: '/', component: <Home />, exact: true },
    { path: '/about', component: <About /> },
    { path: '/contact', component: <Contact /> },
    { path: '/blog', component: <Blog />},
    { component: <NotFound /> }
];

export default routes;
