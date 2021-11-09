import {storage} from "../firebase/firebase"
import Button from "@material-ui/core/Button";
import styles from "../styles/application.module.css";
import Link from "next/link";
import { useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Profiles = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);

  const [data, setData] = useState({
    fisrtName: "",
    email: "",
    github: "",
  });

  const handleChange = (e) =>
  setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
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


  const handleSubmits = async (e) => {
    e.preventDefault();
    setLoading(true);
    const storageRef = ref(storage, `image/${file.name}`);
    await uploadBytesResumable(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    console.log(downloadURL);
    setUrl(downloadURL);
    setFile(null);
    setLoading(false);
  };
  return (
    <div>
      {!url && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="form-group">
          <input type="text" placeholder="Name" value={data.fisrtName} name="fisrtName" onChange={handleChange}/>
          <input type="text" placeholder="Email"  value={data.email} name="email" onChange={handleChange}/>
          <input type="text" placeholder="Github"  value={data.github} name="github" onChange={handleChange}/><br/>
        

          
            <input
              type="file"
              className="form-control-file"
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
      
    </div>
  );
};

export default Profiles;