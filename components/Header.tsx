// components/Header.tsx
import { useState } from 'react';

interface HeaderProps {
  isLoggedin: boolean; // isLoggedin prop'unu burada tanımlayın
  onLogout: () => void; // onLogout prop'unu burada tanımlayın
}

const Header: React.FC<HeaderProps> = ({ isLoggedin, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white font-bold text-xl">Metamask Login</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md transition-all"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md transition-all"
            >
              About
            </a>
            {/* Add more menu items as needed */}
          </div>
          <div className="md:hidden flex items-center">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="#" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          {/* Add more menu items as needed */}
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:space-x-6">
        {/* Show logout button if user is logged in */}
        {isLoggedin && (
          <button
            onClick={onLogout}
            className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-md text-base font-medium"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
