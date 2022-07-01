import logo from './logo.svg';
import React from 'react'
import './App.css';
import {Outlet} from 'react-router-dom'
import Navbar from './Components/Home/Navbar/Navbar'
import Enter from './Components/Enter/Entering';
import Footer from './Components/Home/Footer/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>  
   </>
  );
}

export default App;
