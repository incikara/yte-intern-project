import React, {useState} from "react";
import {TableBody, TableCell, TableRow, Button} from "@material-ui/core";

function MyEvents(props) {
    return (
        <div style={{height:400, width:"%100", paddingLeft:250}}>
            <TableBody>
                <TableRow height="100">
                    <TableCell component="th" scope="row" ><strong>ID</strong></TableCell>
                    <TableCell width="250"><strong>Your TC</strong></TableCell>
                    <TableCell width="250"><strong>Event Name</strong></TableCell>
                    <TableCell width="250"><strong>Start Date</strong></TableCell>
                    <TableCell width="250"><strong>Finish Date</strong></TableCell>
                    <TableCell width="250"><strong>Event Location</strong></TableCell>
                    <TableCell width="250"><strong>Maximum Number of People</strong></TableCell>
                    <TableCell width="250"><strong>Image</strong></TableCell>
                </TableRow>
                {props.events.map(n => (
                    <TableRow key={n.id} height="100">
                        <TableCell component="th" scope="row">
                            {n.id}
                        </TableCell>
                        <TableCell width="200">{n.tc}</TableCell>
                        <TableCell width="200">{n.eventName}</TableCell>
                        <TableCell width="200">{n.startDate}</TableCell>
                        <TableCell width="200">{n.finishDate}</TableCell>
                        <TableCell width="200">{n.eventLocation}</TableCell>
                        <TableCell width="200">{n.number}</TableCell>
                        <TableCell width="200"><img width="100" height="100" src={n.imageURL} alt="" /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </div>
    );
}

export default MyEvents;