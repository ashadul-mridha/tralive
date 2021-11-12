import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {
    const {_id , title , img , desc , price} = props.data;
    return (
        <div className="col-md-4 col-sm-6">
            <img src={img} className="img-fluid" alt="" />
            <div className="d-flex justify-content-between my-3">
                <h4 className="text-primary">{title}</h4>
                <h4 className="text-danger">${price}</h4>
            </div>
            <p>{desc.slice(0,200)}</p>
            <Link to={`/event/${_id}`}> <button className="btn btn-primary">Join Now </button> </Link>
        </div>
    );
};

export default SingleEvent;