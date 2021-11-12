import React , {useState , useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    const {eventId} = useParams();
    
    //get data by id 
    const [event , setEvent] = useState({});
    useEffect( () => {
        fetch(`https://afternoon-castle-32125.herokuapp.com/event/${eventId}`)
        .then( res => res.json())
        .then( data => {
            setEvent(data)
        })
    } , [])

    const {_id , title , desc , img , price} = event;
    return (
        <div className="container">
            <div className="row my-5 py-5">
                <div className="col-md-6 col-sm-12">
                    <h1>{title}</h1>
                    <h6 className="py-2">{desc}</h6>
                    <div className="d-flex justify-content-between py-3">
                        <Link to={`/checkout/${_id}`}> <button className="btn btn-primary">Conform Now</button> </Link>
                        <h4 className="text-danger">${price}</h4>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={img} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;