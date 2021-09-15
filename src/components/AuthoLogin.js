import React, {useState} from "react";
import PropTypes from "prop-types";
import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";
import {AccountCircle, LockRounded } from "@material-ui/icons";

function AuthoLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }
    return (
        <div>
           <Grid container style={{ minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img 
                    src="https://media.wired.co.uk/photos/606d9a5087b15dc95f9cc2a6/master/w_1600%2Cc_limit/wired-theatre.jpg"
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
                        <TextField onChange={handleEmail} label="Email" margin="normal" InputProps={{startAdornment: <InputAdornment><AccountCircle/></InputAdornment>}} />
                        <TextField onChange={handlePassword} type="password" label="Password" margin="normal"  InputProps={{startAdornment: <InputAdornment><LockRounded/></InputAdornment>}} />
                        <Button color="primary" variant="contained">Log In</Button>
                    </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    )
}

AuthoLogin.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string
};

export default AuthoLogin;