import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { eventList } from "../../../content";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: 350,
      padding: 5,
      height: 180,
      marginTop: 20,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      boxShadow: "0 0 5px #ccc",
    },

    title: {
      textAlign: "center",
      letterSpacing: 1.9,
    },
    mainWrapper: {
      minWidth: 350,
      minHeight: 600,
      // padding: `${theme.spacing(3)}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    inputEvent: {
      width: 320,
      marginTop: 10,
      fontWeight: 600,
      selfSize: "20px",
      padding: 5,
      display: "block",
    },
    label: {
      alignSelf: "flex-start",
      marginLeft: 25,
      marginTop: "10px ",
      fontSize: "18px",
      color: theme.palette.secondary.light,
    },
  })
);

const Form = () => {
  const classes = useStyles();
  const [reh, setReh] = useState(eventList[0]);
  // const [list, setList] = useState([]);
  console.log(reh);

  const onChangeHandler = (e) => {
    setReh((reh) => ({ ...reh, [e.target.name]: e.target.value }));
  };
  // const onSubmitHandler = async (e) => {
  //     e.preventDefault();
  //     setList((list) => list.push(evnt))
  //
  //
  // };
  return (
    <Box
      component="form"
      className={classes.mainWrapper}
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <h3 className={classes.title}>Запланировать</h3>

      <div className={classes.root}>
        <label htmlFor="start" className={classes.label}>
          Начало
        </label>
        <TextField
          type="time"
          variant="standard"
          name="fromTime"
          value={reh.fromTime}
          className={classes.inputEvent}
          onChange={onChangeHandler}
        />
        <TextField
          type="date"
          variant="standard"
          name="fromDate"
          value={reh.fromDate}
          className={classes.inputEvent}
          onChange={onChangeHandler}
        />
      </div>
      <div className={classes.root}>
        <label htmlFor="start" className={classes.label}>
          Окончание
        </label>

        <TextField
          type="time"
          variant="standard"
          name="toTime"
          value={reh.to}
          className={classes.inputEvent}
          onChange={onChangeHandler}
        />
        <TextField
          type="date"
          variant="standard"
          name="toDate"
          value={reh.to}
          className={classes.inputEvent}
          onChange={onChangeHandler}
        />
      </div>
      <TextField
        label="title"
        variant="standard"
        name="title"
        value={reh.title}
        className={classes.inputEvent}
        onChange={onChangeHandler}
      />
      <TextField
        label="options"
        variant="standard"
        name="options"
        value={reh.options}
        className={classes.inputEvent}
        onChange={onChangeHandler}
      />
      {/*<Button onClick={onSubmitHandler}>Submit</Button>*/}
    </Box>
  );
};

export default Form;
