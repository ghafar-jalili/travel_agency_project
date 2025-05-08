import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/img/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const destinations = [
        { name: "Beach Getaways", path: "/places" },
        { name: "Mountain Retreats", path: "/places" },
        { name: "City Tours", path: "/places" },
        { name: "Adventure Travel", path: "/places" }
    ];

    const services = [
        { name: "Flight Booking", path: "/pages/booking" },
        { name: "Hotel Reservations", path: "/pages/booking" },
        { name: "Tour Packages", path: "/pages/booking" },
        { name: "Travel Insurance", path: "/pages/booking" }
    ];

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-container')) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="sticky top-0 z-10 bg-white shadow-lg">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center flex-shrink-0">
                            <img
                                className="w-auto h-10"
                                src={logo}
                                alt="Travel Agency"
                            />
                            <span className="ml-1 text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">Jalili Travel Agency</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
                        >
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="items-center hidden space-x-8 md:flex">
                        <NavLink
                            to="/"
                            activeClassName="text-blue-600"
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                        >
                            Home
                        </NavLink>
                        {/* Destinations dropdown */}
                        <div className="relative dropdown-container group">
                            <div className="flex items-center">
                                <NavLink
                                    to="/places"
                                    activeClassName="text-blue-600"
                                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                                >
                                    Destinations
                                </NavLink>
                                <button
                                    onClick={() => toggleDropdown('destinations')}
                                    className="p-1 text-gray-500 hover:text-blue-600 focus:outline-none"
                                >
                                    <svg
                                        className={`h-5 w-5 transition-transform ${activeDropdown === 'destinations' ? 'transform rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {activeDropdown === 'destinations' && (
                                <div className="absolute z-10 w-56 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="py-1">
                                        {destinations.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Services dropdown */}
                        <div className="relative dropdown-container group">
                            <div className="flex items-center">
                                <NavLink
                                    to="/services"
                                    activeClassName="text-blue-600"
                                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                                >
                                    Services
                                </NavLink>
                                <button
                                    onClick={() => toggleDropdown('services')}
                                    className="p-1 text-gray-500 hover:text-blue-600 focus:outline-none"
                                >
                                    <svg
                                        className={`h-5 w-5 transition-transform ${activeDropdown === 'services' ? 'transform rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {activeDropdown === 'services' && (
                                <div className="absolute z-10 w-56 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="py-1">
                                        {services.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Other links */}
                        <NavLink
                            to="/contact"
                            activeClassName="text-blue-600"
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                        >
                            Contact
                        </NavLink>

                        <NavLink
                            to="/about"
                            activeClassName="text-blue-600"
                            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                        >
                            About Us
                        </NavLink>

                        <div className="flex items-center ml-4 space-x-4">
                            <Link
                                to="/login"
                                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:opacity-90 hover:bg-blue-700"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {/* Mobile Destinations */}
                    <div className="dropdown-container">
                        <div className="flex items-center justify-between">
                            <NavLink
                                to="/places"
                                activeClassName="text-blue-600"
                                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                Destinations
                            </NavLink>
                            <button
                                onClick={() => toggleDropdown('mobile-destinations')}
                                className="p-1 text-gray-500 hover:text-blue-600 focus:outline-none"
                            >
                                <svg
                                    className={`h-5 w-5 transition-transform ${activeDropdown === 'mobile-destinations' ? 'transform rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {activeDropdown === 'mobile-destinations' && (
                            <div className="pl-4">
                                {destinations.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:text-blue-600 hover:bg-gray-50"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Services */}
                    <div className="dropdown-container">
                        <div className="flex items-center justify-between">
                            <NavLink
                                to="/services"
                                activeClassName="text-blue-600"
                                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </NavLink>
                            <button
                                onClick={() => toggleDropdown('mobile-services')}
                                className="p-1 text-gray-500 hover:text-blue-600 focus:outline-none"
                            >
                                <svg
                                    className={`h-5 w-5 transition-transform ${activeDropdown === 'mobile-services' ? 'transform rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {activeDropdown === 'mobile-services' && (
                            <div className="pl-4">
                                {services.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:text-blue-600 hover:bg-gray-50"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Other Mobile Links */}
                    <NavLink
                        to="/contact"
                        activeClassName="text-blue-600"
                        className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="text-blue-600"
                        className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        About Us
                    </NavLink>
                    <Link
                        to="/login"
                        className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="block px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:opacity-90 hover:bg-blue-700"
                        onClick={() => setIsOpen(false)}
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
