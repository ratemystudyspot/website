import Image from "next/image";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-white py-5 text-center">
      <a
        href="#"
        className="mb-2 flex items-center justify-center text-2xl font-semibold text-gray-900"
      >
        <Image
          src="./logo.png"
          className="mr-3 h-12 sm:h-9"
          alt="ratemystudyspot logo"
        />
        RateMyStudySpot
      </a>

      <span className="block text-center text-sm text-gray-500">
        © 2024 RateMyStudySpot. All Rights Reserved.
      </span>

      {/*The logos for the bottom*/}
      <ul className="mt-5 flex justify-center space-x-5">
        <li>
          <a
            href="https://github.com"
            className="text-gray-500 hover:text-gray-900"
            aria-label="Github"
          >
            <i className="fab fa-github size-5"></i>
          </a>
        </li>
        <li>
          <a
            href="https://discord.com"
            className="text-gray-500 hover:text-gray-900"
            aria-label="Discord"
          >
            <i className="fab fa-discord size-5"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
