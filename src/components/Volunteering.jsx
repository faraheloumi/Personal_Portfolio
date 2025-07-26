import { events } from "../constants";
import { motion } from "framer-motion";

const Volunteering = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 lg:mb-20">
      <div className="mb-10">
        <h2 className="my-10 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Volunteering</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <motion.div 
            key={index} 
            className="relative group overflow-hidden rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:blur-md"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-4 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-lg font-bold">{event.title}</h3>
              <p className="text-sm opacity-90">{event.date}</p>
              <p className="text-sm mt-2">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;