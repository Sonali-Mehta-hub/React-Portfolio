import React from "react";

function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            Hi, I'm Sonali kumari
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            "I'm a passionate and ambitious second-year B.Tech Computer Science
            student, driven by my love for creating meaningful tech solutions.
            With a strong foundation in Java and Web Development, I am now
            exploring the world of MERN stack development, broadening my skill
            set to build innovative applications."
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 rounded-full blur-lg opacity-20"></div>
          <img
            src="https://img.freepik.com/premium-psd/smiling-cartoon-businesswoman-professional-attire-generative-ai_92753-21936.jpg"
            alt="Profile"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Professional Background */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Journey from Curiosity to Code
          </h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <p className="text-lg text-gray-600">
              In 2023, during my first year of B.Tech, I began learning the
              basics of programming with C & C++ and focused on developing my
              problem-solving skills. By early 2024, I explored web development
              by taking online courses in HTML and CSS, and I built my first
              simple static website. In mid-2024, I advanced to JavaScript and
              learned how to make responsive and interactive websites.
            </p>
            <p className="text-lg text-gray-600">
              Since the beginning of 2025, I’ve been actively exploring
              full-stack development and continue to learn technologies like
              React, Node.js, and MySQL as part of my ongoing growth in web
              development.Currently,my goals are to build a MERN stack project,
              contribute to open-source communities, and understand how to
              deploy websites using platforms like Vercel and Netlify. I'm
              passionate about creating solutions that not only look great but
              also perform exceptionally well.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-indigo-600 font-semibold mb-4">
              Frontend Development
            </h3>
            <p className="text-lg text-gray-600">
              Creating beautiful and responsive user interfaces with HTML, CSS3,
              and modern js frameworks
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-purple-600 font-semibold mb-4">
              Backend Development
            </h3>
            <p className="text-lg text-gray-600">
              Building robust and scalable server solutions with java, node js,
              and cloud services
            </p>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Open Source Contributor
              </h3>
              <p className="text-lg text-gray-600">
                Active contributor to various open-source projects, focusing on
                developer tools and web frameworks
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-purple-600 font-semibold">
                Tech Community
              </h3>
              <p className="text-lg text-gray-600">
                Member of Innovation Club in My College and Organized college
                events, fests, or workshops.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-600 font-semibold">
                🏆 Achievements & Competitions
              </h3>
              <p className="text-lg text-gray-600">
                Regular participation in hackathons(like SIH,VibeCoder
                etc),Coding Contest(gfg,leetcode etc) and Certification of Top
                2% in Object Oriented Programming provided by NPTEL
                collaboration with IIT Roorkee.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600">
                Always exploring new technologies and methodologies to stay at
                the forefront of web development
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
