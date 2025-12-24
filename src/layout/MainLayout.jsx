import React from 'react';
import { LayoutWrapper } from './Layout.styled';
import Navbar from './Navbar';
import Footer from './Footer';

function MainLayout(props) {
    const { children } = props;

    return (
        <LayoutWrapper>
            <div>
                <Navbar />
                {children}
            </div>
            <Footer />
        </LayoutWrapper>
    );
}

export default MainLayout;