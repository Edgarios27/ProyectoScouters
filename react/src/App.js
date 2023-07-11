
import React from 'react';
import './App.css';
import { Registro } from './Pages/LoginYRegistro/Registro';
import { Login } from './Pages/LoginYRegistro/Login';
import { AuthContext } from './AuthContext/AuthContext';
import { useContext } from 'react';
import { BrowserRouter,Routes,Route,Navigate, } from 'react-router-dom';




export function App() {
  const {isLoggedIn } = useContext(AuthContext);
  return ( 
   
  
      <BrowserRouter> 
          <Routes>
            {/* <Route path="/" element={<Navbar/>} /> */}
            <Route path='/login' element={<Login/>} />
            <Route path='/registro' element={<Registro/>} />
             <Route path='/confirm/:token'element={isLoggedIn ? <Login /> : <Navigate to='/login'/>} />
          </Routes>
    </BrowserRouter>

  );
}



