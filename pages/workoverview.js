import OppCard from "../components/JobOpportunities/Card";
import styles from "../styles/Opportunity.module.css";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { styled } from "@material-ui/core/styles";

import { Grid, Paper } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

//to view the projects added by admin
const workoverview = ({ data }) => {
  const [datas, setData] = useState(data);
  const [search, setSearch] = useState("");
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
    console.log(newData);
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

      <Grid container spacing={0}>
        <Grid
          container
          spacing={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={6} md={4}>
            <input
              className={styles.search}
              placeholder="Company name"
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={4} md={4}>
            <select className={styles.selectFilter} onChange={handleChange}>
              <option value="" label="All"></option>
              <option value="frontend" label="Frontend"></option>
              <option value="backend" label="Backend"></option>
              <option value="fullstack" label="Fullstack"></option>
            </select>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          alignItems="stretch"
          justifyContent="space-between"
        >
          {datas
            .filter((info) => {
              if (search === "") {
                return info;
              } else if (
                info.coName
                  .toLowerCase()
                  .includes(search.toString().toLocaleLowerCase())
              ) {
                return info;
              }
            })
            .map((info) => (
              <Grid item xs={12} sm={6} md={4} key={info.id}>
                <Link href="/jobs/[id]" as={`/jobs/${info.id}`} passHref>
                  <OppCard
                    job={info.jobTitle}
                    company={info.coName}
                    location={info.location}
                    deadline={info.deadline}
                    paragraph={info.jobDescription}
                  />
                </Link>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </>
  );
};

export default workoverview;

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

//to view the projects added by admin
