//Routes.js

import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Articles from '../components/pages/Articles';
import Login from '../components/pages/Login';
// import Register from '../components/pages/Register';
// import RegisterForm from '../components/pages/RegisterForm';
import Profile from '../components/pages/Profile';
import NotFound from '../components/pages/NotFound';

import LoginPage from '../components/pages/LoginPage';
import RegisterPage from '../components/pages/RegisterPage';

const routes = [
    { path: '/', component: <Home />, exact: true },
    { path: '/about', component: <About /> },
    { path: '/contact', component: <Contact /> },
    { path: '/articles', component: <Articles />},
    { path: '/profile', component: <Profile />},
    // { path: '/register', component: <Register />},
    // { path: '/registerForm', component: <RegisterForm />},
    { path: '/login', component: <Login />},
    { path: '/loginPage', component: <LoginPage />},
    { path: '/registerPage', component: <RegisterPage />},
    { path: '*', component: <NotFound /> }
];

export default routes;
