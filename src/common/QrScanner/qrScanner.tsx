import React from "react";
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
                <a
                  href="/node-visualization"
                  style={{ textDecoration: "none", color: "#AED3F0" }}
                >
                  <div className="next-btn">
                    <img src="/assets/arrow.svg" alt={"BecknLogoIcon"} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QrScanner;
