import React, { useEffect, useState } from 'react';
import UseTitle from '../../CostomHook/UseTitle';
import { Link } from 'react-router-dom';

const AllToys = () => {
    UseTitle('all toys')
    const [searchText, setSearchText] = useState('')
    const [allToys, setAllToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setAllToys(data))

    }, [])
    const handelSearch = () => {

        fetch(`http://localhost:5000/allToys/${searchText}`)
            .then(res => res.json())
            .then(data => setAllToys(data))

    }
    return (
        <div className='w-full ' >
            <div className=' w-1/3 mx-auto'>
                <input
                    className='border py-3 px-20 mb-5 rounded'
                    onChange={(e) => setSearchText(e.target.value)}

                />
                <button onClick={handelSearch} className="btn btn-outline m-3">Search</button>
            </div>


            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller name</th>
                            <th>Toys name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            allToys && allToys.map((toys, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{toys?.seller_name ? toys.seller_name : "seller name not found"}</td>
                                <td>{toys?.name ? toys.name : "Name not available"}</td>
                                <td>{toys?.subcategory ? toys.subcategory : "category not available"}</td>
                                <td>{toys?.price ? toys.price : "price not available"}</td>
                                <td>{toys?.subcategory ? toys.subcategory : "category not available"}</td>
                                <td><Link to={`/addDataDetail/${toys._id}`}><button className="btn btn-primary">view details</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;