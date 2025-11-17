import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Belajar from "./assets/components/belajar";
import SplitText from "./assets/components/SplitText";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/belajar" element={<Belajar />} />
      <Route path="/splittext" element={<SplitText />} />
      </Routes>
    </Router>

  );
}

export default App;

