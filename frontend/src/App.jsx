import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import IndustriesPage from "./pages/IndustriesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />
      <Route path="/industries" element={<IndustriesPage />} />
    </Routes>
  );
}

export default App;