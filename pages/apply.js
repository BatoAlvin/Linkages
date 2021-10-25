import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

import styles from "../styles/application.module.css";
import { withStyles } from "@material-ui/core/styles";

import { collection, addDoc, getFirestore } from "firebase/firestore";
import { message, Alert } from "antd";
import "antd/dist/antd.css";

const CustomButton = withStyles({
  root: {
    backgroundColor: "#0072a1",
    border: 0,
    borderRadius: 3,
    color: "white",
    padding: "7px 15px",
    fontWeight: "normal",
    marginTop: "1rem",
  },
})((props) => <Button {...props} />);

function Jobapplication() {
  return (
    <div className={styles.main}>
      <form className={styles.form}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Github" />
        <input type="file" placeholder="Your CV" />
        <CustomButton variant="contained" color="primary">
          Apply
        </CustomButton>
      </form>
    </div>
  );
}

export default Jobapplication;
