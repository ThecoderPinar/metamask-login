// components/Footer.tsx
import { useState } from 'react';

const Footer: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div>
            <p>© 2023 Your Company. All rights reserved.</p>
          </div>
          <div className="md:hidden mt-4">
            <button
              onClick={handleMenuToggle}
              className="text-white hover:bg-white hover:bg-opacity-10 p-2 rounded-md transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Mobile menu */}
          <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="mt-4 md:mt-0 md:ml-6 space-x-4 md:space-x-2 md:space-y-0 space-y-2">
              <li>
                <a href="#" className="text-white hover:underline block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline block">
                  Terms of Service
                </a>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
