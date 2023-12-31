import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { MdArrowForwardIos } from "react-icons/md";
import GoogleSignInBtn from '../components/GoogleSignInBtn';

const VerifyPage = () => {
    const [err,setErr] = useState(false)
    const [showLoginBtn,setshowLoginBtn] = useState(false)
    const {
        register,
        handleSubmit
    } = useForm()

    const onSubmit = (data) => {
        if(data?.pin === "111"){
           
            setshowLoginBtn(true)
        }else{
            setErr(true);
        }
        
    }


    return (
        <div className='max-w-screen-md mx-auto py-8 pb-24'>
            <div className='flex justify-center flex-col items-center h-screen pb-36'>

                {/* logo  */}
                <div >
                    <img className='w-52 h-52' src="../../logo.jpg" alt="mw" />
                </div>


                {!showLoginBtn ? (
                    <>
                        {/* verify pin checking */}
                        <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center flex-col space-y-3 w-96'>
                            {/* verify  */}
                            <h1 className='text-black text-2xl font-semibold text-center'>Enter the pin to verify :</h1>

                            <input {...register("pin", { required: true })} type="number" className='border border-gray-500 outline-none h-16 px-4 py-2 rounded w-full' />
                            <button className='flex flex-row justify-center items-center space-x-3 bg-green-600 text-white py-2'>
                                <p className='text-2xl'>Next</p>
                                <MdArrowForwardIos className='text-2xl mt-2' />
                            </button>
                            {err && <p className='text-red-600 text-center'>pin is incorrect!</p>}
                        </form>
                    </>
                ) : (
                    <>
                    {/* google signin button  */}
                            <GoogleSignInBtn text="Login With Google" />
                    </>
                )}

               


            </div>

        </div>
    );
};

export default VerifyPage;