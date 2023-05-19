import React from 'react';
import UseTitle from '../../CostomHook/UseTitle';

const AllToys = () => {
    UseTitle('all toys')
    return (
        <div>
            <h1>this is all toys </h1>
        </div>
    );
};

export default AllToys;