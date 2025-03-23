 
 import React from 'react';
import App from '../App';
import Navbers from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
 
 const MainLayout = () => {
    return (
        <div>
        <Navbers></Navbers>
        <div className='py-25'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    );
 };
 
 export default MainLayout;

