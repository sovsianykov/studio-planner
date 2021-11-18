import React from 'react';
import {createStyles, makeStyles} from "@mui/styles";
import Cell from "../Cell/Cell";

const useStyles = makeStyles(() =>
    createStyles({
        root : {
            width: 366,
            height: 34,
            display: "flex",
            justifyContent:'space-between',
            alignItems:"center",
            background:"firebrick"
        }
    }))

const DayHeader = () => {
    const classes = useStyles()
    return (
        <section className={classes.root}>
          <Cell isGray={true}></Cell>
          <Cell isGray={true}>br</Cell>
          <Cell isGray={true}>wr</Cell>
          <Cell isGray={true}>rh</Cell>
          <Cell isGray={true}>whh</Cell>
        </section>
    );
};

export default DayHeader;
