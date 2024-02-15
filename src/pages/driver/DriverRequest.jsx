import React, { useState } from "react";
import "react-best-tabs/dist/index.css";
import "./styles.css";
import { APIsMethod, BASEURL } from "../../constants";
import ApisEndpoint from "../../constants/ApisEndpoint";
import { Apis } from "../../axios/Apis";
import RequestItem from "../../components/driverRequest/RequestItem";

const DriverRequest = () => {
  const [jobList, setList] = useState([]);

  React.useEffect(() => {
    getJobList();
  }, []);

  const getJobList = async () => {
    try {
      const url = BASEURL + ApisEndpoint.jobList;
      const response = await Apis.request(url, APIsMethod.get);
      if (response.status === true) {
        setList(response.payload ? response.payload : []);
      }
    } catch (error) {}
  };

  const onCreateRequestCode = async (data) => {
    try {
      const url = BASEURL + ApisEndpoint.driverRequest;
      const param = { driverEmail: data.driverEmail };
      const response = await Apis.request(url, APIsMethod.post, param);
      if (response.status === true) {
        getJobList();
      }
    } catch (error) {}
  };

  const onRejectRequest = async (data) => {
    try {
      const url = BASEURL + ApisEndpoint.declineDriverRequest;

      const param = { driverEmail: data.driverEmail };
      const response = await Apis.request(url, APIsMethod.post, param);
      if (response.status === true) {
        getJobList();
      }
    } catch (error) {}
  };

  return (
    <div className="driver-container">
      <div className={"titleContainer"}>Driver Request </div>

      {jobList.map((item) => (
        <RequestItem
          key={item.id}
          data={item}
          onCreateRequestCode={onCreateRequestCode}
          onRejectRequest={onRejectRequest}
        />
      ))}
    </div>
  );
};

export default DriverRequest;
