"use client";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl sm:text-4xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-5xl sm:text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl sm:text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-5xl sm:text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl sm:text-4xl" /> },
  { name: "Python", icon: <FaPython className="text-blue-300 text-5xl sm:text-4xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl sm:text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl sm:text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-5xl sm:text-4xl" /> },
];

const TechCarousel = () => {
  return (
    <div className="w-full overflow-hidden py-4">
      <div className="flex items-center space-x-8 animate-scroll">
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="flex flex-col items-center text-white min-w-[130px] sm:min-w-[100px]">
            {tech.icon}
            <span className="mt-2 text-base sm:text-sm">{tech.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 8s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default TechCarousel;
