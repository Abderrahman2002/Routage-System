import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Start Bootstrap</div>
        <div className="hidden md:flex space-x-6 text-sm">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/shop" className="hover:text-blue-600">Shop</Link>
        </div>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700">
          Cart (0)
        </button>
        <button onClick={toggleMenu} className="md:hidden text-gray-800 focus:outline-none">
          {isOpen ? (
            <i className="fas fa-times"></i> // Icone de fermeture
          ) : (
            <i className="fas fa-bars"></i> // Icone de menu
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link to="/" className="block hover:text-blue-600">Home</Link>
          <Link to="/about" className="block hover:text-blue-600">About</Link>
          <Link to="/shop" className="block hover:text-blue-600">Shop</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
