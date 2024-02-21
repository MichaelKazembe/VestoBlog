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