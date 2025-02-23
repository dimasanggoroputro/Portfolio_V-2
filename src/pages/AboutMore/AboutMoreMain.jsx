import AboutMoreBack from "./AboutMoreBack";
import AboutMoreRoadmap from "./AboutMoreRoadmap";
import AboutMoreText from "./AboutMoreText";
import Footer from "@/components/Footer/Footer";

const AboutMoreMain = () => {
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
