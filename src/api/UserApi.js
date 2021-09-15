import axios from "axios";
import React from "react";

class UserApi extends React.Component {

    async addUser(users) {
        const response = await axios.post("/users", users);
        return response.data;
    }
   
}

export default UserApi;