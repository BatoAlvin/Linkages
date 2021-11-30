import Border from "../components/Border/Border";
//import { ButtonOutlined } from "../components/Button/Button";
//import { Divider } from "@material-ui/core";
//import Heading from "../components/Header/Header";
//import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
//import { ParagraphBasic } from "../components/Paragraph/Paragraph";
//import Tags from "../components/Tags/Tags";
import { db } from "../firebase/firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import Link from "next/link";
import ParagraphCss from "../styles/Paragraph.module.css";
import liStyles from "../styles/Tag.module.css";
import TitleRightCss from "../styles/TitleRight.module.css";
import BorderCss from "../styles/Border.module.css";
import Image from 'next/image';
import styles from "../styles/ProfileHeader.module.css";
//import Image from "next/image";
import { useSession, getSession } from "next-auth/react";

export default function Heat({ data }) {
  const { datas: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <div style={{ maxWidth: "100", margin: "auto auto" }}>
        <div>
          {data.map((info) => (
            <Link href="/profiles/[id]" as={`/profiles/${info.id}`} passHref>
              <div key={info.id}>
                <div>
                  <a target="_blank" rel="noopener noreferrer">
                    <div>
                      <img
                        src={info.imageUrl}
                        // width="100%"
                        // height="240"
                        unoptimized="true"
                      />
                    </div>


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

                 

                   
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  let data = [];
  try {
    const projects = await getDocs(collection(db, "far"));

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
