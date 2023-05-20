import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
const CategoryTable = ({ data }) => {

    const { availableQuantity, detailDescription, name, picture, price, rating, _id } = data;
    return (
        <div>
            <div className="card w-96 bg-gray-100 shadow-xl">
                <figure><img className='h-60 w-50 rounded-lg' src={picture} alt="toys" /></figure>
                <div className="card-body ">
                    <h2 className="card-title font-bold">Name: {name}</h2>

                    <div className='flex items-center'>
                        {rating}
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <p>price: {price}</p>

                    <div className="card-actions justify-end">
                        <Link to={`/viewDetail/${_id}`}> <button className="btn btn-primary">View Detail</button></Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryTable;