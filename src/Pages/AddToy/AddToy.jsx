import React, { useContext, useEffect, useState } from 'react';
import UseTitle from '../../CostomHook/UseTitle';
import { useForm } from "react-hook-form";
import { authContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const AddToy = () => {
    const {user}=useContext(authContext)
    const email=user?.email;
    const name=user?.displayName;
    UseTitle('add toy')
    const [addData,setAddData]=useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data =>{
    fetch('http://localhost:5000/addtoys',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        
    if(data.insertedId){
       
        toast.success('🦄 Toy Data Added successfully !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
       console.log(data)
    }
    })
    .catch(error=>console.log(error))
};

   
        

  
    return (
        <div className='bg-gray-100 rounded-lg'>
            <h1 className='text-center text-3xl font-bold'>Added A Toy Details</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* photo url */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 m-4 '>
                    <div>
                        <label className=' m-2 font-bold text-2xl'>photo URL</label> <br />
                        <input
                            type='img'
                            className=' p-4  w-full rounded-lg'
                            defaultValue=""
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
                            defaultValue=""
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
                           value={name}
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
                    <select {...register("subcategory")}>
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
                            defaultValue=""
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
                            defaultValue=""
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
                            defaultValue=""
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
                        defaultValue=""
                        placeholder='description'
                        {...register("detailDescription")}

                    />
                </div>
                <div className='w-full'>
                    <button className="btn btn-outline w-1/3 text-center mb-4 ms-[30%]"><input type="submit" /></button>
                </div>

            </form>
            <ToastContainer />
        </div>
    );
};

export default AddToy;