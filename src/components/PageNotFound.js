import React from "react";

const PageNotFound = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="error">
          <p className="p">4</p>
          <span classNme="dracula">
            <div className="con">
              <div className="hair"></div>
              <div className="hair-r"></div>
              <div className="head"></div>
              <div className="eye"></div>
              <div className="eye eye-r"></div>
              <div className="mouth"></div>
              <div className="blod"></div>
              <div className="blod blod2"></div>
            </div>
          </span>
          <p className="p">4</p>

          <div className="page-ms">
            <p className="page-msg">
              {" "}
              Oops, the page you're looking for Disappeared{" "}
            </p>
            <button className="go-back">Go Back</button>
          </div>
        </div>
      </div>

      {/* <iframe
        style={{
          width: 0,
          height: 0,
          border: 0,
          border: none,
          scrolling: no,
          frameborder: no,
          allow: autoplay,
        }}
        src={https://instaud.io/_/2Vvu.mp3} }}
      ></iframe> */}
    </div>
  );
};

export default PageNotFound;
