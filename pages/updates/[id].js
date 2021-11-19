import React, { useState } from "react";
import FlagIcon from "@material-ui/icons/Flag";
import { Button, Typography } from "@material-ui/core";
import { message, Alert } from "antd";
import "antd/dist/antd.css";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { db } from "./../../firebase/firebase";
import styles from "./../../styles/myClass.module.css";
import profileStyles from "../../styles/profile.module.css";
import { storage } from "../../firebase/firebase";
import Link from "next/link";
import Head from "next/head";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function edits({ info }) {
  const [showAlert, setShowAlert] = useState(false);
  const [update, setUpdate] = useState(info);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => setUpdate({ ...update, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileRef = doc(db, "profileApplications", info.id);
    await updateDoc(profileRef, update);
    setShowAlert(true);
    console.log("updated");
  };

  const handleSubmits = async (e) => {
    e.preventDefault();
    setLoading(true);
    const storageRef = ref(storage, `image/${file.name}`);
    await uploadBytesResumable(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    console.log(downloadURL);
    setUrl(downloadURL);
    setUpdate({ ...update, imageUrl: downloadURL });
    setFile(null);
    setLoading(false);
  };

  return (
    <div>
      <Head>{info.firstName} | Edit Profile</Head>

      <div className={styles.myClassSection}>
        <div className={styles.myClassBorder}>
          <div className={styles.projectSection}>
            <div className={styles.projectHeader1}>
              <h3>PROFILE UPDATE</h3>
            </div>
            <div>
              {showAlert && (
                <Alert
                  type="success"
                  message="Successful"
                  description="Profile Updated"
                  style={{ backgroundColor: "#5cb85c" }}
                  closable
                />
              )}
            </div>
            <div className={styles.projectHeader2}>
              <div className={styles.projectHeaderSec1}>
                <div>
                  <div className={profileStyles.container}>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label>FirstName</label>
                        <input name="fisrtName" value={update.fisrtName} onChange={handleChange} />
                      </div>
                      <div>
                        <label>LastName</label>
                        <input name="lastName" value={update.lastName} onChange={handleChange} />
                      </div>
                      <div>
                        <label>Telephone Number</label>
                        <input
                          type="text"
                          value={update.tele}
                          name="tele"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label>Github Handle</label>
                        <input
                          type="text"
                          value={update.github}
                          name="github"
                          onChange={handleChange}
                        />
                      </div>
                       
                      <button
                        className={profileStyles.editbtn}
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        submit
                      </button>
                           {" "}
                    </form>
                  </div>
                </div>
              </div>
              <div className={styles.projectHeaderSec2}>
                {!url && (
                  <form onSubmit={handleSubmits}>
                    <input
                      type="file"
                      name="imageUrl"
                      value={update.lmageUrl}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button type="submit" className="btn btn-primary mb-2" disabled={loading}>
                      {loading ? "Uploading..." : "Upload"}
                    </button>
                    <span>Avatar </span>
                    <img
                      src={info.imageUrl}
                      className={styles.pic}
                      width="250"
                      height="200"
                      unoptimized="true"
                    />
                                                             
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const docRef = doc(db, "profileApplications", context.params.id);
  const docSnap = await getDoc(docRef);
  const info = { id: docSnap.id, ...docSnap.data() };
  return {
    props: {
      info,
    },
  };
};

export async function getStaticPaths() {
  let data = [];
  const projects = await getDocs(collection(db, "profileApplications"));
  projects.forEach((doc) => {
    return data.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  const paths = data.map((dt) => ({
    params: { id: dt.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default edits;
