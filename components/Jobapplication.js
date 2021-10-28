import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from "../styles/myClass.module.css";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
//import { db } from "../firebase/firebase";
import { db } from "../firebase/firebase";
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
  const db = getFirestore();
  const [showAlert, setShowAlert] = useState(false);

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const [data, setData] = useState({
    name: "",
    email: "",
    github: "",
    fileUpload: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "job_application"), data)
      .then((docRef) => {
        console.log("Application added", docRef.id);
        setInterval(() => {
          setShowAlert(true);
        });
      })
      .catch((error) => {
        console.error("Error occurred while adding profile", error);
      });
  };

  const [open, setOpen] = React.useState(false);

  //Handling change for each input field
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={styles.messagesContainer}>
        <div>
          {showAlert && (
            <Alert
              type="success"
              message="Successful"
              description="Application has been sent"
              style={{ backgroundColor: "#5cb85c" }}
              closable
            />
          )}
        </div>
        <CustomButton
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
        >
          Apply
        </CustomButton>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Apply for Job</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Github"
              type="text"
              name="Github"
              value={data.github}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Cv Upload"
              type="file"
              name="FileUpload"
              value={data.fileUpload}
              onChange={handleChange}
              fullWidth
            />

            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" type="submit">
              Apply
            </Button>
          </form>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}

export default Jobapplication;
