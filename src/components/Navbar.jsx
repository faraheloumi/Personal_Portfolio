import logo from "../assets/Logo.png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-10"
          src={logo}
          alt="logo"
          style={{ width: "100px", height: "auto" }}
        />
      </div>
      <div className="flex space-x-6 text-lg">
        <a href="#hero" className="hover:text-purple-700">Home</a>
        <a href="#aboutme" className="hover:text-purple-700">About Me</a>
        <a href="#experience" className="hover:text-purple-700">Experience</a>
        <a href="#projects" className="hover:text-purple-700">Projects</a>
        <a href="#certificates" className="hover:text-purple-700">Certificates</a>
        <a href="#volunteering" className="hover:text-purple-700">Volunteering</a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/farah-elloumi-735ab1269/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/faraheloumi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:farah.elloumi@supcom.tn">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;