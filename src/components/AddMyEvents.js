import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button} from "@material-ui/core";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import QRCode from "qrcode";

export function AddMyEvents(props) {

    const history = useHistory();

    async function handleAdd(event) {
        try {
            history.push("/");
        }
        catch (e) {
            alert(e.message);
        }
    }

    const [tc, setTc] = useState("");
    const [email, setEmail] = useState("");
    const[src, setSrc] = useState("");

    function handleTc(event) {
        setTc(event.target.value);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handleGenerate(email) {
        QRCode.toDataURL(email).then((data) => {
            setSrc(data);
        })
    }


    return (
        <Dialog open={props.isOpen} onClose={props.onClose}>
            <DialogTitle><strong>Add Event</strong></DialogTitle>
            <DialogContent style={{ display: 'flex', flexDirection: "column", maxWidth: "400", minWidth: "300"}}>
                <TextField onChange={handleTc} name="tc" label="Your TC"/>
                <TextField onChange={handleEmail} name="email" label="Email"/>
                <Button color="secondary" variant="contained" onClick={() => handleGenerate(email)}>Generate</Button>
                <img src={src} alt="QR Code" />
                {console.log(src)}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="secondary">Back</Button>
                <Button onClick={() => {props.myEvent(tc, props.clickedEventId); handleAdd();}} color="secondary">Add</Button> 
            </DialogActions>
        </Dialog>
    );
}