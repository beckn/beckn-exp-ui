import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import "antd/dist/reset.css";
import { Button, Typography } from "antd";
import TiltArrowInBlack from "../assets/tiltArrowblack.svg";
import TiltArrow from "../assets/tiltArrow.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import homeIcon from "../assets/homeIcon.png";
import ErrorModal from "../common/ErrorModal/ErrorModal";
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
    >
      <div className="main-container page-content">
        <div className="header textcenter">
          <div className="becknIcon">
            <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
          </div>
          <div className=" homeIcon" onClick={handleOpen}>
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
          </div>
        </div>
        <div className="divText mainCard">
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
        </div>
        <div className="btn-feedback">
          <Link
            to={"/viewMyJourney"}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <button className="colorButton mt30">
              view my journey{" "}
              <img
                width={"10px"}
                src={TiltArrowInBlack}
                alt={"BecknLogoIcon"}
              />
            </button>
          </Link>

          <Link
            to={"/didYouLikeBecknExp"}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <button className="colorButtonSec">
              no, i'm done
              <img width={"10px"} src={TiltArrow} alt={"BecknLogoIcon"} />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatWouldYouDoLikeToNext;
