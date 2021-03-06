import React from "react";
import Calendar from "react-awesome-calendar";
import { Box, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { initialRehearsal } from "../../../content";

const events = [
  {
    id: 1,
    color: "#fd3153",
    from: "2019-05-02T18:00:00+00:00",
    to: "2019-05-05T19:00:00+00:00",
    title: "This is an event",
  },
  {
    id: 2,
    color: "#1ccb9e",
    from: "2019-05-01T13:00:00+00:00",
    to: "2019-05-05T14:00:00+00:00",
    title: "This is another event",
  },
  {
    id: 3,
    color: "#3694DF",
    from: "2019-05-05T13:00:00+00:00",
    to: "2019-05-05T20:00:00+00:00",
    title: "This is also another event",
  },
];

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      marginTop: 100,
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
    },
  })
);

const MyCalendar = ({ list }) => {
  // const rehLst = list.map((el, i, arr) => {
  //   (rehLst[i].from = el.fromTime),
  //       (rehLst[i].to = el.toTime);
  //       (rehLst[i].color = el.color);t
  //       return arr
  // });
  console.log(list)
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h5" align="center" marginTop="50px">

      </Typography>
      <Calendar events={list} />
    </Box>
  );
};

export default MyCalendar;
