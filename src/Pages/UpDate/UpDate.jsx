import React, { useContext, useEffect, useState } from 'react';
import UseTitle from '../../CostomHook/UseTitle';
import { useForm } from "react-hook-form";
import { authContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData, useParams } from 'react-router-dom';

const UpDate = () => {
    const { user } = useContext(authContext)


    const id = useParams().id;
    const loaderData = useLoaderData()
    const { availableQuantity, detailDescription, email, name, picture, price, rating, seller_name, subcategory, _id } = loaderData[0];
    UseTitle('update-my toy')
    const [updateData, setUpdateData] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`http://localhost:5000/update/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    <ToastContainer />
                    toast.success('🦄 Wow so easy!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch(error => console.log(error))



    };


    return (
        <div className='bg-gray-100 rounded-lg'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* photo url */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 m-4 '>
                    <div>
                        <label className=' m-2 font-bold text-2xl'>photo URL</label> <br />
                        <input
                            type='img'
                            className=' p-4  w-full rounded-lg'
                            defaultValue={picture}
                            placeholder='photo url'
                            {...register("picture")}

                        />
                    </div>
                    {/* name */}
                    <div>
                        <label className='font-bold text-2xl m-2 '> Name</label> <br />
                        <input
                            type='text'
                            className=' p-4  w-full rounded-lg'
                            defaultValue={name}
                            placeholder='Enter name '
                            {...register("name")}

                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 m-4 '>
                    {/* seller name */}
                    <div>
                        <label className=' m-2 font-bold text-2xl'>Seller Name</label> <br />
                        <input
                            className=' p-4  w-full rounded-lg'
                            defaultValue={seller_name}
                            type='text'
                            placeholder='seller name'
                            {...register("seller_name")}

                        />
                    </div>
                    {/* seller email */}
                    <div>
                        <label className='font-bold text-2xl m-2 '>Seller Email</label> <br />
                        <input
                            type='email'
                            className=' p-4  w-full rounded-lg'
                            value={email}
                            placeholder='seller email '
                            {...register("email")}

                        />
                    </div>
                </div>

                {/* to do some thing */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 m-4 '>
                    <select
                        defaultValue={subcategory} {...register("subcategory")}>
                        <option value="Vintage Cars">Vintage Cars</option>
                        <option value="Off-Road Vehicles">Off-Road Vehicles</option>
                        <option value="Sports Cars">Sports Cars</option>
                    </select>
                    {/* price */}
                    <div>
                        <label className='font-bold text-2xl m-2 '>Price</label> <br />
                        <input
                            className=' p-4  w-full rounded-lg'
                            type=''
                            defaultValue={price}
                            placeholder='Enter price '
                            {...register("price")}

                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 m-4 '>
                    {/* rating */}
                    <div>
                        <label className=' m-2 font-bold text-2xl'>Rating</label> <br />
                        <input
                            className=' p-4  w-full rounded-lg'
                            type=''
                            defaultValue={rating}
                            placeholder='rating'
                            {...register("rating")}

                        />
                    </div>
                    {/* quantity */}
                    <div>
                        <label className='font-bold text-2xl m-2 '>Available quantity</label> <br />
                        <input
                            className=' p-4  w-full rounded-lg'
                            type='text'
                            defaultValue={availableQuantity}
                            placeholder='available quantity'
                            {...register("availableQuantity")}

                        />
                    </div>

                </div>
                {/* description */}
                <div className='m-8'>
                    <label className='font-bold text-2xl m-2 '>Details Description </label> <br />
                    <textarea
                        className=' p-4  w-full rounded-lg'
                        type='text'
                        defaultValue={detailDescription}
                        placeholder='description'
                        {...register("detailDescription")}

                    />
                </div>
                <div className='w-full'>
                    <button className="btn btn-outline w-1/3 text-center mb-4 ms-[30%]"><input type="submit" /></button>
                </div>

            </form>
        </div>
    );
};

export default UpDate;