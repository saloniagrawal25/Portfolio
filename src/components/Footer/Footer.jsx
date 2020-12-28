import React from "react";
import "./footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>Designed with ❤️ by me</p>
        <p>@ Copyright Saloni {currentYear}</p>
      </footer>
    </div>
  );
}
