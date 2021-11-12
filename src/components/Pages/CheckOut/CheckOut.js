import React , { useRef } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const CheckOut = () => {
    const {eventId} = useParams();

    const history = useHistory();

    //use ref
    const nameRef = useRef('');
    const phoneRef = useRef('');
    const addressRef = useRef('');

    //get user
    const {user} = useAuth();
    const { email} = user;


    const handleCheckout = (e) => {

        const name = nameRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;

        const orderDetails = {
            name,
            phone,
            address,
            eventId,
            email,
            status: 'pending'
        }

        axios.post('https://afternoon-castle-32125.herokuapp.com/checkout', orderDetails)
        .then( res => {
            if(res){
                history.push('/conform');
            }else{
                 alert('Order Not Added');
            }
        })


        e.preventDefault();
    }


    return (
        <div className="container my-5">
            <div className="bg-warning py-4 px-2">
                <h1 className="text-white">Shipping Details </h1>
            </div>
            <form onSubmit={handleCheckout} className="mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 py-3">
                        <input ref={nameRef} type="text" placeholder="Full Name" className="form-control border shadow-sm" />
                    </div>
                    <div className="col-md-6 col-sm-12 py-3">
                        <input ref={phoneRef} type="number" placeholder="Phone Number" className="form-control border shadow-sm" />
                    </div>
                    <div className="col-md-12 col-sm-12 py-3">
                        <input ref={addressRef} type="text" placeholder="Street Address" className="form-control border shadow-sm" />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                     <input type="submit" value="Confirm" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;