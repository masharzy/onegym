import React, { useEffect, useState } from "react";
import ClassSchedule from "../ClassSchedule/ClassSchedule";
import "./ClassSchedules.css";
const ClassSchedules = () => {
  const [classSchedules, setClassSchedules] = useState([]);
  useEffect(() => {
    fetch("classSchedules.json")
      .then((res) => res.json())
      .then((data) => setClassSchedules(data));
  },[])
  return (
    <div className="container text-center mb-5">
      <h1 className="text-center schedule-title my-5 position-relative">
        My Class Schedule
      </h1>
        <div className="row schedule-header">
          <div className="col-md-4">Day</div>
          <div className="col-md-4">Class Name</div>
          <div className="col-md-4">Time</div>
        </div>

        {
            classSchedules.map((classSchedule) => <ClassSchedule key={classSchedule.id} classSchedule={classSchedule}></ClassSchedule>)
        }
        
      </div>
  );
};

export default ClassSchedules;
