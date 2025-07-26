import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 text-center">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-neutral-400">
            © 2025 Farah Elloumi. All rights reserved.
          </p>
          <div className="flex space-x-6 text-2xl text-neutral-400">
            <a href="https://www.linkedin.com/in/farah-elloumi-735ab1269/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/faraheloumi" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaGithub />
            </a>
            <a href="mailto:farah.elloumi@supcom.tn" className="hover:text-purple-400">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;