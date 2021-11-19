import React from 'react';
import {createStyles, makeStyles} from "@mui/styles";
import Cell from "../Cell/Cell";

const useStyles = makeStyles(() =>
    createStyles({
        root : {
            background:"firebrick"
        }
    }))

const DayHeader = () => {
    const classes = useStyles()
    return (
        <thead className={classes.root}>
            <tr>
              <td><Cell isGray={true}/></td>
              <th><Cell isGray={true}>WR</Cell></th>
              <th><Cell isGray={true}>MR</Cell></th>
              <th><Cell isGray={true}>CR</Cell></th>
              <th><Cell isGray={true}>LR</Cell></th>
            </tr>
        </thead>
    );
};

export default DayHeader;
