//App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes/Routes';
import NavBar from './components/common/navigation/NavBar';
import Footer from './components/common/navigation/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavBar />
      <div className='container mt-4'> 
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// import routes from './routes/Routes';
// import NavBarLoggedOut from './NavBarLoggedOut';
// import NavBarLoggedIn from './NavBarLoggedIn';
// import Footer from './components/common/navigation/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [user, setUser] = useState(null);

//   const handleLogin = async (username, password) => {
//     try {
//       const response = await axios.post('http://localhost/5000/login', { username, password });
//       const { token } = response.data;
//       localStorage.setItem('token', token);
//       setUser({ username });
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   const handleSignup = async (username, password) => {
//     try {
//       await axios.post('http://localhost/5000/register', { username, password });
//       // Automatically log in the user after registration
//       await handleLogin(username, password);
//     } catch (error) {
//       console.error('Signup failed:', error);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//   };

//   return (
//     <Router>
//       {user ? (
//         <NavBarLoggedIn user={user} onLogout={handleLogout} />
//       ) : (
//         <NavBarLoggedOut onLogin={handleLogin} onSignup={handleSignup} />
//       )}
//       <div className='container mt-4'> 
//         <Routes>
//           {routes.map((route, index) => (
//             <Route key={index} path={route.path} element={route.component} />
//           ))}
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
