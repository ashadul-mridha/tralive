import React , {useState , useEffect} from 'react';
import SingleEvent from '../../Shared/SingleEvent/SingleEvent';
import './Event.css';

const Event = () => {

    let [events , setEvents] = useState([]);
    

    useEffect( () => {
        fetch('https://afternoon-castle-32125.herokuapp.com/events')
        .then(res => res.json())
        .then( data => {
            setEvents(data);
        })
    } , [])

    events = events?.slice(0,6);

    return (
        <div className="container">

            <div className="d-flex flex-column align-items-center section-header mt-5 mb-5">
                <h5 className="text-info">Check Our Best Promotional Tour</h5>
                <h2>Upcoming Events</h2>
            </div>

            <div className="row mt-3 gx-4 gy-3">

                {
                    events?.map( event => <SingleEvent data={event} key={event._id}></SingleEvent> )
                }
            </div>

        </div>
    );
};

export default Event;