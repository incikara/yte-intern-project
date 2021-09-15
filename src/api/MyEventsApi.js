import axios from "axios";
import React from "react";

class MyEventsApi extends React.Component {

    async getMyEvents() {
        const response = await axios.get("/userEvents");
        return response.data;
    }
}

export default MyEventsApi;
