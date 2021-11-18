import React from "react";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useForm } from "../../../hooc/useForm";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: 350,
      padding: 5,
      height: 240,
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

  const { reh, onChangeHandler, onSubmitHandler } = useForm();

  return (
    <Box
      component="form"
      className={classes.mainWrapper}
      sx={{
        "& > :not(style)": { m: 1, width: 340 },
      }}
      noValidate
      autoComplete="off"
    >
      <h3 className={classes.title}>Запланировать</h3>

      <div className={classes.root}>
        <label htmlFor="start" className={classes.label}>
          Дата
        </label>
        <TextField
          type="date"
          variant="standard"
          name="date"
          value={reh.date}
          className={classes.inputEvent}
          onChange={onChangeHandler}
        />
        <label htmlFor="start" className={classes.label}>
          Начало репетиции
        </label>
        <TextField
          type="time"
          variant="standard"
          name="start"
          value={reh.start}
          className={classes.inputEvent}
          onChange={onChangeHandler}
        />

        <label htmlFor="start" className={classes.label}>
          Окончание репетиции
        </label>
        <TextField
          type="time"
          variant="standard"
          name="end"
          value={reh.end}
          className={classes.inputEvent}
          onChange={onChangeHandler}
        />
      </div>

      <TextField
        label="Артист"
        variant="standard"
        name="title"
        value={reh.title}
        className={classes.inputEvent}
        onChange={onChangeHandler}
      />
      {/*<TextField*/}
      {/*  label="studio"*/}
      {/*  variant="standard"*/}
      {/*  name="studio"*/}
      {/*  value={reh.studio}*/}
      {/*  className={classes.inputEvent}*/}
      {/*  onChange={onChangeHandler}*/}
      {/*/>*/}
      <InputLabel id="demo-simple-select-label" className={classes.inputEvent}>
        выбрать студию
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={reh.studio}
        name="studio"
        onChange={onChangeHandler}
      >
        <MenuItem value={"A"}>студия А</MenuItem>
        <MenuItem value={"B"}>студия B</MenuItem>
        <MenuItem value={"C"}>студия C</MenuItem>
        <MenuItem value={"D"}>студия D</MenuItem>
      </Select>
      <TextField
        label="options"
        variant="standard"
        name="options"
        value={reh.options}
        className={classes.inputEvent}
        onChange={onChangeHandler}
      />
      <Button onClick={onSubmitHandler}>Submit</Button>
    </Box>
  );
};

export default Form;
