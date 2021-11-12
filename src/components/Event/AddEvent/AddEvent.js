import React, { useRef } from 'react';
import axios from 'axios';

const AddEvent = () => {

    const titleRef = useRef('');
    const descRef = useRef('');
    const imgRef = useRef('');
    const priceRef = useRef('');

    const handleSubmit = e => {

        let title = titleRef.current.value;
        let desc = descRef.current.value;
        let img = imgRef.current.value;
        let price = priceRef.current.value;

        const data ={
            title,
            desc,
            img,
            price
        }

        axios.post('https://afternoon-castle-32125.herokuapp.com/add-event',data)
        .then( res => {
            if(res){
                alert('Event Added Successfull');
                e.target.reset();
            }else{
                alert('Event Not Added');
            }
            
        })

        // console.log('submited',data);
        e.preventDefault();
    }
    return (
        <div className="container my-5">
            <h2 className="text-warning">Add New Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="row my-3">
                    <div className="col-md-6 col-sm-12">
                        <label className="fw-bold" htmlFor="title">Event Title</label>
                        <input ref={titleRef} type="text" name="title" id="title" className="form-control" placeholder="Enter Event" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <label className="fw-bold" htmlFor="img">Upload Img Link</label>
                        <input ref={imgRef} type="text" id="img" name="img" className="form-control" placeholder="Upload Image Link" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6 col-sm-12">
                        <label className="fw-bold" htmlFor="desc">Event Description</label>
                        <textarea ref={descRef} type="text" id="desc" name="desc" className="form-control" placeholder="Enter Description" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <label className="fw-bold" htmlFor="price">Price</label>
                        <input ref={priceRef} type="number" id="price" name="price" className="form-control" placeholder="Enter Price" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-12 col-sm-12 align-self-end text-end">
                        <input type="submit" value="submit" className="btn btn-primary" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddEvent;