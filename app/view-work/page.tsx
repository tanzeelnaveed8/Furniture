"use client";
import Image from "next/image";
import { Code2, ExternalLink, Github } from "lucide-react";
import { SiNextdotjs, SiReact, SiTailwindcss, SiSanity, SiMongodb, SiExpress, SiFirebase, SiStripe, SiPython } from "react-icons/si";
import Footer from "../components/footer";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const projects = [
     {
      title: "Furniture Marketplace",
      description: `A custom-built furniture eCommerce website.

Key Features:
• Sanity CMS for inventory
• Stripe Checkout
• Full search and filter system
• Optimized for mobile devices.`,
      image: "/f.png",
      tech: [SiNextdotjs, SiSanity, SiTailwindcss, SiStripe, SiMongodb],
      live: "https://furniture-psi-brown.vercel.app/",
    },
    {
      title: "O C E",
      description: `An AI agent-powered tool that summarizes any article URL.

Key Features:
• Python Agent backend (FastAPI)
• GPT summarization logic
• Chrome Extension-ready UI
• Clean Tailwind styling`
      ,
      image: "/oce.png",
      tech: [SiReact, SiTailwindcss, SiPython],
      live: "https://onlinecourseexperts.com/",
    },
    {
      title: "Nike Store App",
      description: `A modern e-commerce platform delivering seamless shopping.

Key Features:
• CMS-Powered – Sanity CMS for product management.
• Tailwind UI – Sleek, fast frontend.
• Secure Stripe Payments.
• Clerk Auth – Account-based features.
• Next.js SSR – Lightning-fast load times.`,
      image: "/e-commerce.png",
      tech: [SiNextdotjs, SiReact, SiTailwindcss, SiSanity, SiMongodb],
      live: "https://nike-app-liard.vercel.app/",
    },
    {
      title: "Optimise HealthCare App",
      description: `A web app that simplifies healthcare appointment systems.

Key Features:
• Real-Time Bookings – Seamless scheduling.
• Sanity CMS – Article & blog updates.
• Stripe Integration – Fast payments.
• Fully Responsive – Built with Tailwind.`,
      image: "/health.png",
      tech: [SiNextdotjs, SiReact, SiTailwindcss, SiSanity, SiStripe],
      live: "https://healthcare-website-one.vercel.app/",
    },
    {
      title: "Resume Builder Platform",
      description: `Drag-and-drop resume builder with beautiful themes.

Key Features:
• Export PDF/Image
• Pre-built Templates
• Firebase Auth
• Responsive Dark UI`
      ,
      image: "/resume.png",
      tech: [SiReact, SiTailwindcss, SiFirebase, SiExpress, SiMongodb],
      live: "https://al-zeel-resume-builder.vercel.app/",
    },
   
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      {loading && <Loader />}

      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-white">
            <p className="text-gray-400 mb-4">
              The <span className="text-purple-400 font-semibold">Work Section</span> showcases high-performance projects
              built using <strong>Next.js, React, Tailwind CSS, and Python agents</strong>.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li><strong>Modern UI</strong> – Intuitive designs across all screen sizes.</li>
              <li><strong>AI Agents</strong> – Implemented using Python for automation & intelligence.</li>
              <li><strong>CMS + APIs</strong> – Dynamic content & real-time updates.</li>
              <li><strong>Live Demo</strong> – Explore all projects online.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-4 items-center">
              <a
                href="/getintouch"
                className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-gray-900 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/tanzeelnaveed8"
                target="_blank"
                className="flex gap-2 items-center px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all"
              >
                <Github /> GitHub
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <Image
              src="/freelancing.jpg"
              alt="Coding Illustration"
              width={420}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 mt-20">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-2 text-white">
            <Code2 className="text-purple-500" /> Featured Projects
          </h3>

          <div className="flex flex-col gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-purple-900/20 rounded-lg overflow-hidden flex flex-col lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="w-full lg:w-1/2 h-96">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
                  <h4 className="text-white text-2xl font-bold mb-4">{project.title}</h4>
                  <p className="text-gray-400 whitespace-pre-line mb-4">{project.description}</p>
                  <div className="flex gap-4 text-white text-2xl mb-4">
                    {project.tech.map((Icon, i) => (
                      <Icon key={i} className="hover:text-purple-300" />
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-300"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
};

export default Projects;
