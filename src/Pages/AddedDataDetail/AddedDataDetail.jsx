import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseTitle from '../../CostomHook/UseTitle';

const AddedDataDetail = () => {
    const id = useParams().id;
    UseTitle('Added Data-all data')
    const [singleData, setSingleData] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/addDataDetail/${id}`)
            .then(res => res.json())
            .then(data => setSingleData(data[0]))
    }, [])
    const { availableQuantity,subcategory, detailDescription, name, picture, price, rating, _id } = singleData;
    return (
        <div className='w-full '>
            <div className="lg:w-1/2  mx-auto flex flex-col lg:flex-row  card card-side bg-sky-100 shadow-xl">
                <figure><img src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold font-mono text-red-600">Car Name: {name}</h2>
                    <h3 className='text-2xl mb-0 font-bold italic'>Car Category: {subcategory}</h3>
                    <h3 className='text-2xl mb-0 font-bold italic'>Available Quantity: {availableQuantity}</h3>

                    <div className='flex'>
                        <h4 className='font-bold'>Price: {price}</h4>

                        <h4 className='flex font-bold'>
                            {rating}
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            />
                        </h4>
                    </div>
                    <h4>{detailDescription}</h4>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AddedDataDetail;