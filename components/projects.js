//import styles from "../../styles/myClass.module.css";
import styles from "../styles/myClass.module.css";
import Head from "next/head";
import Link from 'next/link'
import { useState } from "react";

//import {db} from '../../firebase/firebase'
import {db} from '../firebase/firebase'
import { collection,  getDocs } from "firebase/firestore";

const Projects = ({data}) => {
  return(
    <>
     <Head>
        <title>EDU MY CLASS|CLASSWORK</title>
        <meta name="description" content="Become a software developer" />
      </Head>
           <div className={styles.myClassSection}>
        <div className={styles.myClassBorder}>
          <div className={styles.myClassHeader}>
           <Link href="/myClass/classwork">
               <a className={styles.myClassActive}>ClassWork</a>
             </Link>
        </div>
 
        <div className = {styles.projectContent}>
        <div className = {styles.projectDetail}>
          {data.map((info)=>(
            
    <div key = {info.id} >
    <Link href = '/myClass/project/[id]' as = {`/myClass/project/${info.id}`} passHref>
     <div>{info.title}</div>
     </Link>
     <div> {info.github}</div>
   </div>
   
    ))}
     </div>
   
        </div>
   </div>
   </div>
     
    </>
  )
  
};

export default Projects;

export const getStaticProps = async () => {
  const data = []
  try{
      const projects = await getDocs(collection(db, "lms_projects"));      
      projects.forEach((doc) => {
         data.push(Object.assign({
             id: doc.id
         },doc.data()))
        }); 
         
  }catch(err){
      console.log(err)
  }
  
  return{
      props: {
          data
      }  
      
  }
}


