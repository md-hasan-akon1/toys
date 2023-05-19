import React from 'react';
import {  FaGithub, FaGoogle, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className=' border grid grid-cols-1 lg:grid-cols-2  mx-auto rounded-lg'>
            <div>
                <img className='h-50 lg:w-[100%] rounded-lg hidden lg:block  ' src="https://i.ibb.co/3RhgJG0/Login-8.jpg" alt="" />

                <img className=' h-28 mx-auto lg:hidden' src="https://i.ibb.co/GQCxRGY/login.jpg" alt="" />
                <h1 className='text-3xl font-bold font-mono text-center lg:hidden'>WellCome Back</h1>
            </div>

            <form className=' bg-gray-200 mx-auto border m-5 p-4 lg:w-[50%] rounded-lg '>
                <div className="form-control w-full max-w-xs">
                    <h1 className='text-3xl font-bold font-mono text-center hidden lg:block mb-3 '>WellCome Back <br />Please LogIn !</h1>
                    <label className="label">
                        <span className="label-text font-bold">Enter Your Email</span>
                    </label>
                    <input type="email" placeholder="Type your email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Enter Your password</span>
                    </label>
                    <input type="password" placeholder="Type your password" className="input input-bordered w-full max-w-xs" />
                </div>
                <button className="btn btn-primary mt-4 w-full mx-auto"> <input type="submit" value="Login" /></button>

           

                    <Link className='text-green-700 font-bold'>Forgot Password ?</Link> <br />
                    <span>Don't Have An Account<Link to={'/register'} className="btn btn-link">Sign In</Link></span>

               
                <div className='flex justify-center items-center gap-2'>
                    <span style={{ height: '4px', width: '150px' }} className='bg-black '></span>
                    <h6 className='text-center'>OR</h6>
                    <span style={{ height: '4px', width: '150px' }} className='bg-black '></span>

                </div>
                <button className="btn btn-outline lg:w-full ms-12 lg:ms-0"><FaGoogle className='m-2' /> Continue With Google</button> <br />
                <button className="btn btn-outline text-center  ms-12  lg:w-full  lg:ms-0  mt-4"><FaGithub className='m-2' /> Continue With Github</button>

            </form>

        </div>
    );
};

export default Login;