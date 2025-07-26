import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "20px",
          backgroundColor: "#232f3e",
          color: "#fff",
          border: "none",
          padding: "10px 14px",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          zIndex: 999,
        }}
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default BackToTop;
