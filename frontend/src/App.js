import LandingPage from "./pages/LandingPage";
import ChatPage from "./pages/ChatPage";
import ChatDrawer from "./pages/Drawer";
import LogInPage from "./pages/LogInPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/drawer" element={<ChatDrawer />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
