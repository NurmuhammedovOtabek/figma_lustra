import React from 'react';
import { LayoutWrapper } from './Layout.styled';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function MainLayout(props) {
    const { children } = props;

    return (
        <LayoutWrapper>
            <div>
                <Navbar />
                <Outlet/>
            </div>
            <Footer />
        </LayoutWrapper>
    );
}

export default MainLayout;