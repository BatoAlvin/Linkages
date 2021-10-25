import {storage} from "../firebase/firebase"
import Button from "@material-ui/core/Button";
import styles from "../styles/ProfileCard.module.css";
import Link from "next/link";
import { useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const storageRef = ref(storage, `imageshgfdjgdjjgfd/${file.name}`);
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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Upload Image</label>
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

export default Profile;
