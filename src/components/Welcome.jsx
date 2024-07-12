import { format } from "date-fns";
import React, { useState } from "react";

const Welcome = () => {
  // Initialize state for current date
  const currentDate = new Date();
  // Format the current date as "EEE, dd MMM HH:mm"
  const formattedDate = format(currentDate, "EEE, dd MMM HH:mm");

  return (
    <div className="welcome">
      <p>Hello! </p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default Welcome;
