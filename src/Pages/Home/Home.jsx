import React from 'react';
import UseTitle from '../../CostomHook/UseTitle';

const Home = () => {
    UseTitle('home')
    return (
        <div>
            <h1>this is home</h1>
        </div>
    );
};

export default Home;