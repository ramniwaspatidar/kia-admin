import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import "./styles.css";
import JobItems from "../../components/job/JobItems";
import { APIsMethod, BASEURL } from "../../constants";
import ApisEndpoint from "../../constants/ApisEndpoint";
import { Apis } from "../../axios/Apis";

const Dashboard = (props) => {
  const { loggedIn, email } = props;
  const [search, setSearch] = useState("");
  const [jobList, setList] = useState([]);

  const navigate = useNavigate();

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

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div className="dashboard-container">
      <div className={"titleContainer"}>Dashboard </div>

      <div class="search-box">
        <input class="search" type="search" placeholder="Search by name" value={search} onChange={handleInputChange} />
      </div>
      <Tabs
        activeTab="1"
        className="mt-5"
        ulClassName="tabs"
        activityClassName="bg-success"
        onClick={(event, tab) => console.log(event, tab)}
      >
        <Tab title="New" className="mr-3">
          {jobList.map((item) => (
            <JobItems key={item.id} data={item} />
          ))}
        </Tab>

        <Tab title="Completed" className="mr-3">
          {jobList.map((item) => (
            <JobItems key={item.id} data={item} />
          ))}{" "}
        </Tab>

        <Tab title="No Show" className="mr-3">
          {/* <div className="mt-3">Tab 3 content</div> */}
        </Tab>

        <Tab title="Cancelled" className="mr-3">
          {jobList.map((item) => (
            <JobItems key={item.id} data={item} />
          ))}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;
