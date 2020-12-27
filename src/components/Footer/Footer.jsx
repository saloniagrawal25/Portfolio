import React from "react";
import "./footer.scss";
import wave from "../../images/wave-bottom.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <img src={wave} alt="footer" className="wave" />
      <footer>
        <p className="footer-text">@ Copyright {currentYear}</p>
      </footer>
    </div>
  );
}
