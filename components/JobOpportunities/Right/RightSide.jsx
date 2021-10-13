import React, { useEffect, useState } from "react";
import { db } from "../../../Firebase/firebase";
import firebase from "firebase";

import TitleRight from "../../TitleRight/TitleRight";
import SearchBar from "../../SearchBar/SearchBar";
import opportStyles from "../../../styles/body/AllOpportunities.module.css";
import rightCss from "../../../styles/body/RightBody.module.css";
import OpportunityCard from "../../Opportunity/OpportunityCard";
import ModalJobOpportunities from "../../ModalJobOpportunities/Modal";

function RightSide({ server }) {
  const [alljobs, setAlljobs] = useState();
  console.log(server);

  // useEffect(() => {
  //   db.collection('jobs').onSnapshot(snapshot => {
  //       // console.log(snapshot.docs.map(doc => doc.data()));
  //       // setCoName(snapshot.docs.map(doc => doc.data().coName));
  //    //    setJob(snapshot.docs.map(doc => doc.data().jobTitle))
  //    //    setLocation(snapshot.docs.map(doc => doc.data().location))
  //    //    setJobdescription(snapshot.docs.map(doc => doc.data().jobDescription))
  //    //    setQualifications(snapshot.docs.map(doc => doc.data().qualifications))
  //    //    setCategory(snapshot.docs.map(doc => doc.data().jobCategory))
  //    //    setDeadline(snapshot.docs.map(doc => doc.data().deadline))
  //    setAlljobs(snapshot.docs.map(doc => ({id: doc.id,data:doc.data()})))
  //   })

  //   console.log(alljobs);
  //    return () => {
  //    };
  //    }, []);

  return (
    <section className={rightCss.right}>
      <TitleRight title="Job Opportunities" />
      {/* <SearchBar
        placeholder="Search.."
        onClick={() => alert("Search button")}
      /> */}
      {/* {typeof server != "undefined" ? ( */}
      <div className={opportStyles.flexitem}>
        {typeof server != "undefined" ? (
          server.map((job) => (
            <OpportunityCard
              Jid={job.id}
              key={job.id}
              jobTitle={job.jobTitle}
              company={job.coName}
              location={job.locationion}
              paragraph={job.jobDescription}
              deadline={job.deadline}
            />
          ))
        ) : (
          <h4>Loading....</h4>
        )}
      </div>
      {/* // ):("loading") */}
    </section>
  );
}

export default RightSide;
