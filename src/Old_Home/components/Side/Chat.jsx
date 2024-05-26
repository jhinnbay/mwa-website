import React from "react";

export default function Chat() {
  return (
    <div className="introChat">
      <h6 className="sm">/CHAT/Library</h6>
      <div className="introChat__inner">
        <div className="progress">
          <div className="progress__bg">
            <img src="./images/progress-bg.png" alt="" />
          </div>
          <div className="progress__head">
            <h6 className="sm">message</h6>
            <h6 className="sm">INCOMING</h6>
          </div>
          <div className="progress__bar">
            <div
              className="progress__bar-value"
           
            ></div>
          </div>
        </div>
        <div className="introChat__content">
          <h5 className="sm">Hey buddy! TIME TO CONNECT...</h5>
          <a href="#" className="button secondary">
            JOIN THE ACADEMY
          </a>
        </div>
      </div>
    </div>
  );
}
