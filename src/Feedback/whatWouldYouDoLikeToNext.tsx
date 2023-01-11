import React, { useEffect, useState } from "react";
import {Modal } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import 'antd/dist/reset.css';
import { Button, Typography, Card } from 'antd';
import TiltArrowInBlack from "../assets/tiltArrowblack.svg";
import TiltArrow from "../assets/tiltArrow.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import homeIcon from "../assets/homeIcon.png";
import ErrorModal from "../common/ErrorModal";
import "./Feedback.css";

const WhatWouldYouDoLikeToNext = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ overflow: "hidden" }}
      // initial={{ width: "0%" }}
      // animate={{ width: "100%" }}
      // exit={{
      //   x: window.innerWidth,
      //   transition: { ease: "easeOut", duration: 0.2 },
      // }}
    >
      <Card
        className="main-container mainCard bgBorder"
      >
        <div className="textcenter bgBorder">
          <Card className="becknIcon bgBorder">
            <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
          </Card>
          <Card className="bgBorder homeIcon" onClick={handleOpen}>
            <img src={homeIcon} alt={"HomeIcon"} />
            <Modal open={open}>
              <ErrorModal
                titleText={"Are you sure?"}
                subTitle={
                  "You are about to exit this experience. Click ‘confirm’ to continue."
                }
                colorbuttonText={"Cancel"}
                buttonText={"Confirm"}
              />
            </Modal>
          </Card>
          <Card className="bgBorder cardText">
            <Typography>
              <Typography className="feedbacktext">congratulations!</Typography>
              <Typography className="feedbacktext">
                you just performed your first transaction on
              </Typography>
              <Typography className="feedbacktext">
                a beckn enabled open mobility network
              </Typography>
            </Typography>
            <Typography className="subTitle">
              What would you like to do next?
            </Typography>
          </Card>
          <Card className="bgBorder">
            <Card className="bgBorder">
              <Link to={"/viewMyJourney"} style={{ textDecoration: "none" }} >
                <Button className="colorButton mt30">
                  view my journey <img width={"10px"} src={TiltArrowInBlack} alt={"BecknLogoIcon"} />  
                </Button>
              </Link>
            </Card>
            <Card className="bgBorder">
              <Link
                to={"/didYouLikeBecknExp"}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <Button className="colorButtonSec mt20">
                  no, i'm done <img width={"10px"} src={TiltArrow} alt={"BecknLogoIcon"} />   
                </Button>
              </Link>
            </Card>
          </Card>
        </div>
      </Card>
    </motion.div>
  );
};

export default WhatWouldYouDoLikeToNext;
