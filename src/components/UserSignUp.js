import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import { Grid, TextField, Button } from "@material-ui/core";
 
function UserSignUp(props) {

    const history = useHistory();
    
    async function handleSubmit(event) {
        try {
            history.push("/user-login");
        }
        catch (e) {
            alert(e.message);
        }
    }
    
    const [form, setForm] = useState({});

    const onFormChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newState = {...form};
        newState[field] = value;
        setForm(newState);
    }
        
    return(
        <div>
            <Grid container style={{ minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img 
                    src="https://skylineentertainment.net/wp-content/uploads/2020/03/purple-fireworks-effect-1190298-1.jpg"
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
                        <TextField onChange={onFormChange} name="name" label="Name" margin="normal" />
                        <TextField onChange={onFormChange} name="surname" label="Surname" margin="normal"/>
                        <TextField onChange={onFormChange} name="email" label="Email" margin="normal"/>
                        <TextField type="password" onChange={onFormChange} name="password" label="Password" margin="normal"/>
                        <TextField type="date" onChange={onFormChange} name="date" label="Birthday" InputLabelProps={{shrink: true,}} margin="normal"/>
                        <TextField onChange={onFormChange} name="tc" label="TC" margin="normal"/>
                        <TextField onChange={onFormChange} name="phone" label="Phone Number" margin="normal"/>
                        <Button color="primary" variant="contained" onClick={() => [props.addUser(form), handleSubmit()]}>Sign Up</Button>
                    </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    )
}

UserSignUp.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    phone: PropTypes.number,
    date: PropTypes.instanceOf(Date),
    tc: PropTypes.number
};

export default UserSignUp;