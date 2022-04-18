import React from "react";

const Loading = () => {
  return (
    <div
      style={{ height: "85vh" }}
      className="d-flex flex-column justify-content-center align-items-center w-100"
    >
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
