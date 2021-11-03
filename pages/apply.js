import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { db} from "../firebase/firebase";
import styles from "../styles/application.module.css";
import { makeStyles } from "@material-ui/core";
import {storage} from "../firebase/firebase"
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { message, Alert } from "antd";
import "antd/dist/antd.css";
import {
  ref,
uploadBytesResumable,
getDownloadURL,
} from "firebase/storage";


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

  const db = getFirestore();
  const [showAlert, setShowAlert] = useState(false);

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);

  const [data, setData] = useState({
    fisrtName: "",
    email: "",
    github: "",
    imageUrl:"",
  });
  
  const handleSubmits = async (e) => {
      e.preventDefault();
      const docRef = await addDoc(collection(db, "profileApplications"), data)
        .then((docRef) => {
          console.log("Profile added", docRef.id);
          setInterval(() => {
            setShowAlert(true);
          });
        })
        .catch((error) => {
          console.error("Error occurred while adding profile", error);
        });
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
  setFile(null);
  setLoading(false);
}

  return (
    <div className={styles.main}>
      <div>
        {showAlert && (
          <Alert
            type="success"
            message="Successful"
            description="Profile has been sent"
            style={{ backgroundColor: "#5cb85c" }}
            closable
          />
        )}
      </div>
      <div>
        <form onSubmit={handleSubmits} className={styles.form}>
          <input type="text" placeholder="Name"  value={data.fisrtName} name="fisrtName" onChange={handleChange} />
          <input type="text" placeholder="Email"  value={data.email} name="email" onChange={handleChange} />
          <input type="text" placeholder="Github" value={data.github} name="github" onChange={handleChange} />
        </form>

        
        
            {!url && (
                <form onSubmit={handleSubmit}  className={styles.form2}>
                  <div>
                    <input
                      type="file"
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
   {url &&
     <Link href={url}>
     <a target="_blank">
     <input className={styles.url} type="text" value={url} readOnly />
     </a>
     </Link>
 }
 <Button color="primary" type="submit">
 Apply
</Button>
  

</div>
    </div>
  );
}

export default Jobapplication;
