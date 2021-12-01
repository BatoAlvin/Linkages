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
import { useSession, getSession } from "next-auth/react"

export default function Updates({ info }) {
  const { data: session, status } = useSession()
  const [showAlert, setShowAlert] = useState(false);
  const [update, setUpdate] = useState(info);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => setUpdate({ ...update, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileRef = doc(db, "far", info.id);
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


  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }

  return (
    <>
 

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
            <div className= "d-flex justify-content-center flex-column  m-5" >
              <div className={styles.projectHeaderSec1}>
                <div>
                  <div className={profileStyles.container}>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-2">
                        <label  className="form-label">FirstName : </label>
                        <input name="fisrtName" className={styles.input} value={update.fisrtName} onChange={handleChange} />
                      </div>
                      <div className="mb-2">
                        <label className="form-label">LastName :</label>
                        <input name="lastName" value={update.lastName} onChange={handleChange} />
                      </div>
                      <div>
                        <label>Telephone Number :</label>
                        <input
                          type="text"
                          value={update.tele}
                          name="tele"
                          onChange={handleChange}
                        />
                      </div>


                      <div>
                        <label>Email :</label>
                        <input
                          type="email"
                          value={update.email}
                          name="email"
                          onChange={handleChange}
                        />
                      </div>


                      <div>
                        <label>Resume :</label>
                        <input
                          type="text"
                          value={update.resume}
                          name="resume"
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label>Bio</label>
                        <textarea
                          type="text"
                          value={update.bio}
                          name="bio"
                          onChange={handleChange}
                        />
                      </div>


          <div className="mb-2 d-flex flex-wrap">
          <label className="form-label">JobTitle</label>
          <select
            className="form-select form-select-sm "
            aria-label=".form-select-sm example"
            name="jobTItle"
            value={update.jobTItle} 
             onChange={handleChange}
          
          >
            <option value="" disabled selected>
              JobTitle
            </option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
            <option>Dev Ops</option>
          </select>
        </div>


        <div className="mb-2 d-flex flex-wrap">
          <label className="form-label">Status</label>
          <select
            className="form-select form-select-sm "
            aria-label=".form-select-sm example"
            name="status"
            value={update.status}  
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Status
            </option>
            <option>Intern</option>
            <option>Volunteer</option>
            <option>Part time Employed</option>
            <option>Permanent Employed</option>
          </select>
        </div>

        <h5 className="h5 text-secondary mx-5">Technical Skills</h5>
        <div className="d-flex flex-wrap">
          <div className="mb-2 w-25 m-1">
          <select
            className="form-select form-select-sm "
            aria-label=".form-select-sm example"
            name="part1"
            value={update.part1}  
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Status
            </option>
            <option value="None">None</option>
              <option value="Html">HTML</option>
              <option value="Css">CSS</option>
              <option value="React">React</option>
              <option value="Javascript">Java Script</option>
          </select>
        </div>
                      


        <div className="mb-2 w-25 m-1">
          <select
            className="form-select form-select-sm "
            aria-label=".form-select-sm example"
            name="part2"
            value={update.part2}  
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="None">None</option>
              <option value="Html">HTML</option>
              <option value="Css">CSS</option>
              <option value="React">React</option>
              <option value="Javascript">Java Script</option>
          </select>
        </div>


        <div className="mb-2 d-flex flex-wrap">
          <select
            className="form-select form-select-sm "
            aria-label=".form-select-sm example"
            name="part3"
            value={update.part3}  
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="None">None</option>
              <option value="Html">HTML</option>
              <option value="Css">CSS</option>
              <option value="React">React</option>
              <option value="Javascript">Java Script</option>
          </select>
        </div>
     </div>
     <h5 className="h5 text-secondary mx-5">Other Skills</h5>
     <div className="d-flex flex-wrap" >
        <div className="mb-2 w-25 m-1">
          
          <select
            className="form-select form-select-sm "
            aria-label=".form-select-sm example"
            name="part4"
            value={update.part4}  
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="None">None</option>
              <option value="Nodejs">Node JS</option>
              <option value="Express">Express</option>
              <option value="Sql">SQL</option>
              <option value="Mongoose">Mongoose</option>
          </select>
        </div>
        


        <div className="mb-2 w-25 m-1">
          <select
            className="form-select form-select-sm "
            aria-label=".form-select-sm example"
            name="part5"
            value={update.part5}  
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="None">None</option>
              <option value="Nodejs">Node JS</option>
              <option value="Express">Express</option>
              <option value="Sql">SQL</option>
              <option value="Mongoose">Mongoose</option>
          </select>
        </div>


        <div className="mb-2 w-25 m-1">
          <select
            className="form-select form-select-sm "
            aria-label=".form-select-sm example"
            name="part6"
            value={update.part6}  
            onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="None">None</option>
              <option value="Nodejs">Node JS</option>
              <option value="Express">Express</option>
              <option value="Sql">SQL</option>
              <option value="Mongoose">Mongoose</option>
          </select>
        </div>
</div>

                       
                      <button
                        className={profileStyles.editbtn}
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        Update
                      </button>
                           {" "}
                    </form>
                  </div>
                </div>
              </div>
              {/* <div className={styles.projectHeaderSec2}>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}

export const getStaticProps = async (context) => {
  const docRef = doc(db, "far", context.params.id);
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
  const projects = await getDocs(collection(db, "far"));
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
