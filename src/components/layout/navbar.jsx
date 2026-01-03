import React, { useState } from "react";
import defaultImg from "../../assets/default.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Games", href: "/game", icon: "🎮" },
    { name: "Chatbox", href: "/chat", icon: "💬" },
    { name: "Contact", href: "/contact", icon: "📞" },
  ];

  const profileMenuItems = [
    { name: "My Profile", href: "/profile", icon: "👤" },
    { name: "Settings", href: "/settings", icon: "⚙️" },
    { name: "Logout", href: "/logout", icon: "🚪" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-extrabold text-2xl">
                C
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-xl font-bold tracking-tight">
                ChaKdav APP
              </span>
              <span className="text-blue-200 text-xs font-medium tracking-wider">
                Gaming & Community
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-2 text-white hover:bg-white/10 px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-lg group"
              >
                <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
                <span className="w-0 group-hover:w-full h-0.5 bg-yellow-400 absolute bottom-0 left-0 transition-all duration-300"></span>
              </Link>
            ))}

            {/* Profile Dropdown */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={defaultImg}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-white/50 object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-white font-medium hidden lg:block">
                  John Doe
                </span>
                <svg
                  className={`w-4 h-4 text-white transform transition-transform duration-300 ${
                    isProfileMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl py-2 z-50 border border-white/20">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <img
                        src={defaultImg}
                        alt="Profile"
                        className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold">John Doe</p>
                        <p className="text-gray-600 text-sm">Pro Member</p>
                      </div>
                    </div>
                  </div>
                  {profileMenuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Profile Button */}
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="relative"
            >
              <img
                src={defaultImg}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white/50 object-cover"
              />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-blue-700/95 to-purple-700/95 backdrop-blur-lg rounded-2xl mt-2 mb-4 shadow-2xl border border-white/20">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-4 text-white hover:bg-white/20 px-4 py-3 rounded-xl transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium text-lg">{item.name}</span>
                  <span className="flex-1"></span>
                  <span className="text-white/50">→</span>
                </a>
              ))}

              {/* Mobile Profile Info */}
              <div className="pt-4 border-t border-white/20 mt-4">
                <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-xl">
                  <img
                    src={defaultImg}
                    alt="Profile"
                    className="w-12 h-12 rounded-full border-2 border-white/50 object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-white font-semibold">John Doe</p>
                    <p className="text-blue-200 text-sm">Online Now</p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  {profileMenuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.icon}</span>
                      <span className="text-sm font-medium">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
