import React, { Component } from "react";

import "./styles.css";
import { getDateFromTimestamp } from "../../utils/Utils";

const RequestItem = (props) => {
  const data = props.data;
  return (
    <div className="request-item-container">
      <div className="request-container ">
        <div className="requestId">{data.driverName}</div>
        <span className="time">{getDateFromTimestamp(data.createdAt)}</span>
      </div>
      <div className="driver-name">{data.driverEmail}</div>

      <div className="requestContainer">
        <input
          className={"requestButton"}
          type="button"
          onClick={() => props.onCreateRequestCode(data)}
          value={"Generate Request Code"}
        />
        <input
          className={"requestButton"}
          type="button"
          onClick={() => props.onRejectRequest(data)}
          value={"Reject Request"}
        />

        {/* <div className="status">Status In Que</div>

        <img className="job-icon" src={nextArrow} alt="Logo" /> */}
      </div>
    </div>
  );
};

export default RequestItem;
