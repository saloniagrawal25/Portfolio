import React from "react";
import "./footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
     <footer>
      <p className="footer-text">@ Copyright {currentYear}</p>
    </footer>
  );
}
