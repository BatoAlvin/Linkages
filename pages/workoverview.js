import styles from "../styles/myClass.module.css";
import Head from "next/head";
import Link from 'next/link'
import { useState } from "react";

import {db} from '../firebase/firebase'
import { collection,  getDocs } from "firebase/firestore";

//to view the projects added by admin
const Workoverview = () => {
  return(
    <>
    <h1>Hello</h1>
     
    </>
  )
  
};

export default Workoverview;

