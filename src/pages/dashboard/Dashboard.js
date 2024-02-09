import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import "./styles.css";
import JobItems from "../../components/job/JobItems";

const Dashboard = (props) => {
  const { loggedIn, email } = props;
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const dataList = [
    { id: 1, title: "Item 1", description: "Description for Item 1" },
    { id: 2, title: "Item 2", description: "Description for Item 2" },
    { id: 3, title: "Item 3", description: "Description for Item 3" },
    // Add more items as needed
  ];

  const onButtonClick = () => {
    // You'll update this function later
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
          {dataList.map((item) => (
            <JobItems key={item.id} data={item} />
          ))}
        </Tab>

        <Tab title="Completed" className="mr-3">
          {dataList.map((item) => (
            <JobItems key={item.id} data={item} />
          ))}{" "}
        </Tab>

        <Tab title="No Show" className="mr-3">
          {/* <div className="mt-3">Tab 3 content</div> */}
        </Tab>

        <Tab title="Cancelled" className="mr-3">
          {dataList.map((item) => (
            <JobItems key={item.id} data={item} />
          ))}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;
