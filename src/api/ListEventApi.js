import axios from "axios";
import React from "react";

class ListEventApi extends React.Component {

    async getEvents() {
        const response = await axios.get("/events");
        return response.data;
    }
}

export default ListEventApi;