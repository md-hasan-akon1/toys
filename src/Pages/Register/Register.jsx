import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle, } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
const Register = () => {
    const { createUser, googleLogin, githubLogin } = useContext(authContext);
    const [error, setError] = useState('');
    const [passwordCheck, setPassword] = useState('');
    const navigate = useNavigate()
    const handelRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const conPassword = form.confirm.value;
        if (password !== conPassword) {
            setError('password did not match')
            return
        }
        else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setError("Invalid  email")
            return
        }
        else {

            createUser(email, password)
                .then(result => {
                    upDateUser(result.user, name, photo)
                    console.log(result.user)
                    form.reset()
                    setPassword('')
                    navigate('/')
                })
                .catch(e => {
                    const errorMassage = (e.message)
                    console.log(e.message)
                    if (errorMassage.includes("auth")) {
                        setError('User already exists')
                    }
                    return
                })
            setError('')
        }
    }
    const upDateUser = (user, name, photo,) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => { })
            .catch(error => console.log(error))
    }


    const handelPassword = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
        if (inputPassword.length < 6) {
            setError('password must be at least 6 characters')
            return
        }
        else {
            setError('')
        }
    }
    const handelGithubLogin = () => {
        githubLogin()
            .then(result => {
                
                console.log(result.user)
            })
            .catch(error => console.log(error))

    }

    const handelGoogleLogin = () => {
        googleLogin()
            .then(result => {
               
                console.log(result.user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className=' border grid grid-cols-1 lg:grid-cols-2  mx-auto rounded-lg'>
            <div>
                <img className='h-full lg:w-[100%] rounded-lg hidden lg:block  ' src="https://i.ibb.co/3RhgJG0/Login-8.jpg" alt="" />

                <img className=' h-28 mx-auto lg:hidden' src="https://i.ibb.co/hDhzhxs/register.png" alt="" />
                <h1 className='text-3xl font-bold font-mono text-center lg:hidden'>WellCome Our Shop <br />Please Register</h1>
            </div>

            <div className=' bg-gray-200 mx-auto border m-5 p-4 lg:w-[50%] rounded-lg '>
                <form onSubmit={handelRegister} >
                    {/* name */}
                    <div className="form-control w-full max-w-xs">
                        <h1 className='text-3xl font-bold font-mono text-center hidden lg:block mb-3 '>WellCome Our Shop<br />Please Register !</h1>
                        <label className="label">
                            <span className="label-text font-bold">Enter Your Name</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Type your Name"
                            className="input input-bordered w-full max-w-xs"
                            required />
                    </div>
                    {/* email */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Enter Your Email</span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Type your Email"
                            className="input input-bordered w-full max-w-xs"
                            required />
                    </div>
                    {/* password */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Enter Your password</span>
                        </label>
                        <input
                            type="password"
                            name='password'
                            value={passwordCheck}
                            onChange={handelPassword}
                            placeholder="Type your password"
                            className="input input-bordered w-full max-w-xs"
                            required />
                    </div>
                    {/* confirm pas */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">confirm You password</span>
                        </label>
                        <input
                            type="password"
                            name='confirm'
                            placeholder="confirm  password"
                            className="input input-bordered w-full max-w-xs"
                            required />
                    </div>
                    {/* photo url */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Enter Your photo Url</span>
                        </label>
                        <input
                            type="img"
                            name='photo'
                            placeholder="Enter Your Photo URL"
                            className="input input-bordered w-full max-w-xs"
                            required />
                    </div>
                    <span className='text-red-500 font-bold'>
                        {error}
                    </span>
                    <button className="btn btn-primary mt-4 w-full mx-auto"> <input type="submit" value="Register" /></button>
                    <input type="checkbox" name="" id="" />
                    <span>Accept<Link className='text-blue-700 font-bold'> Terms and Condition</Link> </span>

                    <br />
                    <span>Already Have An Account<Link to={'/register'} className="btn btn-link">LogIn</Link></span>


                    <div className='flex justify-center items-center gap-2'>
                        <span style={{ height: '4px', width: '150px' }} className='bg-black '></span>
                        <h6 className='text-center'>OR</h6>
                        <span style={{ height: '4px', width: '150px' }} className='bg-black '></span>

                    </div>
                </form>

                <button  onClick={handelGoogleLogin} className="btn btn-outline lg:w-full ms-12 lg:ms-0"><FaGoogle className='m-2' /> Continue With Google</button> <br />
                <button onClick={handelGithubLogin} className="btn btn-outline text-center  ms-12  lg:w-full  lg:ms-0  mt-4"><FaGithub  className='m-2' /> Continue With Github</button>
            </div>


        </div>
    );
};

export default Register;