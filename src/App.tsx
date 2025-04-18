import React from "react";
import "./App.css";
import backgroundImage from "./assets/back.png";

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="instagram-icon"
    >
      <path
        d="M12 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2H12ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15ZM16.5 7C16.5 7.82843 15.8284 8.5 15 8.5C14.1716 8.5 13.5 7.82843 13.5 7C13.5 6.17157 14.1716 5.5 15 5.5C15.8284 5.5 16.5 6.17157 16.5 7ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

function App() {
  return (
    <div className="App">
      <div className="landing-container">
        <div className="content">
          <div className="progress-section">
            <p className="prep-text">we're prepping</p>
          </div>
          <h1 className="title">
            <span className="something">something</span>
            <span
              className="etcy"
              style={
                {
                  "--background-image": `url(${backgroundImage})`,
                } as React.CSSProperties
              }
            >
              etcyting
            </span>
          </h1>
          <div className="progress-section">
            <p className="prep-text">for you</p>
          </div>

          <div className="social-section">
            <p className="follow-text">meanwhile check us out on instagram</p>

            <br />
            <br />
            <a
              href="https://instagram.com/etcyfoods"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <InstagramIcon />
              <span className="instagram-handle">etcyfoods</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
