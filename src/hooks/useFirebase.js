import axios from "axios";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import initializeAuthentication from '../config/firebase';

//initialize firebase  authentication
initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = React.useState(true);
    const auth = getAuth();
    const navigate = useNavigate();

    //on State Change 
    React.useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });

        return () => {
            unsubscribed();
        }
    }, [auth])


    //google sign in 
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        // google sign in 
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user);
                //post to database 
                
                // checking existing user in database 
                axios?.get(`https://mw-server.vercel.app/api/users?email=${res?.user?.email}`)
                    .then(response => {
                        //if user exists then it will not add this database again
                        const findEmail = response?.data?.find(em => {
                            return em?.email === res?.user?.email
                        })
                        if (findEmail) {
                            swal("Good job!", "Logged In!", "success");
                            navigate("/blogs");

                            //if not exists in database then it will post to databse
                        } else {

                            //post to database 
                            axios.post("https://mw-server.vercel.app/api/users", {
                                name: res?.user?.displayName,
                                email: res?.user?.email,
                                image: res?.user?.photoURL

                            }, {
                                headers: { 'Content-Type': 'application/json' }
                            })
                                .then((response) => {
                                    swal("Good job!", "Let's Go!", "success");
                                    navigate("/blogs");
                                })
                                .catch((err) => {
                                    swal("Something went wrong!", `${err.message}`, "error")
                                });
                        }
                    }).catch(err => swal("Something went wrong!", `${err.message}`, "error"))

            }).catch(err => swal("Something went wrong!", `${err.message}`, "error"))


    }

    // sign out 
    const signOutUser = () => {
        //signout
        signOut(auth).then(() => {
            setUser({});
            swal("Logout Successful!", "You are logged out!", "success");
            navigate('/verify')
        }).catch((err) => {
            swal("Something went wrong!", `${err.message}`, "error")
        });
    }

    return {
        user,
        signOutUser,
        signInWithGoogle,
        isLoading
    }
}

export default useFirebase