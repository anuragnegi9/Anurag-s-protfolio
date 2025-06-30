import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import ProfilePicture from '../../assets/profilePicture.jpg'

const about = () => {
  return (
    <section id="about"
      className="py-21 pb-18 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2">

      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* Left Side */}

        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Anurag Negi
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white"> I am a </span>

            <Typewriter
              words={['FrontEnd Developer', 'Coder']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          {/* About Me Paragraph */}

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm Anurag Negi — a passionate Frontend Developer
            with a strong foundation in HTML, CSS, JavaScript, and React.js.
            I enjoy building clean, responsive, and user-friendly websites. Currently,
            I'm focused on improving my skills in modern frontend frameworks and creating
            real-world projects to grow as a developer. I'm always eager to learn, collaborate, and take on new challenges.

          </p>
          {/* Resume Button */}

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>

        {/* Right Side */}

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}>

            <img

              src={ProfilePicture}
              alt="Anurag Negi"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"

            />

          </Tilt>
        </div>
      </div>
    </section >
  )
}

export default about;

