import axios from "axios";
import React from "react";

class AddEventToMyEvents extends React.Component {

    async addEventToMyEvents(tc, id) {
        const response = await axios.post("/events/" + tc + "/" + id );
        console.log(response);
        return response.data;
    }
}

export default AddEventToMyEvents;

