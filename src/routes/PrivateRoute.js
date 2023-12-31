import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className='flex flex-col h-screen w-full justify-center items-center space-y-6'>
                <h1>Loading.......</h1>
            </div>
        )
    }

    return user?.email ? children : <Navigate to="/verify" state={{ from: location }} />;


}

export default PrivateRoute