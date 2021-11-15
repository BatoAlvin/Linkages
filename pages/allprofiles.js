import styles from "../styles/ProfileCard.module.css";
import { db } from "../firebase/firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import Link from "next/link";
import Image from "next/image";

function Profiles({ data }) {
  //console.log(data)
  return (
    <section className={styles.right}>
      <div className={styles.border}></div>
      <div></div>

      <div className={styles.projectContent}>
        <div className={styles.projectDetail}>
          {data.map((info) => (
            <Link href="/profiles/[id]" as={`/profiles/${info.id}`} passHref>
              <div key={info.id}>
                <div className={styles.details}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className={styles.pic}>
                      <img
                        src={info.imageUrl}
                        className={styles.pic}
                        width="100%"
                        height="240"
                        unptimized="true"
                      />
                    </div>

                    <p className={styles.title}>
                      {info.fisrtName} <span>{info.lastName}</span>
                    </p>
                    <p className={styles.description}>{info.jobTItle}</p>
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profiles;

export const getServerSideProps = async () => {
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
