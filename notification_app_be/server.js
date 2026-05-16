const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ0aGFydW4yMDA0LnNAZ21haWwuY29tIiwiZXhwIjoxNzc4OTMzOTI5LCJpYXQiOjE3Nzg5MzMwMjksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIzOTA2NzU0Ny0yZjVmLTQ0ODMtYjUxNC1hNjA3YjM4OTg1NjkiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ0aGFydW4ucyIsInN1YiI6IjNkMzNjZDhkLTcxNWEtNGI1NS04OTE5LWE5MThmYmY4YWJkOSJ9LCJlbWFpbCI6InRoYXJ1bjIwMDQuc0BnbWFpbC5jb20iLCJuYW1lIjoidGhhcnVuLnMiLCJyb2xsTm8iOiIyMm1pczAzNzIiLCJhY2Nlc3NDb2RlIjoiU2ZGdVdnIiwiY2xpZW50SUQiOiIzZDMzY2Q4ZC03MTVhLTRiNTUtODkxOS1hOTE4ZmJmOGFiZDkiLCJjbGllbnRTZWNyZXQiOiJDZk53WVhqRFhTUmdZWEhrIn0.F9AkkBoAEZx2olTl6v-sguImiPhcb1i8JDUOhM9210Q";

app.get("/api/notifications", async (req, res) => {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: "Failed to fetch notifications"
    });
  }
});

app.post("/api/logs", async (req, res) => {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      req.body,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: "Failed to send logs"
    });
  }
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});