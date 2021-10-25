import styles from "../styles/Opportunity.module.css";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

//To view the projects added by admin
const Home = ({ data }) => {
  const [datas, setData] = useState(data);
  const [search,setSearch] = useState('')

  const getData = async () => {
    const dataArr = [];
    const projects = await getDocs(collection(db, "jobs"));
    projects.forEach((doc) => {
      return dataArr.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return dataArr;
  };
  const handleChange = async (e) => {
    const { value } = e.target;
    const newData = await getData();
    const filtered = [...newData].filter((job) =>
      job.category.toLowerCase().includes(value)
    );
    console.log(filtered);
    value === "" ? setData(data) : setData(filtered);
  };
  return (
    <>
      <Head>
        <title>EDU LINKAGES</title>
        <meta name="description" content="Become a software developer" />
      </Head>
      <input 
      placeholder='Company name'
      type='text'
      onChange={(e)=>{setSearch(e.target.value)}}
      />

      <select onChange={handleChange}>
        <option value="" label="All"></option>
        <option value="frontend" label="Frontend"></option>
        <option value="backend" label="Backend"></option>
        <option value="fullstack" label="Fullstack"></option>
      </select>
      <div className={styles.major}>

        {datas.filter((info)=>{
if (search === ""){
  return info
} else if (info.coName.toLowerCase().includes(search.toString().toLowerCase())){
  return info
}
        }).map((info) => (
          <div key={info.id}>
            <Link href="/jobs/[id]" as={`/jobs/${info.id}`} passHref>
              <div className={styles.container}>
                <div className={styles.flexitem}>
                  <div className={styles.card}>
                    <p className={styles.jobTitle}>{info.jobTitle}</p>
                    <div className={styles.companyDetails}>
                      <p className={styles.company}>{info.coName}</p>
                      <p className={styles.location}>{info.location}</p>
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

export default Home;

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
  } catch (err) {
  }
  return {
    props: {
      data,
    },
  };
};
