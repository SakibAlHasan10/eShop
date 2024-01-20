import Navbar from '@/components/Navbar';
import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <h2>Footer</h2>
        </div>
    );
};

export default Layout;