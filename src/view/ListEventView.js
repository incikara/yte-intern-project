import React, { useEffect, useState } from "react";
import ListEvents from "../components/ListEvents";
import ListEventApi from "../api/ListEventApi";

function ListEventView() {

    const eventApi = new ListEventApi();
    
    const [events, setEvents] = useState([]);


    useEffect(() => {
        eventApi.getEvents()
            .then(data => setEvents(data));
    }, []);

    return(
        <div>
            <ListEvents events={events}/>
        </div>
    )
}

export default ListEventView;