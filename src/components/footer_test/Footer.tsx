import clsx from "clsx";
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
  bgColor?: string; // Optional background color prop
  textColor?: string; // Optional text color prop
  company_text_colour?: string;
  date_text_colour?: string;
  textHoverColor?: string; // New optional prop for hover color
}

export default function Footer({
  RateMyStudySpot,
  bgColor = "bg-gray-800",
  textColor = "text-white", // Default Tailwind color
  date_text_colour = "#ffffff",
  company_text_colour = "#ffffff",
  textHoverColor = "hover:text-blue-400", // Default Tailwind hover color
}: FooterProps) {
  return (
    <footer
      className={clsx(
        "w-full border-b border-t border-gray-700 p-2",
        bgColor, // Tailwind class for background color
      )}
    >
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
            <p className={clsx("text-sm font-semibold", date_text_colour)}>
              &copy; 2024{" "}
              <span className={clsx(company_text_colour)}>
                RateMyStudySpot.ca
              </span>
            </p>
          </div>

          {/* Links Section */}
          <div className="mb-4 flex flex-wrap justify-center space-x-6 text-sm font-medium md:mb-0">
            <Link
              href="#"
              className={clsx(
                "footer-link",
                textColor,
                textHoverColor,
                "transition-colors duration-300",
              )}
            >
              Support
            </Link>
            <Link
              href="#"
              className={clsx(
                "footer-link",
                textColor,
                textHoverColor,
                "transition-colors duration-300",
              )}
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className={clsx(
                "footer-link",
                textColor,
                textHoverColor,
                "transition-colors duration-300",
              )}
            >
              Follow Us
            </Link>
            <Link
              href="#"
              className={clsx(
                "footer-link",
                textColor,
                textHoverColor,
                "transition-colors duration-300",
              )}
            >
              About Us
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-6 md:space-y-0">
            <div
              className={clsx("flex items-center space-x-2 text-sm", textColor)}
            >
              <FaGlobe className="text-black-300 transition-colors duration-300 hover:text-gray-600" />
              <span>English (CA)</span>
            </div>

            <div className="flex space-x-4">
              <a
                href={RateMyStudySpot.github}
                className="text-black transition-colors duration-300 hover:text-gray-900"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl transition-transform duration-300 hover:scale-110" />
              </a>
              <a
                href={RateMyStudySpot.instagram}
                className="text-pink-500 transition-colors duration-300 hover:text-pink-700"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl transition-transform duration-300 hover:scale-110" />
              </a>
              <a
                href="#"
                className="text-blue-700 transition-colors duration-300 hover:text-blue-600"
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
