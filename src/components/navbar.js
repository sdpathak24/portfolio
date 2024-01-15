import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { SiHackerone } from "react-icons/si";
import "../styles/navbar.css";

const Navbar = () => {
  const wrapperRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div>
      <div ref={wrapperRef} className="wrapper">
        <div className="name">S D Pathak</div>
        <div className="socials">
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
