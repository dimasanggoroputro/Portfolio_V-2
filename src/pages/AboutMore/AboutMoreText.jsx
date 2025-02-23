import React from "react";

const AboutMoreText = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-Hiaju drop-shadow">
        About <samp className="text-kuning">More</samp>
      </h1>
      <p className="text-center lg:text-lg text-sm text-Hitam bg-Abu p-5 rounded-md mt-4">
        I aspire to become a{" "}
        <span className="text-Hiaju font-bold">Software Engineer </span>.
        Currently, I am continuously developing my skills in web development,
        especially in <samp className="text-Hiaju font-semibold">React.js</samp>
        , and I plan to deepen my knowledge in
        <samp className="text-Hiaju font-semibold"> Next.js</samp> and
        <samp className="text-Hiaju font-semibold"> backend development</samp>.
        I am eager to keep learning and contributing to the tech industry,
        whether as a developer in a company or by building my own projects.
      </p>
    </>
  );
};

export default AboutMoreText;
