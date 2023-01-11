import React, { useEffect } from "react";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
// import feedbackQr from "../assets/feedbackQr.svg";
import { motion } from "framer-motion";
import homeIcon from "../assets/homeIcon.png";
import GenQRCode from "../utility/GenQRCode";
// import ErrorModal from "../common/ErrorModal";
// import { useNavigate } from "react-router-dom";
import 'antd/dist/reset.css';
import { Button, Typography, Card } from 'antd';
import "./Feedback.css";

const ThankYouForVisitBecknExpCenter = () => {
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    localStorage.removeItem("expId");
  }, []);
  return (
    <motion.div
      // initial={{ width: "0%" }}
      // animate={{ width: "100%" }}
      // exit={{
      //   x: window.innerWidth,
      //   transition: { ease: "easeOut", duration: 0.2 },
      // }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card
        className="main-container mainCard bgBorder"
      >
        <div className="textcenter bgBorder">
          <Card className="becknIcon bgBorder">
            <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
          </Card>
          <Card className="bgBorder homeIcon"
            // onClick={() => navigate("/")}
          >
            <a href="/">
              <img src={homeIcon} alt={"HomeIcon"} />
            </a>
          </Card>
          <Card className="thanksCard">
            <Card className="bgBorder">
            <Typography className="thanksCardText">
                thank you for visiting the
              </Typography>
              <Typography className="thanksCardText">beckn experience centre</Typography>
            </Card>
            <Typography className="thanksCardSubText">
              join our collective
            </Typography>
            <Card className="qrCode bgBorder">
              <GenQRCode url={"https://bit.ly/bocServerInvite"} />
            </Card>
          </Card>
        </div>
      </Card>
    </motion.div>
  );
};

export default ThankYouForVisitBecknExpCenter;
