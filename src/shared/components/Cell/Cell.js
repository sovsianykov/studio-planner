import React, {useCallback, useMemo, useState} from 'react';
import {createStyles, makeStyles} from "@mui/styles";
import cn from "classnames"

const useStyles = makeStyles(() =>
    createStyles({
        grey : {
            width: 55,
            height: 30,
            background : "#CCC",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            transaction: '.3s ease-in-out',
            cursor:"pointer",
            textAlign: 'center',
            padding: 5,
            fftSize: "20px",
            lineHeight: "30px",

        },
        busy : {
            width: 55,
            height: 30,
            background : "#f10808",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            transaction: '.3s ease-in-out',
            cursor:"pointer",
            padding: 5,
            fftSize: "20px",
            lineHeight: "30px",
        },
    reserved:   {
        width: 55,
        height: 30,
        background : "#ece340",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        transaction: '.3s ease-in-out',
        cursor:"pointer",
        padding: 5,
        fftSize: "20px",
        lineHeight: "30px",
    },
        free :   {
            width: 55,
            height: 30,
            background : "#53d91e",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            transaction: '.3s ease-in-out',
            cursor:"pointer",
            padding: 5,
            fftSize: "20px",
            lineHeight: "30px",
        }
    })
);






const Cell = ({isGray, children}) => {
    const classes = useStyles()
    const [ status , setStatus ] = useState('free')
    const classNames = useMemo(() => cn({
         [classes.grey]: isGray,
         [classes.free]: (status === 'free')&&(!isGray) ,
         [classes.reserved]: (status === 'reserved')&&(!isGray) ,
         [classes.busy]: (status === 'busy')&&(!isGray),
    }),[classes.busy, classes.free, classes.grey, classes.reserved, isGray, status])

    const onClickHandler = useCallback(() =>{
        if (status === 'free') setStatus('reserved')
        if (status === 'reserved') setStatus('busy')
        if (status === 'busy') setStatus('free')
    },[status, setStatus])

    return (
        <div className={classNames} onClick={onClickHandler}>
            {children}
        </div>
    );
};

export default Cell;
