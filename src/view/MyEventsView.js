import React, { useEffect, useState } from "react";
import MyEvents from "../components/MyEvents";
import MyEventsApi from "../api/MyEventsApi";

function MyEventsView() {

    const myEventsApi = new MyEventsApi();
    
    const [events, setEvents] = useState([]);


    useEffect(() => {
        myEventsApi.getMyEvents()
            .then(data => setEvents(data));
    }, []);

    return(
        <div>
            <MyEvents events={events}/>
        </div>
    )
}

export default MyEventsView;