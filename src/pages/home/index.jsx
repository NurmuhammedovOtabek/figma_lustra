import React from 'react';
import HomeSlide from './components/HomeSlide';
import HomePosts from './components/HomePosts';
import HomeBlog from './components/HomeBlog';

function Home(props) {
    return (
        <div>
            <HomeSlide/>
            <HomePosts/>
            <HomeBlog/>
        </div>
    );
}

export default Home;