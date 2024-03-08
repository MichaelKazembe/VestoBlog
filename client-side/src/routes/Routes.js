//Routes.js

import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Articles from '../components/pages/Articles';
import Profile from '../components/pages/Profile';
import NotFound from '../components/pages/NotFound';

import LoginPage from '../components/pages/LoginPage';
import RegisterPage from '../components/pages/RegisterPage';
import Unregister from '../components/pages/Unregister';
import LogoutPage from '../components/pages/LogoutPage';

const routes = [
    { path: '/', component: <Home />, exact: true },
    { path: '/about', component: <About /> },
    { path: '/contact', component: <Contact /> },
    { path: '/articles', component: <Articles />},
    { path: '/profile', component: <Profile />},
    { path: '/loginPage', component: <LoginPage />},
    { path: '/registerPage', component: <RegisterPage />},
    { path: '/unregister', component: <Unregister />},
    { path: '/logout', component: <LogoutPage />},
    { path: '*', component: <NotFound /> }
];

export default routes;
