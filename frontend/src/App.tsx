import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Website from "./Components/Expertise/Pages/WebDev";
import BrandAnalysis from "./Components/Expertise/Pages/BrandAnalysis";

// import BrandStrategy from "./Components/Expertise/Pages/Influencer";
// import Website from "./Components/Expertise/Pages/Financial";
import BrandStrategy from "./Components/Expertise/Pages/influencer";
import Financial from "./Components/Expertise/Pages/financial";
import SocialMedia from "./Components/Expertise/Pages/SocialMedia";
import SearchEngine from "./Components/Expertise/Pages/SearchEngine";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/performancemarketing" element={<SocialMedia />} />
        <Route path="/influencer" element={<BrandStrategy />} />
        <Route path="/brandanalysis" element={<BrandAnalysis />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/Website" element={<Website />} />
        <Route path="/content" element={<SearchEngine />} />

      </Routes>
    </Router>
  );
}

export default App;
