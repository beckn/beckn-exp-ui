import React, { useEffect } from "react";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
// import feedbackQr from "../assets/feedbackQr.svg";
import { motion } from "framer-motion";
import homeIcon from "../assets/homeIcon.png";
import GenQRCode from "../utility/GenQRCode";
// import ErrorModal from "../common/ErrorModal";
// import { useNavigate } from "react-router-dom";
import "antd/dist/reset.css";
import { Button, Typography, Card } from "antd";
import "./Feedback.css";

const ThankYouForVisitBecknExpCenter = () => {
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    localStorage.removeItem("expId");
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="main-container page-content">
        <div className="header textcenter">
          <div className="becknIcon">
            <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
          </div>
          <div
            className=" homeIcon"
            // onClick={() => navigate("/")}
          >
            <a href="/">
              <img src={homeIcon} alt={"HomeIcon"} />
            </a>
          </div>
        </div>
        <div className="thanksCard mainCard">
          <div className="">
            <Typography className="thanksCardText">
              thank you for visiting the
            </Typography>
            <Typography className="thanksCardText">
              beckn experience centre
            </Typography>
          </div>
          <Typography className="thanksCardSubText">
            join our collective
          </Typography>
          <div className="qrCode ">
            <GenQRCode url={"https://bit.ly/bocServerInvite"} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThankYouForVisitBecknExpCenter;
