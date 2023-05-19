import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const NavigationBar = () => {
    const { user, logout } = useContext(authContext)
   

    const handelLogOut = () => {
        logout()
    }
    const navItems = <>
        <li><Link to="/">Home</Link> </li>
        <li> <Link to="/blog">Blog</Link></li>
        <li> <Link to="/allToys">All toys</Link> </li>
        <li> <Link to="/myToys">My toys</Link></li>
        <li> <Link to="/addtoy">Add Toy</Link></li>
        {
            user ? <>
                   <li> <button onClick={handelLogOut}>logOut</button></li>
                 </>: 
                 <><li> <Link to="/login">LogIn</Link></li>
                    <li> <Link to="/register">Register</Link></li>
                  </>
        }


    </>
    return (
        <div>
            <div className="navbar bg-green-200 rounded-lg my-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}

                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <img className='h-10 hidden rounded-full lg:block' src="https://i.ibb.co/KFYrMzw/logo.jpg" alt="" />
                        <h3 className='font-mono font-bold lg:text-3xl'>Kid Car Toys Shop </h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}

                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {
                            user?.photoURL ? <div >
                                <img title={user.displayName} className="w-12 rounded-full" src={user.photoURL} />
                            </div> : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;