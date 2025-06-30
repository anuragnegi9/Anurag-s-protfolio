import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-21 pb-18 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-500 mt-4 text-lg font-semibold py-10">
          Hi, I'm a passionate frontend developer just starting my journey in tech.
          I enjoy building clean and responsive websites using HTML, CSS, JavaScript, and React.
          I've been learning by creating my own projects and exploring new technologies every day.
          I'm excited to grow, learn from real-world experience, and be part of a creative team.
        </p>
      </div>

    </section>
  )
}

export default Experience;