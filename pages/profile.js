import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { db } from "../firebase/firebase";
import styles from "../styles/application.module.css";
import { makeStyles } from "@material-ui/core";
import { storage } from "../firebase/firebase";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { message, Alert } from "antd";
import { Typography } from "@material-ui/core";
import "antd/dist/antd.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { blue } from "@material-ui/core/colors";
import { useSession, getSession } from "next-auth/react"


const useStyles = makeStyles({
    btn: {
      backgroundColor: "#0072a1",
      color: "white",
      marginTop: "7.9rem",
      "&:hover": {
        backgroundColor: "#0072a1",
      },
    },
  });


export default function Profile() {
    const classes = useStyles();
  const { data: session, status } = useSession()

  const db = getFirestore();
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [data, setData] = useState({
    fisrtName: "",
    lastName: "",
    tele: "",
    github:"",
    jobTItle:"",
    imageUrl: "",
  });

  const handleSubmits = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "profileApplications"), data)
      .then((docRef) => {
        console.log("Jobapplication added", docRef.id);

        setShowAlert(true);
      })
      .catch((error) => {
        console.error("Error occurred while adding profile", error);
      });
      console.log(data)
      // form.resetFields();
  };

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const storageRef = ref(storage, `image/${file.name}`);
        await uploadBytesResumable(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        console.log(downloadURL);
        setUrl(downloadURL);
        setData({ ...data, imageUrl: downloadURL });
        setFile(null);
        setLoading(false);
      };

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }

  return (
    <>
   

      <div className={styles.main}>
      <div>
        {showAlert && (
          <Alert
            type="success"
            message="Successful"
            description="Profile Application has been sent"
            style={{ backgroundColor: "#5cb85c" }}
            closable
          />
        )}
      </div>
      <div className={styles.mainForm}>
        <form
          onSubmit={handleSubmits}
          className={styles.form}
          autoComplete="off"
        >
          <h4 className={classes.heading}>Profile Application Form</h4>
          <input
            type="text"
            placeholder="FirstName"
            value={data.fisrtName}
            name="fisrtName"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="lastName"
            value={data.lastName}
            name="lastName"
            onChange={handleChange}
            required
          />
         

          <input
            type="text"
            placeholder="Telephone"
            value={data.tele}
            name="tele"
            onChange={handleChange}
            required
          />

<input
            type="text"
            placeholder="Github Handle"
            value={data.github}
            name="github"
            onChange={handleChange}
            required
          />

<select value={data.jobTItle} name="jobTItle" onChange={handleChange} required>
            <option value="" disabled selected>
              Job title
            </option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Fullstack</option>
            <option>UI/UX</option>
          </select>

          {/* <input
            type="text"
            placeholder="JobTitle"
            value={data.jobTItle}
            name="jobTItle"
            onChange={handleChange}
          /> */}

          <button
            className={styles.btn}
            color="primary"
            variant="outlined"
            type="submit"
          >
            Apply
          </button>
        </form>

        {!url && (
          <form onSubmit={handleSubmit} className={styles.form2}>
            <div>
              <label>Upload CV</label>
              <input
                type="file"
                required
                label="CV Upload"
                className="form-control-file"
                name="imageUrl"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mb-2"
              disabled={loading}
              
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </form>
        )}
{/* 
        {url && (
          <Link href={url}>
            <a target="_blank">
              <input className={styles.url} type="text" value={url} readOnly />
            </a>
          </Link>
        )} */}

      </div>
    </div>

    </>
  )
}
