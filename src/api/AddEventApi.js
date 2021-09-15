import axios from "axios";
import React from "react";

class AddEventApi extends React.Component {

    async addEvent(event) {
        const response = await axios.post("/events", event);
        return response.data;
    }
   
}

export default AddEventApi;