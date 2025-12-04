import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import FacultyRequestLetter from "./components/FacultyRequestLetter";
// import EventApprovalLetter from "./components/EventApprovalLetter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add these once your pages are ready */}
        {/* <Route path="/faculty-request" element={<FacultyRequestLetter />} /> */}
        {/* <Route path="/event-approval" element={<EventApprovalLetter />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
