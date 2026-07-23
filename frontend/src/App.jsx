import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import IndustriesPage from "./pages/IndustriesPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
      </Routes>
    </>
  );
}

export default App;