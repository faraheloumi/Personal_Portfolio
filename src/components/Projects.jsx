import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
      <div className="border-b border-neutral-900 pb-4"> 
        <h2 className="my-10 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Latest Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index} 
              className="w-full sm:w-80 bg-neutral-800 p-4 rounded-xl p-6 border border-neutral-700 rounded-xl bg-neutral-900 bg-opacity-10 text-center shadow-md shadow-purple-400/15"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              <p className="text-sm text-neutral-400">{project.date}</p>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-neutral-400 mt-2">{project.description}</p>
              <a href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-purple-400 hover:underline">
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;