import React from "react";

import { ReactDOM } from "react";

export function Home() {
  // Use Search Parameter

  return (
    //Home Page
    <section>
      <h1 id="header">Augustine Okondor</h1>
      <p className="welcome"> Welcome to My personal Website</p>
      <span>
        <img></img>
      </span>
      <span id="menu">
        <ul>
          <li>
            <a href="#home"> HOME </a>
          </li>
          <li>
            {" "}
            <a href="#education">EDUCATION</a>{" "}
          </li>
          <li>
            <a href="#technology"> TECHNOLOGY</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#media">MEDIA</a>{" "}
          </li>
          <li>
            <a href="<Works/>">PORTFOLIO</a> <Works />
          </li>
          <li>
            {" "}
            <a href="#PrivacyPolicy">PRIVACY POLICY</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>{" "}
          </li>
        </ul>
      </span>
      <p>Click Below to check the next page</p>
      <a href="/about"> About Page </a>
    </section>
  );
}

//list

export const Works = () => {
  const jobsDone = [
    {
      name: "Learnhall",
      position: "Web Content Writer",
      duration: "1 month",
    },

    {
      name: "Texkoop",
      position: "Copywriter",
      duration: "3 months",
    },
    {
      name: "Solavieve",
      position: "Copywriter",
      duration: "3 months",
    },
  ];
  const jobsPositions = jobsDone.map((job) => {
    return (
      <div className="experience">
        <li>
          {" "}
          {job.name} <li>{job.position}</li>
        </li>
      </div>
    );
  });
  return <ul>{jobsPositions}</ul>;
};
