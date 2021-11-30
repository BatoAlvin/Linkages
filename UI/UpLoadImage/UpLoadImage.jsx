import React ,{ useEffect, useState }  from 'react'
import { ButtonFilled } from '../../components/Button/Button'
import Image from "next/image";
import styles from "./ProjectCard.module.css"
import { storage } from '../../firebase/firebase';
import {collection,addDoc,getFirestore} from '../../firebase/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from '../../firebase/firebase'
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepOrange } from '@mui/material/colors';
export function UpLoadProfileImage() {
  const db = getFirestore();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);

  const [data, setData] = useState({
    imageUrl: "",
  });


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
    return (

      <div>
         {!url && (
        <form onSubmit={handleSubmit}>
      <div >
                      {/* <Avatar src="/images/project1.png" sx={{ width: 76, height: 76 }} /> */}
                      </div>
      
                  <div className="d-flex d-flex justify-content-start ">
                  <div className="mb-2">
                    <label className="form-label">Attach Image </label>
                    <input
                      type="file"
                      className="form-control"
                      required
                    />
                  </div>
                  <ButtonFilled text="Submit Image"/>
      
                  </div>
                  </form>
                   )}

{url && (
          <Link href={url}>
            <a target="_blank">
              <input className={styles.url} type="text" value={url} readOnly />
            </a>
          </Link>
        )} 
              </div>
    )
}

