import React from "react";

export default function Form() {
  return (
    <div className="layoutMain__content">
      <div className="layoutMain__content-inner">
        <p>
          A digital library built on the Ethereum blockchain, to preserve the
          rich writings and history of humanity. The Future is ours.
        </p>
        <div className="layoutMain__form">
          <div className="input">
            <input type="email" placeholder="Your   EMAIL   Address" />
          </div>
          <button type="button">GET UPDATES</button>
        </div>
      </div>
      <div className="layoutMain__content-dum"></div>
    </div>
  );
}
