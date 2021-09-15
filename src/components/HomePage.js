import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page"> 
                 <Grid container style={{ minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img 
                    src="https://wallpapercave.com/wp/wp4852095.jpg"
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
                        <h1>MyTicket</h1>
                        <p></p>
                    </div>
                    <div />
                </Grid>
            </Grid>
            </div>
        );
    }
}

export default HomePage;