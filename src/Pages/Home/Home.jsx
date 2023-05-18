import React from 'react';
import UseTitle from '../../CostomHook/UseTitle';
import Banner from '../../Sheared/Banner/Banner';


const Home = () => {
    UseTitle('home')
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;