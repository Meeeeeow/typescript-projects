import React from "react";

interface StatusProps {
  //   statusText: string;
  statusText: "loading" | "success" | "failed";
}
const Status: React.FC<StatusProps> = ({ statusText }) => {
  let msg = "";
  if (statusText === "loading") {
    msg = "Please wait...";
  } else if (statusText === "success") {
    msg = "Data fetched successfully!";
  } else if (statusText === "failed") {
    msg = "Failed to fetch data!";
  }
  return (
    <div>
      <h2>Status: {msg}</h2>
    </div>
  );
};

export default Status;
