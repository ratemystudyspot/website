import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./footer.css";

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
    <footer className="w-full bg-white pb-4 pt-4">
      {/* Logo and Navigation Links */}
      <div className="container mx-auto mb-4 px-4 text-black">
        <div className="flex flex-col items-center">
          <div className="mb-2 flex space-x-4">
            <Link href="#" className="custom-underline text-md font-sans">
              Support /
            </Link>
            <Link href="#" className="custom-underline text-md font-sans">
              Contact Us /
            </Link>
            <Link href="#" className="custom-underline text-md font-sans">
              Follow Us /
            </Link>
            <Link href="#" className="custom-underline text-md font-sans">
              About Us
            </Link>
          </div>
          <hr className="border-y-1 mx-4 my-2 w-full rounded-md border-black" />
        </div>
      </div>

      {/* Bottom Section with Icons and Text */}
      <div className="bottom-section container mx-auto px-4 text-black">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Centered Content */}
          <div className="mb-4 flex items-center space-x-2 text-center md:mb-0 md:text-left">
            <Link href="#">
              <Image
                src="/logo192.png" // Ensure the path is correct relative to the public directory
                alt="RateMyStudySpot Logo"
                width={40} // Adjust width as needed
                height={40} // Adjust height as needed
                className="cursor-pointer rounded-full" // Make logo rounded and add pointer cursor
              />
            </Link>
            <p className="typing-animation text-md font-sans">
              &copy; 2024 RateMyStudySpot.ca
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <FaGlobe className="text-xs text-gray-600 md:text-sm" />
              <span className="text-md md:text-md font-sans">English (CA)</span>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={RateMyStudySpot.github}
                className="flex items-center space-x-1 text-gray-600 hover:underline"
              >
                <FaGithub className="text-lg md:text-lg" />
              </a>
              <a
                href={RateMyStudySpot.instagram}
                className="flex items-center space-x-1 text-red-500 hover:underline"
              >
                <FaInstagram className="text-lg md:text-lg" />
              </a>
              <a
                href="#"
                className="flex items-center space-x-1 text-blue-500 hover:underline"
              >
                <FaLinkedin className="text-lg md:text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
