import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";

interface FooterProps {
  RateMyStudySpot: {
    instagram: string;
    discord: string;
    github: string;
    logo: string;
  };
}

export default function Footer({ RateMyStudySpot }: FooterProps) {
  return (
    <footer className="w-full border-b border-t border-gray-700 p-2 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Centered Content */}
          <div className="mb-4 flex items-center space-x-3 text-center md:mb-0 md:text-left">
            <Link href="#">
              <Image
                src="/logo192.png"
                alt="RateMyStudySpot Logo"
                width={30}
                height={30}
                className="transform cursor-pointer rounded-full transition-transform hover:scale-110"
              />
            </Link>
            <p className="text-sm font-semibold">
              &copy; 2024{" "}
              <span className="text-blue-300">RateMyStudySpot.ca</span>
            </p>
          </div>

          {/* Links Section */}
          <div className="mb-4 flex flex-wrap justify-center space-x-6 text-sm font-medium md:mb-0">
            <Link
              href="#"
              className="text-blue-200 transition-colors duration-300 hover:text-blue-400"
            >
              Support
            </Link>
            <Link
              href="#"
              className="text-blue-200 transition-colors duration-300 hover:text-blue-400"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="text-blue-200 transition-colors duration-300 hover:text-blue-400"
            >
              Follow Us
            </Link>
            <Link
              href="#"
              className="text-blue-200 transition-colors duration-300 hover:text-blue-400"
            >
              About Us
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-6 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm">
              <FaGlobe className="text-gray-300 transition-colors duration-300 hover:text-gray-100" />
              <span>English (CA)</span>
            </div>

            <div className="flex space-x-4">
              <a
                href={RateMyStudySpot.github}
                className="text-gray-300 transition-colors duration-300 hover:text-gray-100"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl transition-transform duration-300 hover:scale-110" />
              </a>
              <a
                href={RateMyStudySpot.instagram}
                className="text-pink-400 transition-colors duration-300 hover:text-pink-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl transition-transform duration-300 hover:scale-110" />
              </a>
              <a
                href="#"
                className="text-blue-400 transition-colors duration-300 hover:text-blue-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl transition-transform duration-300 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
