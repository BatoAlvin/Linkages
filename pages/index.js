import styles from "../styles/Opportunity.module.css";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

//to view the projects added by admin
const Classwork = ({ data }) => {
  return (
    <>
      <Head>
        <title>EDU LINKAGES</title>
        <meta name="description" content="Become a software developer" />
      </Head>
      <div className={styles.major}>
        {data.map((info) => (
          <div key={info.id}>
            <Link href="/jobs/[id]" as={`/jobs/${info.id}`} passHref>
              <div className={styles.container}>
                <div className={styles.flexitem}>
                  <div className={styles.card}>
                    <p className={styles.jobTitle}>{info.jobTitle}</p>
                    <div className={styles.companyDetails}>
                      <p className={styles.company}>{info.coName}</p>
                      <p className={styles.location}>location</p>
                    </div>
                    <div>
                      <p className={styles.paragraph}>{info.jobDescription}</p>
                    </div>

                    <div className={styles.deadline}>
                      <p>Deadline: {info.deadline}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Classwork;

export const getServerSideProps = async () => {
  let data = [];
  try {
    const projects = await getDocs(collection(db, "jobs"));

    projects.forEach((doc) => {
      return data.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    console.log(data);
  } catch (err) {
    // console.log(err);
  }

  return {
    props: {
      data,
    },
  };
};
