import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Performance from "./Components/Expertise/Pages/Performance";
import BrandAnalysis from "./Components/Expertise/Pages/BrandAnalysis";
import BrandStrategy from "./Components/Expertise/Pages/BrandStrategy";
import Website from "./Components/Expertise/Pages/Website";
import SocialMedia from "./Components/Expertise/Pages/SocialMedia";
import SearchEngine from "./Components/Expertise/Pages/SearchEngine";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/performancemarketing" element={<Performance />} />
        <Route path="/brandstrategy" element={<BrandStrategy />} />
        <Route path="/brandanalysis" element={<BrandAnalysis />} />
        <Route path="/websitedevelopmentmanagement" element={<Website />} />
        <Route path="/socialmediamanagement" element={<SocialMedia />} />
        <Route path="/searchengineoptimization" element={<SearchEngine />} />

      </Routes>
    </Router>
  );
}

export default App;
