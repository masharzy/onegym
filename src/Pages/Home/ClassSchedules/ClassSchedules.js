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
        
        {/* </div> */}

        {/* <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">Day</th>
              <th scope="col">Class Name</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sunday</td>
              <td>Body Building</td>
              <td>1:30am - 3:30am</td>
            </tr>
            <tr>
              <td>Monday</td>
              <td>Yoga Fitness</td>
              <td>12:00am - 2:00am</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Weight Lifting</td>
              <td>12:00pm - 1:30pm</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>Running</td>
              <td>12:00am - 2:00am</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>Cycling</td>
              <td>2:00am - 4:00am</td>
            </tr>
          </tbody>
        </table> */}
      </div>
  );
};

export default ClassSchedules;
