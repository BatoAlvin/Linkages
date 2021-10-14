import React from "react";
import jobStyles from "../../styles/jobStyles.module.css";

function JobDescription({
  company,
  position,
  description,
  allskills,
  techSkills,
}) {
  return (
    <section className={jobStyles.right}>
      <p className={jobStyles.company}>{company}</p>
      <p className={jobStyles.position}>{position}</p>
      <p>{description}</p>

      <h3>Qualifications/skills</h3>
      {/* <Unordered listItem={qualifications} /> */}
      <ul className={jobStyles.skills}>
        {allskills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Technical skills</h3>
      <div className={jobStyles.techSkills}>
        {techSkills.map((skill, index) => (
          <p className={jobStyles.skill} key={index}>
            {skill}
          </p>
        ))}
      </div>

      <button>Apply</button>
    </section>
  );
}

export default JobDescription;
