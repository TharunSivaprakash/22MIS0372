import React from "react";
import "./app.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Button
} from "@mui/material";

import AllNotifications from "./pages/AllNotifications";
import PriorityInbox from "./pages/PriorityInbox";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            All Notifications
          </Button>

          <Button color="inherit" component={Link} to="/priority">
            Priority Inbox
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<AllNotifications />} />
        <Route path="/priority" element={<PriorityInbox />} />
      </Routes>
    </Router>
  );
}

export default App;
