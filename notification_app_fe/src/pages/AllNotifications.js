import React, { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { fetchNotifications } from "../api/notificationService";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const data = await fetchNotifications();

    if (!Array.isArray(data)) {
      console.log("Not array:", data);
      setNotifications([]);
      return;
    }

    const viewed = JSON.parse(localStorage.getItem("viewed")) || [];

    const formatted = data.map((item, index) => ({
      id: index,
      title: item.title || item.message || "Notification",
      type: item.type || item.category || "General",
      message: item.message || "",
      viewed: viewed.includes(index)
    }));

    setNotifications(formatted);
  };

  const markViewed = (id) => {
    const viewed = JSON.parse(localStorage.getItem("viewed")) || [];

    if (!viewed.includes(id)) {
      viewed.push(id);
      localStorage.setItem("viewed", JSON.stringify(viewed));
    }

    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, viewed: true } : n
      )
    );
  };

  return (
    <div className="page-container">
      <h1>All Notifications</h1>

      {notifications.length === 0 ? (
        <p>No notifications found</p>
      ) : (
        notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            notification={notification}
            onClick={markViewed}
          />
        ))
      )}
    </div>
  );
}

export default AllNotifications;