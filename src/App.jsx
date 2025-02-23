import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutMain from "./components/About/AboutMain";
import HeroBubble from "./components/Hero/HeroBubble";
import HeroMain from "./components/Hero/HeroMain";
import NavbarMain from "./components/Navbar/NavbarMain";
import AboutMoreMain from "./pages/AboutMore/AboutMoreMain";
import ProjectsMain from "./components/Projects/ProjectsMain";
import ContactMain from "./components/Contact/ContactMain";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulasi loading selama 2 detik
  }, []);

  useEffect(() => {
    if (location.state?.scrollToAbout) {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main className="relative overflow-hidden">
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavbarMain />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroMain />
                  <HeroBubble />
                  <section id="about">
                    <AboutMain />
                  </section>
                  <ProjectsMain />
                  <ContactMain />
                  <Footer />
                </>
              }
            />
            <Route path="/more-about" element={<AboutMoreMain />} />
          </Routes>
        </>
      )}
    </main>
  );
}

export default App;
