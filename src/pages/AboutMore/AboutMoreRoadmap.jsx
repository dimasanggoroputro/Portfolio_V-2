import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faUniversity } from "@fortawesome/free-solid-svg-icons";

const roadmapData = [
  { year: "2014 - 2020", school: "SDN Perwira 1 Kota Bekasi", icon: faSchool },
  { year: "2020 - 2023", school: "SMPN 25 Kota Bekasi", icon: faSchool },
  {
    year: "2023 - Sekarang",
    school: "SMK CaturGlobal Kota Bekasi",
    icon: faUniversity,
  },
];

const AboutMoreRoadmap = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-kuning drop-shadow">
        <span className="text-Hiaju ">My Education</span> Roadmap
      </h2>
      <div className="flex flex-col md:flex-row items-center md:justify-center md:space-y-0 md:space-x-12 overflow-x-auto p-4">
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-Hiaju text-Putih shadow-md">
              <FontAwesomeIcon icon={item.icon} size="lg" />
            </div>
            <div className="mt-4 text-base md:text-lg font-semibold">
              {item.school}
            </div>
            <div className="text-gray-600 text-sm md:text-base">
              {item.year}
            </div>
            {index < roadmapData.length - 1 && (
              <div className="md:hidden w-1 h-12 bg-kuning"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMoreRoadmap;
