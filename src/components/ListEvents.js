import React, {useState} from "react";
import {TableBody, TableCell, TableRow, Button} from "@material-ui/core";
import { AddMyEvents } from "./AddMyEvents";
import AddEventToMyEvents  from "../api/AddEventToMyEvents";
import { toast } from "react-toastify";

//ListEvents For Users 
function ListEvents(props) {

    const [isOpen, setOpen] = useState(false);
    const [clickedEventId, setClickedEventId] = useState("");

    const myEventApi = new AddEventToMyEvents();

    const myEvent = async (tc, id) => {
        const messageResponse= await myEventApi.addEventToMyEvents(tc ,id);
        if(messageResponse.messageType === "SUCCESS") {
            toast.success(messageResponse.message);
        }
        else {
            toast.error(messageResponse.message);
        }
    }

    return(
        <div style={{height:400, width:"%100", paddingLeft:250}}>
            <TableBody>
                <TableRow height="100">
                    <TableCell component="th" scope="row" ><strong>ID</strong></TableCell>
                    <TableCell width="250"><strong>Event Name</strong></TableCell>
                    <TableCell width="250"><strong>Start Date</strong></TableCell>
                    <TableCell width="250"><strong>Finish Date</strong></TableCell>
                    <TableCell width="250"><strong>Event Location</strong></TableCell>
                    <TableCell width="250"><strong>Maximum Number of People</strong></TableCell>
                    <TableCell width="250"><strong>Image</strong></TableCell>
                    <TableCell width="250"><strong>Add Button</strong></TableCell>
                </TableRow>
                {props.events.map(n => (
                    <TableRow key={n.id} height="100">
                        <TableCell component="th" scope="row">
                            {n.id}
                        </TableCell>
                        <TableCell width="200">{n.eventName}</TableCell>
                        <TableCell width="200">{n.startDate}</TableCell>
                        <TableCell width="200">{n.finishDate}</TableCell>
                        <TableCell width="200">{n.eventLocation}</TableCell>
                        <TableCell width="200">{n.number}</TableCell>
                        <TableCell width="200"><img width="100" height="100" src={n.imageURL} alt="" /></TableCell>
                        <TableCell width="250">
                            <Button disabled={!n.number} color="secondary" variant="contained" onClick={() => {setOpen(true); setClickedEventId(n.id);}}>Add to My Events</Button>
                            <AddMyEvents clickedEventId={clickedEventId} myEvent={myEvent} isOpen={isOpen} onClose={() => setOpen(false)}/> 
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </div>
    );
}

export default ListEvents;
