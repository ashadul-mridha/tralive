import axios from 'axios';
import React , {useState , useEffect} from 'react';
import useAuth from '../../../hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';

const MyEvent = () => {

    //auth 
    const {user} = useAuth();

    const [orders , setOrders] = useState([]);

    useEffect( () => {
        fetch('https://afternoon-castle-32125.herokuapp.com/orders')
        .then( res => res.json())
        .then( data => {
            setOrders(data);
        })
    } , []);

    const handleCancel = (_id) => {
        const aggree = window.confirm('Are You Sure Want To Delete');
        if(aggree){
            // alert(_id)
            axios.delete(`https://afternoon-castle-32125.herokuapp.com/order/${_id}`)
            .then( res => {
                if(res){
                    console.log(res.status === 200);
                    // setEvent({});
                    // window.location.reload();
                    // setIsRemove(true)
                    // console.log(res);
                    const currentOrders = orders.filter( order => order._id !== _id);
                    setOrders(currentOrders);
                }
            })
        }else{

        }
        
    }


    const myOrder = orders.filter( order => order.email === user.email );

    return (
            <div className="container my-5">
                <div className="bg-warning py-4 px-2">
                    <h1 className="text-white"> My Order </h1>
                </div>
                <div className="row g-4 justify-content-center">
                    {
                        myOrder.map( order => <SingleOrder handleCancel={handleCancel} key={order._id} data={order}></SingleOrder> )
                    }
                </div>
            </div>
    );
};

export default MyEvent;