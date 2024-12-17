import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-6xl mx-auto '>
            <Navbar></Navbar>

            <div className='min-h-screen py-4'>
                <Outlet ></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;