import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Coverage from "../components/Coverage/Coverage";
import WhyChoose from "../WhyChoose/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <Coverage/>
      <WhyChoose/>
    </>
  );
}