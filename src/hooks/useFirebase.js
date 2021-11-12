import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseinitializeauth from "../Firebase/firebase.init";

const useFirebase = () => {

    firebaseinitializeauth();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //get the current user
    const [user , setUser] = useState({});
    const [isLoading , setIsLoading] = useState(true);

    //login with google
    const loginWithGoogle = () => {

        setIsLoading(true);
        return signInWithPopup(auth , googleProvider)
        

    }

    //get or stay current user
    useEffect( () => {
        onAuthStateChanged(auth , (user) => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
        })
        setIsLoading(false)
    }, [])

    //logout user
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then( () => {
            setUser({})
        }).finally(
            () => {
                setIsLoading(false);
            }
        )
    }


    return {
        user,
        setUser,
        setIsLoading,
        isLoading,
        loginWithGoogle,
        logOut
    }
    
    
}

export default useFirebase;