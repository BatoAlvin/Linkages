/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from "../../styles/ProjectCard.module.css"
// import projectImage from "../images/project1.png";

export default function ProfileCard() {
    return (
        <div className={styles.projectcards}>

<div style={{width:"260px"}} className=" d-flex justify-content-center m-1 shadow-none p-3 mb-5 bg-light rounded" >
            <Link href="#">
                <a target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                <div  className={styles.img_container}>
                    <Image src='/project1.png' alt="E commerce site" width={390}  height={250} className={styles.img}/>
                </div>
        {/* <img src='/images/project1.png'  className={styles.img} alt="img" width="250" height="200"/> */}
                    <div className="d-flex  flex-column ">
                    <span className="text-start text-secondary h5">E commerce</span>
                    <span className="text-secondary">Online shopping site to order products</span> 
                    </div>
                </a>
            </Link>
           </div>

           <div style={{width:"260px"}} className=" d-flex justify-content-center m-1 shadow-none p-3 mb-5 bg-light rounded" >
            <Link href="#">
                <a target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                <div  className={styles.img_container}>
                    <Image src='/project1.png' alt="E commerce site" width={390}  height={250} className={styles.img}/>
                </div>
        {/* <img src='/images/project1.png'  className={styles.img} alt="img" width="250" height="200"/> */}
                    <div className="d-flex  flex-column ">
                    <span className="text-start text-secondary h5">E commerce</span>
                    <span className="text-secondary">Online shopping site to order products</span> 
                    </div>
                </a>
            </Link>
           </div>

           <div style={{width:"260px"}} className=" d-flex justify-content-center m-1 shadow-none p-3 mb-5 bg-light rounded" >
            <Link href="#">
                <a target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                <div  className={styles.img_container}>
                    <Image src='/project1.png' alt="E commerce site" width={390}  height={250} className={styles.img}/>
                </div>
        {/* <img src='/images/project1.png'  className={styles.img} alt="img" width="250" height="200"/> */}
                    <div className="d-flex  flex-column ">
                    <span className="text-start text-secondary h5">E commerce</span>
                    <span className="text-secondary">Online shopping site to order products</span> 
                    </div>
                </a>
            </Link>
           </div>

        </div>
    )
}
