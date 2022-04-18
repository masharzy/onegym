import React from "react";

const ClassSchedule = ({ classSchedule }) => {
  const { day, className, time } = classSchedule;
  return (
    <div>
      <div className="row schedule-row">
        <div className="col-md-4">{day}</div>
        <div className="col-md-4">{className}</div>
        <div className="col-md-4">{time}</div>
      </div>
    </div>
  );
};

export default ClassSchedule;
