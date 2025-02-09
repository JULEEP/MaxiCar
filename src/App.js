
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DemoPage from "./Pages/DemoPage";
import HomePage from './Pages/Homepage'
import PricingCart from "./Pages/Pricing";
import TermCondition from "./Pages/TermCondition";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/price" element={<PricingCart />} />
        <Route path="/term" element={<TermCondition />} />


      </Routes>
    </Router>
    </>
  );
}

export default App;
