import React, {useState} from "react";
import PropTypes from "prop-types";
import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";
import {AccountCircle, LockRounded } from "@material-ui/icons";

function UserLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmail(event) {
        setEmail(event.target.value);
        console.log(email);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
        console.log(password);
    }


    return(
        <div>
            <Grid container style={{ minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Grace_in_winter%2C_contemporary_ballet.jpg"
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

    /*return (
        <div className="user-login">
            <div className="userlogin-block">
                <div className="userlogin-entry">
                        email: <input value={email} onChange={handleEmail}/>
                </div>
                <div className="userlogin-entry">
                    password: <input type="password" value={password} onChange={handlePassword}/>
                </div>
                <div className="userlogin-entry">
                    <button>Login</button>
                </div>
            </div>
        </div>
    )*/
}

UserLogin.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string
};

export default UserLogin;