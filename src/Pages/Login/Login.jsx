import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle, } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import UseTitle from '../../CostomHook/UseTitle';
const Login = () => {
    UseTitle('log in')
    const { signIn, googleLogin, githubLogin } = useContext(authContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState('')
    const from = location?.state?.pathname || "/"

    const handelLogin = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from)
                setError('')
                console.log(from)
                form.reset()
            })
            .catch(e => {
                const errorMassage = (e.message)
                console.log(e.message)
                if (errorMassage.includes("auth/wrong-password")) {
                    setError('Wrong Password')

                }
                else if (errorMassage.includes("auth/")) {
                    setError('User Not Found')
                }
            })
    }
    const handelGithubLogin = () => {
        githubLogin()
            .then(result => {
                navigate(from)
                console.log(result.user)
            })
            .catch(error => console.log(error))

    }

    const handelGoogleLogin = () => {
        googleLogin()
            .then(result => {
                navigate(from)
                console.log(result.user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className=' border grid grid-cols-1 lg:grid-cols-2  mx-auto rounded-lg'>
            <div>
                <img className='h-50 lg:w-[100%] rounded-lg hidden lg:block  ' src="https://i.ibb.co/3RhgJG0/Login-8.jpg" alt="" />

                <img className=' h-28 mx-auto lg:hidden' src="https://i.ibb.co/GQCxRGY/login.jpg" alt="" />
                <h1 className='text-3xl font-bold font-mono text-center lg:hidden'>WellCome Back</h1>
            </div>

            <div className=' bg-gray-200 mx-auto border m-5 p-4 lg:w-[50%] rounded-lg ' >
                <form onSubmit={ handelLogin} >
                    <div className="form-control w-full max-w-xs">
                        <h1 className='text-3xl font-bold font-mono text-center hidden lg:block mb-3 '>WellCome Back <br />Please LogIn !</h1>
                        <label className="label">
                            <span className="label-text font-bold">Enter Your Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Type your email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Enter Your password</span>
                        </label>
                        <input type="password" name='password' placeholder="Type your password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <span className='text-red-500 font-bold'>
                        {error}
                    </span>
                    <button className="btn btn-primary mt-4 w-full mx-auto"> <input type="submit" value="Login" /></button>



                    <Link className='text-green-700 font-bold'>Forgot Password ?</Link> <br />
                    <span>Don't Have An Account<Link to={'/register'} className="btn btn-link">Sign In</Link></span>


                    <div className='flex justify-center items-center gap-2'>
                        <span style={{ height: '4px', width: '150px' }} className='bg-black '></span>
                        <h6 className='text-center'>OR</h6>
                        <span style={{ height: '4px', width: '150px' }} className='bg-black '></span>
                    </div>
                </form>
                <button onClick={handelGoogleLogin} className="btn btn-outline lg:w-full ms-12 lg:ms-0"><FaGoogle className='m-2' /> Continue With Google</button> <br />
                <button  onClick={handelGithubLogin} className="btn btn-outline text-center  ms-12  lg:w-full  lg:ms-0  mt-4"><FaGithub className='m-2' /> Continue With Github</button>
            </div>

        </div>
    );
};

export default Login;