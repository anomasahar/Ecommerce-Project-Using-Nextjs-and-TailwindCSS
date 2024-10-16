import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-foreground"
        aria-label="Toggle Menu"
      >
        <FiMenu className="text-white w-6 h-6" />
      </button>

      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md z-50 p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="/" className="text-lg font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="/product" className="text-lg font-semibold">
                Shop
              </a>
            </li>
            <li>
              <a href="/about-us" className="text-lg font-semibold">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact-us" className="text-lg font-semibold">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
