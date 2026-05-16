import React from "react";
import "./../styles/NotificationCard.css";

function NotificationCard({ notification, onClick }) {
  return (
    <div
      className="notification-card"
      onClick={() => onClick(notification.id)}
    >
      <div className="notification-header">
        <h3>{notification.title}</h3>

        <span className={notification.viewed ? "viewed" : "new"}>
          {notification.viewed ? "VIEWED" : "NEW"}
        </span>
      </div>

      <p>{notification.type}</p>
      <p>{notification.message}</p>
    </div>
  );
}

export default NotificationCard;