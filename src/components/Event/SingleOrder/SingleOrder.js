import React, { useEffect, useState } from 'react';

const SingleOrder = (props) => {
    const {eventId , _id} = props.data;
    const {handleCancel} = props;
    // console.log(props.cancel);

    const [event , setEvent ] = useState({});

    useEffect( () => {
        fetch(`https://afternoon-castle-32125.herokuapp.com/event/${eventId}`)
        .then( res => res.json())
        .then( data => {
            setEvent(data)
        })
    } , [])


    return (
        <div className="col-md-5 col-sm-12 shadow border p-3 mx-2">
    
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img src={event.img} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <h2>{event.title}</h2>
                    <h4>{event.price}</h4>
                    <div className="d-flex align-items-end justify-content-end">
                        <button onClick={ () => handleCancel(_id) }  className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleOrder;