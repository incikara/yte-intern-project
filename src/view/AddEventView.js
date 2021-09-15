import React from "react";
import AddEvent from "../components/AddEvent";
import AddEventApi from "../api/AddEventApi";
import { toast } from "react-toastify";


function AddEventView() {

    const eventApi = new AddEventApi();
    
    const addEvent = async (form) => {
        const messageResponse = await eventApi.addEvent(form);
        if(messageResponse.messageType === "SUCCESS") {
            toast.success(messageResponse.message);
        }
        else {
            toast.error(messageResponse.message);
        }
    }

    return(
        <div>
            <AddEvent addEvent={addEvent}/>
        </div>
    )
}

export default AddEventView;