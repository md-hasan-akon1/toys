import React from 'react';
import NavigationBar from '../../Sheared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Sheared/Footer/Footer';

const Main = () => {
    return (
        <div className='lg:mx-12'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;