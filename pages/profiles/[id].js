import Head from "next/head";
import Border from '../../components/Border/Border'
import styles from "./../../styles/ProfileHeader.module.css";
import { db } from "./../../firebase/firebase";
import { getDoc, getDocs, collection, doc } from "firebase/firestore";
import FlagIcon from "@material-ui/icons/Flag";
import Link from "next/link";
import ParagraphCss from "../../styles/Paragraph.module.css";
import liStyles from "../../styles/Tag.module.css";
import TitleRightCss from "../../styles/TitleRight.module.css";
import BorderCss from "../../styles/Border.module.css";
import Image from 'next/image';
import { Button, Typography } from "@material-ui/core";

import { useSession, getSession } from "next-auth/react"

export default function Profileid({ info }) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }

  return (
    <>
     

      <Head>
        <title>{info.fisrtName}Profile Description</title>
      </Head>
      <div className={styles.myClassSection}>
        <div className={styles.myClassBorder}>
          <div className={styles.projectSection}>
            <div className={styles.projectHeader1}>
              <h3>PROFILE DETAILS</h3>
            </div>
            <div className={styles.projectHeader2}>
              <div className={styles.projectHeaderSec1}>
                <div>
                  <div className={styles.container}>
                    <h4 style={{ color: "#096691", fontWeight: "900" }}>{info.coName}</h4>
                    {/* <p>
                      <span> Avatar </span>
                      <img
                        src={info.imageUrl}
                        className={styles.pic}
                        width="250"
                        height="200"
                        unoptimized="true"
                      />
                    </p> */}


                    <div className={styles.profileHeader}>
            <div style={{borderBottom:"2px solid red"}} className={styles.justify} >
            <div className={styles.details}> 
                <span className={styles.p}>{info.fisrtName} {info.lastName}</span> 
                <span className={styles.p}>{info.jobTItle}</span>  
                <span className={styles.p}>{info.tele}</span>
                <span className={styles.p}>{info.email}</span> 
            </div>  
                <Image src='/user.png' alt="name" width={150}  height={150} className={styles.img}/>
                {/* <img src={userProfilePic} alt="img" width="150" height="150" className={styles.img}/>/ */}
            </div>
        </div> 


        <div className={TitleRightCss.left_Title}>
                      <span>
                        <h3> Bio</h3>
                      </span>
                    </div>
                    <div className={ParagraphCss.paragraph}>
                      <p>{info.bio}</p>
                    </div>
                    <Border /> 

                     <div className={TitleRightCss.left_Title}>
                      <span>
                        <h3> Technical Skills</h3>
                      </span>
                    </div>
                    <div>
                      <ul className={liStyles.ulElement}>
                        <li className=" shadow-sm p-3 mb-5 bg-body rounded text-secondary h6">
                          {info.part1}
                        </li>
                        <li className=" shadow-sm p-3 mb-5 bg-body rounded text-secondary h6">
                          {info.part2}
                        </li>
                        <li className=" shadow-sm p-3 mb-5 bg-body rounded text-secondary h6">
                          {info.part3}
                        </li>
                      </ul>
                    </div>
                    <Border /> 

                     <div className={TitleRightCss.left_Title}>
                      <span>
                        <h3> Other Skills</h3>
                      </span>
                    </div>
                    <div>
                      <ul className={liStyles.ulElement}>
                        <li className=" shadow-sm p-3 mb-5 bg-body rounded text-secondary h6">
                          {info.part4}
                        </li>
                        <li className=" shadow-sm p-3 mb-5 bg-body rounded text-secondary h6">
                          {info.part5}
                        </li>
                        <li className=" shadow-sm p-3 mb-5 bg-body rounded text-secondary h6">
                          {info.part6}
                        </li>
                      </ul>
                    </div>
                    <Border />

                    <div className={TitleRightCss.left_Title}>
                      <span>
                        <h3> Resume</h3>
                      </span>
                    </div>
                    <div className={ParagraphCss.paragraph}>
                      <p>{info.resume}</p>
                    </div>
                    <Border /> 
                 
                   
                   
                  
                  </div>
                </div>
              </div>
            </div>

            <Link href="/updates/[id]" as={`/updates/${info.id}`} passHref>
              <button className={styles.btn}>Update</button>
            </Link>
          </div>
        </div>
      </div>


    </>
  )
}


export const getStaticProps = async (context) => {
  const docRef = doc(db, "far", context.params.id);
  const docSnap = await getDoc(docRef);
  const info = { id: docSnap.id, ...docSnap.data() };

  return {
    props: {
      info,
    },
  };
};


export async function getStaticPaths() {
  let data = [];
  const projects = await getDocs(collection(db, "far"));
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
