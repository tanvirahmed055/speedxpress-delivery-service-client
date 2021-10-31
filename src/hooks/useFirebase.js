import { useState, useEffect } from 'react';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';
import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {

    const [userInfo, setUserInfo] = useState(null);

    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUserInfo(user);


                // ...
            } else {
                // User is signed out
                // ...
            }
            setLoading(false);
        });
    }, [])

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUserInfo({});
        }).catch((error) => {
            // An error happened.
        });
    }






    return {
        userInfo,
        handleLogOut,
        handleGoogleLogin,
        loading,
        auth,
        setLoading,
        setUserInfo
    };
};

export default useFirebase;