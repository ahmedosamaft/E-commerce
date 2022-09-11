import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="container d-flex justify-content-between align-items-center flex-column text-dark">
      <h1 className="text-dark">About</h1>
      Made By:
      <h2 className="" style={{ color: "#dc3545" }}>
        {" "}
        Ahmed Osama
      </h2>
      <p className="atext text-dark">
        Learn more about the team maintaining Bootstrap, how and why the project
        started, and how to get involved.
      </p>
      <a
        href="https://github.com/androidbasha572"
        target="_blank"
        className="btn btn-danger"
      >
        View on GitHub
      </a>
    </div>
  );
}
