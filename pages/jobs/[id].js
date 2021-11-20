import Head from "next/head";
import styles from "./../../styles/myClass.module.css";
import { db } from "./../../firebase/firebase";
import { getDoc, collection, doc } from "firebase/firestore";
import FlagIcon from "@material-ui/icons/Flag";
import Jobapplication from "../../components/Jobapplication";
import Link from "next/link";
import {Button,Typography} from "@material-ui/core"
import { useSession, getSession } from "next-auth/react"

export default function Project({ info }) {
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
        <title>Job Description</title>
      </Head>
      <div className={styles.myClassSection}>
        <div className={styles.myClassBorder}>
          <div className={styles.projectSection}>
            <div className={styles.projectHeader1}>
              <h3>JOB DETAILS</h3>
            </div>
            <div className={styles.projectHeader2}>
              <div className={styles.projectHeaderSec1}>
                <div>
                  <div className={styles.container}>
                    <h4 style={{ color: "#096691", fontWeight: "900" }}>
                      {info.coName}
                    </h4>
                    <p>
                      <span>Qualifications :</span> {info.qualifications}
                    </p>
                    <p>
                      {" "}
                      <span>Job Title:</span> {info.jobTitle}{" "}
                    </p>
                    <p>
                      <span>Job Category: </span>
                      {info.jobCategory}{" "}
                    </p>
                    <p>
                      {" "}
                      <span>Job Description: </span>
                      {info.jobDescription}
                    </p>
                    <p style={{ color: "#00ddff", fontWeight: "bold" }}>
                      Deadline {info.deadline}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.projectHeaderSec2}>
                <FlagIcon style={{ fill: "#41AD48" }} />
                <h4>
                  PLEASE ALWAYS FOLLOW THE STANDARD PRINCIPLES WHILE CARRYING
                  OUT YOUR APPLICATIONS.
                </h4>
              </div>
            </div>
            
            <Link href='/apply'>
            <Button
          variant="contained"
          color="primary"
          
        >
          Apply
        </Button>
        </Link>

          </div>
        </div>
      </div>
    </>
  )
}



export const getServerSideProps = async (context) => {
  const docRef = doc(db, "jobs", context.params.id);
  const docSnap = await getDoc(docRef);

  const info = await docSnap.data();
  console.log(info);

  return {
    props: {
      info,
    },
  };
};