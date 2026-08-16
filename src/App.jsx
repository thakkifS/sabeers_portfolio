import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievement from "./components/Achievement";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import SocialMediaRail from "./components/SocialMediaRail";

export default function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Achievement />
        <Education />
        <Footer />
        <SocialMediaRail />
      </main>
      <MobileBottomNav />
    </>
  );
}
