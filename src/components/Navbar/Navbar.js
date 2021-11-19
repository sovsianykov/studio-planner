import React from 'react';
import {AppBar} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import theme from "../../constants/theme";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: "100%",
            display: "flex",
            height:70,
            flexDirection: "column",
            alignContent: "center",
            justifyContent : "center",
            textAlign: "center",
            fontSize:"20px",
            letterSpacing: 1.2,
            background: theme.palette.primary.light
        },
    })
);
const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar  className={classes.root} >
            Планировщик репетиций
        </AppBar>
    );
};

export default Navbar;