import React, {useState} from 'react';
import PropTypes from "prop-types";
import { Grid, TextField, Button } from "@material-ui/core";

function AddEvent(props) {

    const [form, setForm] = useState({});

    const onFormChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newState = {...form};
        newState[field] = value;
        setForm(newState);
    }

    return (
        <div>
              <Grid container style={{ minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img 
                    src="https://mediacat.com/wp-content/uploads/2017/05/konser.jpg"
                    alt="" 
                    style={{ width: '100%', height:'100%', objectFit: 'cover'}} 
                    />
                </Grid>
                <Grid 
                container
                item 
                xs={12} 
                sm={6} 
                alignItems="center" 
                direction="column" 
                justify="space-between"
                style={{ padding: 10 }} >
                    <div />
                    <div style={{ display: 'flex', flexDirection: "column", maxWidth: "400", minWidth: "300"}}>
                        <TextField onChange={onFormChange} name="eventName" label="Event Name" margin="normal" />
                        <TextField type="date" onChange={onFormChange} name="startDate" label="Start Date" InputLabelProps={{shrink: true,}} margin="normal"/>
                        <TextField type="date" onChange={onFormChange} name="finishDate" label="Finish Date" InputLabelProps={{shrink: true,}} margin="normal"/>
                        <TextField onChange={onFormChange} name="eventLocation" label="Event Location" margin="normal"/>
                        <TextField onChange={onFormChange} name="number" label="Maximum People Number" margin="normal"/>
                        <TextField onChange={onFormChange} name="imageURL" label="Image URL" margin="normal"/>
                        <Button color="primary" variant="contained" onClick={() => props.addEvent(form)}>Add Event</Button>
                    </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    )
}

AddEvent.propTypes = {
    eventName: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    finishDate: PropTypes.instanceOf(Date),
    eventLocation: PropTypes.string,
    number: PropTypes.number
};
export default AddEvent;