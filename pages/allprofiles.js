import styles from "../styles/ProfileCard.module.css";
import { db } from "../firebase/firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";

function Profiles({ data}) {
  //console.log(data)
  return (
    <section className={styles.right}>
      {/* {console.log(data)} */}
      {/* <ProfileHeader profileDetails={profileDetails} /> */}
      <div className={styles.border}></div>
      <div></div>

      <div className={styles.projectContent}>
        <div className={styles.projectDetail}>
          {data.map((info) => (
            <div key={info.id}>
              <div className={styles.details}>
                <a target="_blank" rel="noopener noreferrer">
                  {/* <Image src={projectImage} alt={projectName} width={300}  height={200} className={styles.img}/> */}
                  {/* <img src={projectImage}  className={styles.img} alt="img" width="250" height="200"/> */}
                  <div className={styles.pic}></div>
                  
                  <p className={styles.title}>
                 {info.fisrtName} <span>{info.lastName}</span>
                  </p>
                  <p className={styles.description}>{info.jobTItle}</p>
                </a>

              </div>
              
            </div>
            
          ))}
         
        </div>
        
      </div>
    </section>
  );
}

export default Profiles;

export const getServerSideProps  = async () => {
  let data = [];
  try {
    const projects = await getDocs(collection(db, "profileApplications"));

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