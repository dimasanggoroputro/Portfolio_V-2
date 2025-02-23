import AboutMoreBack from "./AboutMoreBack";
import AboutMoreRoadmap from "./AboutMoreRoadmap";
import AboutMoreText from "./AboutMoreText";
import Footer from "@/components/Footer/Footer";
import { useEffect } from "react";

const AboutMoreMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat halaman dibuka
  }, []);
  return (
    <>
      <div className="pt-24 lg:px-64 px-5 flex flex-col items-center justify-center bg-Putih">
        <AboutMoreText />
        <AboutMoreRoadmap />
        <AboutMoreBack />
      </div>
      <Footer />
    </>
  );
};

export default AboutMoreMain;
