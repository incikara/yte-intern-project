import React from "react";
import UserSignUp from "../components/UserSignUp";
import UserApi from "../api/UserApi";
import { toast } from "react-toastify";


function UserView() {

    const userApi = new UserApi();
    
    const addUser = async (form) => {
        const messageResponse = await userApi.addUser(form);
        if(messageResponse.messageType === "SUCCESS") {
            toast.success(messageResponse.message);
        }
        else {
            toast.error(messageResponse.message);
        }
    }

    return(
        <div>
            <UserSignUp addUser={addUser}/>
        </div>
    )
}

export default UserView;