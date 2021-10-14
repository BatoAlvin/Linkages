import React from "react";
import JobDescription from "../components/JobDes/JobDesComponent";

function Jobdesc() {
  return (
    <div>
      <JobDescription
        company="Andela Uganda"
        position="senior frontend developer"
        description="The Senior Frontend Developer is an essential part of the business. 
        He oversees the activities of the junior frontend developer teams and 
        works closely with the business’s backend developers. The Senior 
        Frontend Developer implements the user interface and engineers the 
        experience of every site/software being put out by the business."
        allskills={[
          "At least 5+ years of experience hand-coding HTML(5), CSS(3) and other UI technologies",
          "TDD",
          "Version control",
        ]}
        techSkills={["React, javascript"]}
      />
    </div>
  );
}

export default Jobdesc;
