import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Nav } from "./components";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import MandatePage from "./pages/MandatePage";
import LeadershipPage from "./pages/LeadershipPage";
import RecoursesPage from "./pages/RecoursesPage";
import GivingPage from "./pages/GivingPage";

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
          <Route path="/recourses" element={<RecoursesPage />} />
          <Route path="/giving" element={<GivingPage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
