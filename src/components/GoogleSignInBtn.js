import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../hooks/useAuth';

const GoogleSignInBtn = ({ text }) => {
    const { signInWithGoogle } = useAuth();

    return (
        <>
            {/* //google signin g */}
            <div className="mb-4">
                <div className="flex items-center space-x-3 justify-center border border-gray-300 rounded-lg w-full py-3 px-4 cursor-pointer bg-white"
                 onClick={() => {
                     signInWithGoogle()
                     
                 }}>
                    
                    <FcGoogle className="w-6 h-6" />
                    <span className="body_font text-sm text-gray-700">{text}</span>
                </div>
            </div>
        </>
    )
}

export default GoogleSignInBtn