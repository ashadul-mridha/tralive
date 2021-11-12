import axios from 'axios';
import React , {useEffect, useState} from 'react';

const ManageEvent = () => {

    const [orders , setOrders] = useState([]);

    useEffect( () => {
        fetch('https://afternoon-castle-32125.herokuapp.com/orders')
        .then( res => res.json())
        .then( data => {
            console.log(data);
            setOrders(data)
        })

    } , [])

    const handleDelete = (id) => {
        const aggree = window.confirm('Are You Sure Cancel This Tour');
        if(aggree){
            axios.delete(`https://afternoon-castle-32125.herokuapp.com/order/${id}`)
            .then( res => {
                console.log(res);
                if(res.status === 200){
                    const currentOrders = orders.filter( order => order._id !== id);
                    setOrders(currentOrders);
                }
            })
        }else{
            alert('oops Something rong')
        }
        // alert(id);
    }

    return (
        <div className="container">
            <div className="bg-warning py-4 px-2">
                <h1 className="text-white"> Manage Order </h1>
            </div>
            <div className="row my-5">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map( (order) => {
                                return (
                                    <tr key={order._id}>
                                        <th>{order.name}</th>
                                        <th>{order.phone}</th>
                                        <th>{order.address}</th>
                                        <th> 
                                            <i onClick={ () => handleDelete(order._id)} className="fas fa-trash-alt fa-lg text-danger"></i>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageEvent;