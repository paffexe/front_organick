"use client";

import { useState, useRef, useEffect } from "react";

const ArrowIcon = ({ isOpen }) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-transform duration-300 ease-out ${
      isOpen ? "rotate-180" : "rotate-0"
    }`}
  >
    <path
      d="M0.75 0.75L3.75 3.75L6.75 0.75"
      stroke="#274C5B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const menuItems = ["Option1", "Option2", "Option3", "Option4"];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div ref={dropdownRef} className="relative ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-2 py-2 cursor-pointer border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors duration-200"
        >
          <span className="text-display">Pages</span>
          <ArrowIcon isOpen={isOpen} />
        </button>

        {isOpen && (
          <div className="absolute top-full   mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-display cursor-pointer hover:bg-blue-50 transition-colors duration-150"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
