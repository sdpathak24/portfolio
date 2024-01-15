import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { SiHackerone } from "react-icons/si";
import { FiMoon } from "react-icons/fi";
import "../styles/navbar.css";

const Navbar = () => {
  const wrapperRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0 && !isScrolled) {
        setIsScrolled(true);
        wrapperRef.current.classList.add("scrolled");
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
        wrapperRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    // Add or remove dark mode class based on the darkMode state
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = (e) => {
    e.preventDefault(); // Prevents the default behavior of the anchor tag
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div>
      <div ref={wrapperRef} className={`wrapper ${darkMode ? "dark-modeWrap" : ""}`}>
        <div className="name">S D Pathak</div>
        <div className={`socials ${darkMode ? "dark-modeSoc" : ""}`}>
          <a href="" onClick={toggleDarkMode}>
            <FiMoon />
          </a>
          <a href="https://www.linkedin.com/in/sarvagn-pathak-482274247/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/sdpathak24" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.twitter.com/sdpathak24" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <SiHackerone />
          </a>
          <a href="mailto: sarvagnpathak03@gmail.com">
            <IoMailSharp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
