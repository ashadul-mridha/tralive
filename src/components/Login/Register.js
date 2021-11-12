import React from 'react';
import { useHistory , useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/tralive-logo.webp';

const Register = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const {loginWithGoogle , setUser , setIsLoading} = useAuth();
    
    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then( result => {
            setUser(result.user);
            history.push(redirect_uri);
            console.log(result.user);
        }).finally(
            () => {
                setIsLoading(false);
            }
        )
    }
    return (
        <div className="container">
            <div className="row justify-content-center my-5">
                <div className="col-md-6 col-sm-12 py-5  shadow border">
                   <div className="d-flex flex-column align-items-center">
                        <img src={logo} className="mb-3" alt="" />
                        <div>
                            <h4 className="my-3 text-center">Registration & Login With</h4>
                            <button onClick={handleGoogleLogin} className="btn btn-outline-warning"><i className="fab fa-google"></i> Continue With Google</button>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Register;