import React from "react";

import "./notification.style.css";

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p className="text">You have already entered this letter</p>
    </div>
  );
};

export default Notification;
