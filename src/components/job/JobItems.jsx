import React, { Component } from "react";

import "./styles.css";
import nextArrow from "../../assets/nextArrow.png";

const JobItems = ({ data }) => {
  return (
    <div className="job-container">
      <div className="request-container ">
        <div className="requestId">#KIA001</div>
        <div className="driver-name">Ram Patidar</div>
      </div>
      <span className="time">8:00 AM</span>
      <div className="status-container">
        <div className="status">Status In Que</div>
        <img className="job-icon" src={nextArrow} alt="Logo" />
      </div>
    </div>
  );
};

export default JobItems;
