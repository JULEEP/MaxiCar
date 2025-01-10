import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DemoPage from "./Pages/DemoPage";
import HomePage from './Pages/Homepage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
