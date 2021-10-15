//import styles from "../../styles/myClass.module.css";
import styles from "../styles/myClass.module.css";
import Head from "next/head";
import Link from 'next/link'
import { useState } from "react";

//import {db} from '../../firebase/firebase'
import {db} from '../firebase/firebase'
import { collection,  getDocs } from "firebase/firestore";

const Allprofiles = ({datas}) => {
    console.log(datas)
  return(
    <>
     <Head>
        <title>EDU MY CLASS|CLASSWORK</title>
        <meta name="description" content="Become a software developer" />
      </Head>
           <div className={styles.myClassSection}>
        <div className={styles.myClassBorder}>
          <div className={styles.myClassHeader}>
           <Link href="">
               <a className={styles.myClassActive}>AllProfiles</a>
             </Link>
        </div>
 
        <div className = {styles.projectContent}>
        <div className = {styles.projectDetail}>
          {datas.map((info)=>(
            
    <div key={info.id} >
    <Link href = '/'>
     <div> {info.coName}</div>
     </Link>
     <div>  {info.jobDescription}</div>
     <div>  {info.deadline}</div>
   </div>
   
    ))}
     </div>
   
        </div>
   </div>
   </div>
     
    </>
  )
  
};

export default Allprofiles;

export const getStaticProps = async () => {
  let datas = []
  try{
      const projects = await getDocs(collection(db, "jobs"));      
      projects.forEach((doc) => {
         datas.push(Object.assign({
             id: doc.id
         },doc.datas()))
        }); 
         
  }catch(err){
      console.log(err)
  }
  
  return{
      props: {
          datas
      }  
      
  }
}


