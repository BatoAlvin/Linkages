import OppCard from "../components/JobOpportunities/Card";
import styles from "../styles/Opportunity.module.css";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { createTheme, ThemeProvider } from "@material-ui/core";

import { Grid, Paper } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontWeightRegular: 500,
    body2: {
      fontWeight: 600,
      fontSize: "0.93rem",
      "@media (max-width:600px)": {
        fontSize: "2.1rem",
      },
    },
    h5: {
      fontWeight: 620,
      fontSize: 22,
      color: "#41ad48",
      "@media (max-width:600px)": {
        fontSize: "2.2rem",
      },
    },
    h6: {
      fontWeight: 620,
      fontSize: 20,
      "@media (max-width:600px)": {
        fontSize: "2.2rem",
      },
    },
  },
});

//to view the projects added by admin
const Classwork = ({ data }) => {
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
    <ThemeProvider theme={theme}>
      <Head>
        <title>EDU LINKAGES</title>
        <meta name="description" content="Become a software developer" />
      </Head>

      <Grid
        container
        spacing={0}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div container spacing={1} className={styles.search}>
          <div item xs={6} md={4}>
            <input
              className={styles.search1}
              placeholder="Company name"
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>

          <select className={styles.selectFilter} onChange={handleChange}>
            <option value="" label="All"></option>
            <option value="frontend" label="Frontend"></option>
            <option value="backend" label="Backend"></option>
            <option value="fullstack" label="Fullstack"></option>
          </select>
        </div>
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
              <Link href="/jobs/[id]" as={`/jobs/${info.id}`} passHref>
                <Grid item xs={12} sm={6} md={4} key={info.id}>
                  <OppCard
                    job={info.jobTitle}
                    company={info.coName}
                    location={info.location}
                    deadline={info.deadline}
                    paragraph={info.jobDescription}
                  />
                </Grid>
              </Link>
            ))}
        </Grid>
      </Grid>
    </ThemeProvider>
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

//to view the projects added by admin
