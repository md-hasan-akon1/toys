import React from 'react';
import { FaBeer, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-slate-200 my-10 p-4'>
            <div className='lg:flex justify-between'>
            <div>
                <div className='flex items-center my-5'>
                    <img className='h-20 w-20 rounded-full' src="https://i.ibb.co/LSQ4Hjd/toys-logo.png" alt="" />
                    <div>
                        <h3 className='font-bold text-2xl'>Kid Car Toys Shop</h3>
                        <p>online Store</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Nesciunt aut fugiat perferendis iste fuga, <br />
                 quae magnam odit modi id </p>
                <div className='flex gap-3'>
                    <FaFacebook className='h-8 w-8' />
                    <FaInstagram className='h-8 w-8' />
                    <FaTiktok className='h-8 w-8' />
                    <FaLinkedin className='h-8 w-8' />
                    <FaTwitter className='h-8 w-8' />
                </div>
            </div>


            <div className='my-5'>
                <h1 className='font-bold text-2xl'>Contact Us</h1>
                <h4>Email:cars@toys.com</h4>
                <h4>mobile:01745321..</h4>
                <h4>phone:015646....</h4>
            </div>
            <div className='my-5'>
                <h1  className='font-bold text-2xl'>Our Address</h1>
                <p>super market</p>
                <p>dhanmondy,road-12/2</p> 
                <p> Dhaka Bangladesh</p>
            </div>
            <div className='my-5'>
                <textarea name="" id="" cols="30" rows="5"></textarea> <br />
            <input className='py-3 px-2 rounded-lg' type="email" name="" id="" placeholder='enter your email' />
            <button className="btn btn-error py-4 m-[-25%]">Send</button>
            </div>
            </div>
            <h1 className='text-center'>Copyright © 2023 All Rights Reserved</h1>
        </div>
    );
};

export default Footer;