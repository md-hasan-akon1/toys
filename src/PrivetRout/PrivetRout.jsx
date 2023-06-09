import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const PrivetRout = ({ children }) => {
    const { user, loading } = useContext(authContext);

    const location = useLocation()
    if (loading) {
        return <div className='text-center'><progress className="progress w-56"></progress></div>
    }
    if (user) {
        return children;
    }
       return <Navigate to="/login" state={location} ></Navigate>    
   
};

export default PrivetRout;