"use client";
import Image from "next/image";
import { Code, Brush, Server, Settings } from "lucide-react";
import Technologies from "../components/technologies";
import Footer from "../components/footer";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {loading && <Loader />}

      <section id="about" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-16 relative">
          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-10">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/profile.png"
                alt="Tanzeel Khan"
                width={300}
                height={300}
                className="rounded-lg shadow-lg border-4 border-purple-500"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-gray-300 text-lg mb-4">
                Tanzeel Naveed Khan is a dedicated <span className="text-purple-400 font-semibold">Full Stack Developer</span> from <span className="text-purple-400 font-semibold">Karachi, Pakistan</span>, passionate about building intelligent, high-performance web applications.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                With expertise in <span className="text-purple-400">Next.js, React, Python, and AI agent integration</span>, he creates scalable, responsive, and visually engaging digital solutions from sleek frontends to powerful backend systems.
              </p>
              <a
                href="/getintouch"
                className="relative inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-gray-900 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-pink-900 active:scale-95"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20">
            <h4 className="text-3xl font-bold text-center mb-6">My Skills</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-purple-900/20 p-6 rounded-lg flex flex-col items-center">
                <Code className="text-purple-400 w-10 h-10 mb-2" />
                <h4 className="font-bold mb-2">Frontend</h4>
                <p className="text-gray-400">React, Next.js, TypeScript</p>
              </div>
              <div className="bg-purple-900/20 p-6 rounded-lg flex flex-col items-center">
                <Server className="text-purple-400 w-10 h-10 mb-2" />
                <h4 className="font-bold mb-2">Backend</h4>
                <p className="text-gray-400">Node.js, Express, MongoDB</p>
              </div>
              <div className="bg-purple-900/20 p-6 rounded-lg flex flex-col items-center">
                <Brush className="text-purple-400 w-10 h-10 mb-2" />
                <h4 className="font-bold mb-2">UI/UX</h4>
                <p className="text-gray-400">Figma, Adobe XD</p>
              </div>
              <div className="bg-purple-900/20 p-6 rounded-lg flex flex-col items-center">
                <Settings className="text-purple-400 w-10 h-10 mb-2" />
                <h4 className="font-bold mb-2">CMS & DevOps</h4>
                <p className="text-gray-400">Sanity CMS, Git, Docker</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Technologies />
          </div>

          {/* Experience Section */}
          <div className="mt-20">
            <h4 className="text-4xl font-bold text-center mb-10 text-white">Experience</h4>
            <div className="flex flex-col gap-12 items-center">
              {/* Granule Services */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-3xl text-center">
                <Image
                  src="/granule.png"
                  alt="Granule Services"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-md bg-white border-2 border-purple-500 mx-auto object-cover"
                />
                <div className="mt-6">
                  <h5 className="font-bold text-2xl text-white">Full Stack Developer – Granule Services</h5>
                  <p className="text-gray-300 text-lg">2024 – Present</p>
                  <p className="text-gray-400 mt-2">
                    Building scalable APIs and dynamic interfaces with React, Next.js, Python, and AI agent integration for real-world business solutions.
                  </p>
                </div>
              </div>

              {/* Freelance Work */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-3xl text-center">
                <Image
                  src="/freelancing.jpg"
                  alt="Freelancing Code"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-md border-2 border-purple-500 mx-auto object-cover"
                />
                <div className="mt-6">
                  <h5 className="font-bold text-2xl text-white">Frontend Developer (Freelance)</h5>
                  <p className="text-gray-300 text-lg">2023 – Present</p>
                  <p className="text-gray-400 mt-2">
                    Delivered optimized UIs, dashboards, and landing pages for global clients using React and Next.js.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Education Section */}
          <div className="mt-20">
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-3xl mx-auto flex flex-col items-center text-center ">
              <Image
                src="/logo.png"
                alt="GIAIC Logo"
                width={150}
                height={150}
                className="rounded-lg shadow-md object-contain"
              />
              <span className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded-lg text-lg font-semibold">
                Senior Student
              </span>
              <div className="mt-6">
                <h5 className="font-bold text-2xl text-white">
                  GIAIC - Development And Engineering
                </h5>
                <div className="mt-4 text-gray-300 text-lg space-y-2">
                  <p><strong>Artificial Intelligence:</strong> Developing intelligent systems, machine learning models, and AI-powered applications.</p>
                  <p><strong>Web 3.0:</strong> Building decentralized applications (dApps) using blockchain, smart contracts, and distributed networks.</p>
                  <p><strong>Metaverse:</strong> Creating immersive digital experiences with AR/VR, virtual economies, and interactive 3D environments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <h4 className="text-4xl font-bold text-center mb-10 text-white">Education</h4>
            <div className="flex flex-col gap-12 items-center">
              {/* Virtual University */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-3xl text-center">
                <Image
                  src="/uv.png"
                  alt="Virtual University of Pakistan"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-md border-2 border-purple-500 mx-auto object-cover"
                />
                <div className="mt-6">
                  <h5 className="font-bold text-2xl text-white">Virtual University of Pakistan</h5>
                  <p className="text-gray-300 text-lg">BS Computer Science (2025 – 2029)</p>
                  <p className="text-gray-400 mt-2">
                    Currently pursuing a Bachelor's in Computer Science focused on full stack web development, software engineering, and AI technologies.
                  </p>
                </div>
              </div>

              {/* Sindhi Muslim College */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-3xl text-center">
                <Image
                  src="/college.jpg"
                  alt="Sindhi Muslim College"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-md border-2 border-purple-500 mx-auto"
                />
                <div className="mt-6">
                  <h5 className="font-bold text-2xl text-white">Sindhi Muslim College</h5>
                  <p className="text-gray-300 text-lg">Intermediate</p>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </section>
    </div>
  );
};

export default About;
