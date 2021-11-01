import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

import styles from "../styles/application.module.css";
import { makeStyles } from "@material-ui/core";

import { collection, addDoc, getFirestore } from "firebase/firestore";
import { message, Alert } from "antd";
import "antd/dist/antd.css";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#0072a1",
    color: "white",
    marginTop: "1rem",
    "&:hover": {
      backgroundColor: "#0072a1",
    },
  },
});

function Jobapplication() {
  const classes = useStyles();

  return (
    <div className={styles.main}>
      <form className={styles.form}>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Github" />
        <input type="file" placeholder="Your CV" />
        <Button className={classes.btn} variant="contained">
          Apply
        </Button>
      </form>
    </div>
  );
}

export default Jobapplication;
