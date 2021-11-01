import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>
          Author: Jessica Chen | Open Source:{" "}
          <a
            href="https://github.com/jess-n-chen/weather-app-react-js"
            target="_blank"
            rel="noreferrer"
          >
            Github Link
          </a>
        </p>
      </footer>
    </div>
  );
}
