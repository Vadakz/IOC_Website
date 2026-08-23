import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import IndustriesPage from "./pages/IndustriesPage";
import ServiceDetails from "./pages/ServiceDetails";
import ScrollToTop from "./components/ScrollToTop";
import Journey from "./pages/Journey/Journey";
import Team from "./pages/team/team";

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
        <Route path="/journey" element={<Journey />} />
        <Route path="/team" element={<Team />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;