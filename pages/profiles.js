import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import styles from "../styles/myClass.module.css";
import Head from "next/head";
import Link from "next/link";
import { db } from "../firebase/firebase";

import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";

function Work() {
  const db = getFirestore();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const [data, setData] = useState({
    name: "",
    title: "",
    github: "",
    article: "",
    file: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "lms_work"), data)
      .then((docRef) => {
        console.log("Project added", docRef.id);
      })
      .catch((error) => {
        console.error("Error occurred while adding project", error);
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
          <h1> EDU LEARNING COMMUNITY</h1>
          <h3>Welcome!!! </h3>
          <h3>To create your profile simply click the button below, 🙂 </h3>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Add Profile
          </Button>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Profile</DialogTitle>
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
              label="Project title"
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Github link"
              name="github"
              value={data.github}
              onChange={handleChange}
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Article link(Optional)"
              name="article"
              value={data.article}
              onChange={handleChange}
              type="text"
              fullWidth
            />

            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="File upload"
            name="file"
            value={data.file}
            onChange={handleChange}
            type="file"
            fullWidth
          />

            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" type="submit">
              Add
            </Button>
          </form>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}

export default Work;
