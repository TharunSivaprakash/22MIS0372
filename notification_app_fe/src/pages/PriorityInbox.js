import React, { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { fetchNotifications } from "../api/notificationService";

function getPriorityScore(type) {
  const t = (type || "").toLowerCase();

  if (t.includes("placement")) return 100;
  if (t.includes("result")) return 70;
  if (t.includes("event")) return 40;

  return 10;
}

function PriorityInbox() {
  const [notifications, setNotifications] = useState([]);
  const [topN, setTopN] = useState(10);

  useEffect(() => {
    loadNotifications();
  }, [topN]);

  const loadNotifications = async () => {
    const data = await fetchNotifications();

    const viewed = JSON.parse(localStorage.getItem("viewed")) || [];

    const formatted = data.map((item, index) => ({
      id: index,
      title: item.message || "Notification",
      type: item.type || "General",
      message: item.message || "",
      viewed: viewed.includes(index),
      score: getPriorityScore(item.type)
    }));

    formatted.sort((a, b) => b.score - a.score);

    setNotifications(formatted.slice(0, topN));
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
      <h1>Priority Inbox</h1>

      <select
        value={topN}
        onChange={(e) => setTopN(Number(e.target.value))}
      >
        <option value={5}>Top 5</option>
        <option value={10}>Top 10</option>
        <option value={15}>Top 15</option>
        <option value={20}>Top 20</option>
      </select>

      <div className="notification-grid">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            notification={notification}
            onClick={markViewed}
          />
        ))}
      </div>
    </div>
  );
}

export default PriorityInbox;