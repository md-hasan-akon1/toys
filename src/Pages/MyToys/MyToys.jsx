import React, { useContext, useEffect, useState } from 'react';
import UseTitle from '../../CostomHook/UseTitle';
import { authContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
    UseTitle('my toys')
    const { user } = useContext(authContext)
    const [myToys, setMyToys] = useState([])
    const url = `http://localhost:5000/myToys?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])
    const handelDelete = (id) => {
        fetch(`http://localhost:5000/addDataDetail/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
            const remaining=myToys.filter(toy=>toy._id!==id)
            setMyToys(remaining)
                if (data.deletedCount > 0) {
                    alert("delete success")
                }
            })
    }
    return (

        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>picture</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>email</th>
                        <th>price</th>
                        <th>rating</th>
                        <th>seller_name</th>
                        <th>subcategory</th>
                        <th></th>


                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myToys && myToys.map((toy, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td className="avatar">
                                <div className="w-12 rounded-full">
                                    <img className='w-12' src={toy?.picture ? toy?.picture : "image not found"} />
                                </div>
                            </td>
                            <td>{toy?.name ? toy?.name : "image not found"}</td>

                            <td>{toy?.availableQuantity ? toy?.availableQuantity : "available Quantity not found"}</td>

                            <td>{toy?.email ? toy?.email : "email not found"}</td>
                            <td>{toy?.price ? toy?.price : "price not found"}</td>
                            <td>{toy?.rating ? toy?.rating : "rating not found"}</td>
                            <td>{toy?.seller_name ? toy?.seller_name : "seller_name not found"}</td>
                            <td>{toy?.subcategory ? toy?.subcategory : "subcategory not found"}</td>


                            <td><button onClick={() => handelDelete(toy._id)} className="btn btn-outline">Delete</button ></td>
                            <td><Link to={`update/${toy._id}`} className="btn btn-outline">Update</Link></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyToys;