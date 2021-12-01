import React,{ useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { UpLoadProfileImage } from "../UI/UpLoadImage/UpLoadImage";
//import UploadProject from "../UI/UpLoadImage/UploadProject";
import { storage } from "../firebase/firebase";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { message, Alert } from "antd";
import "antd/dist/antd.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { useSession, getSession } from "next-auth/react"

export default function profileForm() {
  const { data: session, status } = useSession()
  const db = getFirestore();
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [data, setData] = useState({
    fisrtName: "",
    lastName: "",
    jobTItle:"",
    status:"",
    email:"",
    tele: "",
    bio:"",
    part1:"",
    part2:"",
    part3:"",
    part4:"",
    part5:"",
    part6:"",
    resume:"",
   
  });

  const handleSubmits = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "far"), data)
      .then((docRef) => {
        console.log("Jobapplication added", docRef.id);
        setData({ fisrtName: "",
        lastName: "",
        jobTItle:"",
        status:"",
        email:"",
        tele: "",
        bio:"",
        part1:"",
        part2:"",
        part3:"",
        part4:"",
        part5:"",
        part6:"",
        resume:"",})
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
<div className="d-flex justify-content-center flex-column  m-5">
      <Header title="Individual profile form" />
      {/* <h5 className="h5 text-secondary mx-5 ">Profile Image</h5> */}
      {/* <UpLoadProfileImage /> */}

      {/* Form */}
      <form className="mb-2 "
       onSubmit={handleSubmits}
       autoComplete="off"
      >
        <div className="mb-2">
          <label className="form-label" >First Name</label>
          <input type="text" className="form-control" 
           value={data.fisrtName}
           name="fisrtName"
           onChange={handleChange}
          required />
        </div>


        <div className="mb-2">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" 
           value={data.lastName}
           name="lastName"
           onChange={handleChange}
          required />
        </div>

        <div className="mb-2 d-flex flex-wrap">
          <label className="form-label">Title</label>
          <select
            className="form-select form-select-sm "
            aria-label=".form-select-sm example"
            name="jobTItle"
            value={data.jobTItle} 
             onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              JobTitles
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
            value={data.status}  
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

        <div className="mb-2">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" 
          name="email"
          value={data.email}  
          onChange={handleChange}
          required />
        </div>

        <div className="mb-2">
          <label className="form-label">Phone Number</label>
          <input type="text" className="form-control" 
          value={data.tele}
          name="tele"
          onChange={handleChange}
          required />
        </div>

        <div className="mb-2">
          <label>Bio</label>
          <textarea
            className="form-control"
            placeholder="About you in 20 words"
            id="floatingTextarea2"
          value={data.bio}
          name="bio"
          onChange={handleChange}
          required 
            style={{ height: "100px" }}
          ></textarea>
        </div>

        {/*Technical Skills Tags */}
        <h5 className="h5 text-secondary mx-5 ">Technical Skills</h5>

        <div className="d-flex flex-wrap">
          <div className="mb-2 w-25 m-1 ">
            <select
              className="form-select form-select-sm "
              aria-label=".form-select-sm example"
              value={data.part1}  
              name="part1"
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

          <div className="mb-2 w-25 m-1">
            <select
              className="form-select form-select-sm "
              aria-label=".form-select-sm example"
              name="part2"
              value={data.part2} 
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

          <div className="mb-2 w-25 m-1">
            <select
              className="form-select form-select-sm "
              aria-label=".form-select-sm example"
              name="part3"
              value={data.part3}  
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

        {/* Other Skills Tags */}
        <h5 className="h5 text-secondary mx-5 ">Other Skills</h5>

        <div className="d-flex flex-wrap">
          <div className="mb-2 w-25 m-1">
            <select
              className="form-select form-select-sm "
              aria-label=".form-select-sm example"
              name="part4"
              value={data.part4} 
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
              value={data.part5}  
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
              value={data.part6} 
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

        <div className="mb-2">
          <h5 className="h5 text-secondary mx-5 ">Resume</h5>

          <input
            type="text"
            className="form-control"
            placeholder="Paste a link of your Resume pdf"
            name="resume"
            value={data.resume} 
             onChange={handleChange}
            required
          />
        </div>
        {/* Button */}
        <input
          type="submit"
          value="Submit Form"
          style={{ backgroundColor: "#04739B" }}
          className="btn  rounded-0 border-0 w-100 text-light my-2 btn-primary"
        />

        {/* <UploadProject/>      */}
      </form>
    </div>
    </>
  )
}


  