import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./QrScanner.css";

interface qrScannerPropsModal {
  imageUrl: any;
  desccription: string;
  logo: any;
}

const QrScanner: React.FC<qrScannerPropsModal> = ({
  imageUrl,
  desccription,
  logo,
}: qrScannerPropsModal) => {
  return (
    <>
      <div className="qrwrapper">
        <img className="lady-img" src={imageUrl} alt={"Lady"} />
        <div>
          <div className="cards">
            <div className="card-innr">
              <div className="qrcard-text">{desccription}</div>
              {logo}
              <div className="btn-wrapper">
                <Link
                  to="/node-visualization"
                  style={{ textDecoration: "none", color: "#AED3F0" }}
                >
                  <div className="next-btn">
                    <img src="/assets/arrow.svg" alt={"BecknLogoIcon"} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QrScanner;
