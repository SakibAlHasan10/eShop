import Navbar from '@/components/Navbar';
import TopNavbar from '@/components/TopNavbar';
import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <TopNavbar/>
            <Navbar/>
            {children}
            <h2>Footer</h2>
        </div>
    );
};

export default Layout;