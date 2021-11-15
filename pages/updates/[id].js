import React, { useState } from "react";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { db } from "./../../firebase/firebase";
import styles from "./../../styles/myClass.module.css";
import {storage} from "../../firebase/firebase"
import Link from "next/link";
import {
    ref,
  uploadBytesResumable,
  getDownloadURL,
  } from "firebase/storage";

function edits({ info }) {
  const [update, setUpdate] = useState(info);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) =>
    setUpdate({ ...update, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const washingtonRef = doc(
      db,
'GDz1y3wBuaXdQkOF9vSt',
      "profileApplications",
      
    );

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      ...update,
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
    setUpdate({...update, imageUrl: downloadURL})
    setFile(null);
    setLoading(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="fisrtName"
          value={update.fisrtName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          value={update.lastName}
          onChange={handleChange}
        />

  
        <button type="submit">Edit</button>
      </form>
      {!url && (
<form onSubmit={handleSubmits}>
<input type='file'
 name="imageUrl"
 value={update.lmageUrl}
 onChange={(e) => setFile(e.target.files[0])}
/>
<button
                    type="submit"
                    className="btn btn-primary mb-2"
                    disabled={loading}
                  >
                    {loading ? "Uploading..." : "Upload"}
                  </button>
<span>Avatar </span>
                      <img src={info.imageUrl}  className={styles.pic}  width="250" height="200" unOptimized/>
                     
                    
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
}

export const getStaticProps = async (context) => {
  const docRef = doc(db, "profileApplications", context.params.id);
  const docSnap = await getDoc(docRef);

  const info = await docSnap.data();
  console.log(info);

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
  
    const paths = data.map((product) => ({
      params: { id: product.id.toString() },
    }));
    return {
      paths,
      fallback: false,
    };
  }
  
export default edits;