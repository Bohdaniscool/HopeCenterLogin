//hopecenterpasswordreset.js
import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, TextField, Button, Typography, Link, } from "@mui/material";
const Login=()=> {
    const paperStyle={
        padding: "30px",
        height: "70vh",
        width: 280,
        margin: "20px auto"
    }
    const paperStyle2={
        padding: "30px",
        height: "70vh",
        width: 280,
        margin: "20px auto"
    }
    const btnstyle={
        margin:"10px 0",
        borderRadius:"1px"
    }
    const textfield2={
        margin:"20px"
    }
    return(
        
         <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Typography
                color="#2a3eb1"
                >
                  <b>The</b>
                </Typography>
                <Typography
                color="#2a3eb1"
                >
                    <b>Hope Center</b>
                </Typography>
                <Typography>Forgot Password</Typography>
                <Grid align="center">

                </Grid>
                <Typography>‎‎‎‎‎‎‎‎‎‎</Typography>
        <TextField label="Username" fullWidth required></TextField>
        <Typography> ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎</Typography>
        <Button
                type="Submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                >
                    Reset Password
            </Button>
            
        </Paper>
        </Grid>
    )
}
export default Login;