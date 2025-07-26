import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-20">
      <h2 className="text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
        About Me
      </h2>
      <p className="my-2 max-w-xl py-6 text-center max-w-3xl mx-auto text-neutral-400 text-xl font-light tracking-tight mb-12">
        {ABOUT_TEXT}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[ 
          {
            icon: "🧑‍💻",  
            title: "Passion for DevOps Innovation",  
            text: "Driven by a strong passion for DevOps, I am fascinated by its impact on automation, reliability, and deployment speed. I am especially interested in continuous integration, containerization, and cloud infrastructure, and I am eager to contribute to the continuous improvement of modern systems."

          },
          {
            icon: "👥", 
            title: "Interpersonal and Leadership Skills", 
            text: "Throughout my experiences, I have developed a wide range of interpersonal and leadership skills essential for thriving in collaborative environments. I continuously strive to enhance my communication, problem-solving, and adaptability, ensuring that I am well-equipped to lead projects, and navigate complex tasks efficiently."
          },
          {
            icon: "🌿", 
            title: "Commitment to Personal Development", 
            text: "Committed to continuous personal and professional development, I actively seek out new challenges that foster growth and self-improvement. I believe in maintaining a healthy work-life balance, staying active, and setting aside time for personal interests and well-being."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 border border-neutral-700 rounded-xl bg-neutral-900 bg-opacity-10 text-center shadow-lg shadow-purple-400/30"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl text-blue-400 mb-4">{item.icon}</div>
            <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-neutral-400 text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;