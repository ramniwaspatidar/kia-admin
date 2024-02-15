import React, { Component } from "react";

import "./styles.css";
import nextArrow from "../../assets/nextArrow.png";
import { getDateFromTimestamp } from "../../utils/Utils";

const JobItems = ({ data }) => {
  return (
    <div className="job-container">
      <div className="request-container ">
        <div className="requestId">{data.driverId}</div>
        <div className="driver-name">{data.driverName}</div>
      </div>
      <span className="time">{getDateFromTimestamp(data.createdAt)}</span>
      <div className="status-container">
        <div className="status">Status In Que</div>
        <img className="job-icon" src={nextArrow} alt="Logo" />
      </div>
    </div>
  );
};

export default JobItems;
