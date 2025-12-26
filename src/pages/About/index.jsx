import React from 'react';
import AboutComp from './components/AboutComp';
import AboutBlog from './components/AboutBlog';

function About(props) {
    return (
        <div className='container'>
            <AboutComp/>
            <AboutBlog/>
        </div>
    );
}

export default About;