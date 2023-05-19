import React from 'react';
import UseTitle from '../../CostomHook/UseTitle';

const MyToys = () => {
    UseTitle('my toys')
    return (
        <div>
            <h1>this is my toys</h1>
        </div>
    );
};

export default MyToys;