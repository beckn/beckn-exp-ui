import React, { useEffect } from "react";
import { motion } from "framer-motion";
import GenQRCode from "../utility/GenQRCode";
import "antd/dist/reset.css";
import { Typography } from "antd";
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
            <img src="/assets/becklogoSmall.svg" alt={"BecknLogoIcon"} />
          </div>
          <div 
          style={{ 
            cursor: "pointer",
            background: "black",
            width:"40px",
            height: "40px",
            borderRadius: "26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            right: "100px",
            marginTop:"30px"
            }}
            className=" homeIcon"
          >
            <a href="/">
              <img src="/assets/homeIcon.png" alt={"HomeIcon"} />
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
