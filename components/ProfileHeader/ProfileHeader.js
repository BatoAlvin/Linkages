import React from 'react';
import Image from 'next/image';
import styles from "../../styles/ProfileHeader.module.css";
// import userProfilePic from "./images/user.png"

export default function ProfileHeader({profileDetails}) {
    return (
        <div className={styles.profileHeader}>
            <div style={{borderBottom:"2px solid red"}} className={styles.justify} >
            <div className={styles.details}> 
                <span className={styles.p}>Mark Bosco</span> 
                <span className={styles.p}>Software Developer</span>  
                <span className={styles.p}>0775896325</span>
                <span className={styles.p}>mark@gmail.com</span> 
            </div>  
                <Image src='/user.png' alt="name" width={150}  height={150} className={styles.img}/>
                {/* <img src={userProfilePic} alt="img" width="150" height="150" className={styles.img}/>/ */}
            </div>
        </div> 
    )
}