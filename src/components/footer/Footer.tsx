import React from 'react';

const Footer = () => {
  return (
    <div className="fixed bottom-0 pt-5 pb-5 text-center w-full bg-white">
        <a href="#" className="flex items-center justify-center mb-2 text-2xl font-semibold text-gray-900">
            <img src="./logo.png" className="h-12 mr-3 sm:h-9" alt="ratemystudyspot logo"/>
            RateMyStudySpot
        </a>
        
        <span className="block text-sm text-center text-gray-500">© 2024 RateMyStudySpot. All Rights Reserved.</span>

        <ul className="flex justify-center mt-5 space-x-5">
            <li>
                <a href="https://github.com" className="text-gray-500 hover:text-gray-900" aria-label="Github">
                    <i className="fab fa-github w-5 h-5"></i>
                </a>
            </li>
            <li>
                <a href="https://discord.com" className="text-gray-500 hover:text-gray-900" aria-label="Discord">
                    <i className="fab fa-discord w-5 h-5"></i>
                </a>
            </li>
        </ul>
    </div>
  );
};

export default Footer;
