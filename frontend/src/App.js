import LandingPage from "./pages/LandingPage";
import ChatDrawer from "./pages/Drawer";
import LogInPage from "./pages/LogInPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import { MyContextProvider } from "./context/context";

function App() {
  return (
    <MyContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/drawer" element={<ChatDrawer />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </MyContextProvider>
  );
}

export default App;
