import axios from "axios";
import { Log } from "./logger";

export const fetchNotifications = async () => {
  try {
    await Log("frontend", "info", "api", "Fetching notifications");

    const response = await axios.get(
      "http://localhost:5000/api/notifications"
    );

   

    await Log("frontend", "info", "api", "Notifications fetched");

    if (Array.isArray(response.data)) {
      return response.data;
    }

    if (Array.isArray(response.data.notifications)) {
      return response.data.notifications;
    }

    if (Array.isArray(response.data.data)) {
      return response.data.data;
    }

    return [];
  } catch (error) {
    await Log("frontend", "error", "api", "Fetch failed");
    return [];
  }
};