import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Nav } from "./components";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import MandatePage from "./pages/MandatePage";
import LeadershipPage from "./pages/LeadershipPage";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/about/mandate" element={<MandatePage />} />
          <Route path="/about/leadership" element={<LeadershipPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
