import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CallAccept from "./screens/callAccept";
import Calling from "./screens/calling";
import Feedback from "./screens/feedback";
import Consultation from "./screens/consultation";
import ConsultationEnd from "./screens/consultationEnd";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CallAccept />} />
        <Route path="/calling" element={<Calling />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/consultationEnd" element={<ConsultationEnd />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
