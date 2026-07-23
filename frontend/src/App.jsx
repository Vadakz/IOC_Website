import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import IndustriesPage from "./pages/IndustriesPage";
import ServiceDetails from "./pages/ServiceDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;