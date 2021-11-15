import Head from "next/head";
import styles from "./../../styles/myClass.module.css";
import { db } from "./../../firebase/firebase";
import { getDoc, getDocs, collection, doc } from "firebase/firestore";
import FlagIcon from "@material-ui/icons/Flag";
import Link from "next/link";
import { Button, Typography } from "@material-ui/core";

const Profileid = ({ info }) => {
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
                    <h4 style={{ color: "#096691", fontWeight: "900" }}>
                      {info.coName}
                    </h4>
                    <p>
                      <span> Avatar </span>
                      <img
                        src={info.imageUrl}
                        className={styles.pic}
                        width="250"
                        height="200"
                        unoptimized="true"
                      />
                    </p>
                    <p>
                      <span>FirstName :</span> {info.fisrtName}
                    </p>
                    <p>
                      <span>LastName:</span> {info.lastName}
                    </p>
                    <p>
                      <span>JobTitle: </span>
                      {info.jobTItle}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.projectHeaderSec2}>
                <FlagIcon style={{ fill: "#41AD48" }} />
                <h4>TO UPDATE YOUR PROFILE SIMPLY CLICK THE BUTTON BELOW.</h4>
              </div>
            </div>

            <Link href="/updates/[id]" as={`/updates/${info.id}`} passHref>
              <Button variant="contained" color="primary">
                Update
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const docRef = doc(db, "profileApplications", context.params.id);
  const docSnap = await getDoc(docRef);
  const info = {id: docSnap.id, ...docSnap.data()};

  return {
    props: {
      info,
    },
  };
};

export default Profileid;

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
