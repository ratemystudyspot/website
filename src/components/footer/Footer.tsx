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
  bgFooter?: string;
  footerLink?: string;
  logoText?: string;
  dateText?: string;
  onLinkHover?: string;
}

export default function Footer({
  RateMyStudySpot,
  bgFooter = "bg-gray-800",
  footerLink = "text-white",
  logoText = "#ffffff",
  dateText = "#ffffff",
  onLinkHover = "hover:text-blue-400",
}: FooterProps) {
  return (
    <footer
      className={clsx(
        "w-full border-b border-t border-gray-700 p-2",
        bgFooter, // Tailwind class for background color
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Centered Content */}
          <div className="mb-4 flex items-center space-x-3 text-center md:mb-0 md:text-left">
            <Link href="#">
              <Image
                src={RateMyStudySpot.logo}
                alt="RateMyStudySpot Logo"
                width={40}
                height={40}
                className="rounded-full border-2 border-blue-100 shadow-md transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className={clsx("text-sm font-semibold", dateText)}>
              &copy; 2024{" "}
              <span className={clsx(logoText)}>RateMyStudySpot.ca</span>
            </p>
          </div>

          {/* Links Section */}
          <div className="mb-4 flex flex-wrap justify-center space-x-6 text-sm font-medium md:mb-0">
            <Link
              href="#"
              className={clsx(
                "footer-link",
                footerLink,
                onLinkHover,
                "transition-colors duration-300",
              )}
            >
              Support
            </Link>
            <Link
              href="#"
              className={clsx(
                "footer-link",
                footerLink,
                onLinkHover,
                "transition-colors duration-300",
              )}
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className={clsx(
                "footer-link",
                footerLink,
                onLinkHover,
                "transition-colors duration-300",
              )}
            >
              Follow Us
            </Link>
            <Link
              href="#"
              className={clsx(
                "footer-link",
                footerLink,
                onLinkHover,
                "transition-colors duration-300",
              )}
            >
              About Us
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-6 md:space-y-0">
            <div
              className={clsx(
                "flex items-center space-x-2 text-sm",
                footerLink,
              )}
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
