import React, { useState, useEffect, useContext } from "react";
import "antd/dist/reset.css";
import { Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ErrorModal from "../common/ErrorModal/ErrorModal";
import "./Feedback.css";
import { Modal } from "antd";
import { SequenceDiagram } from "react-sd";
import useInterval from "../common/MobilityCard/useInterval";
import EventApiContext from "../context/EventApiContext";
import { ids } from "../utility/utils";
import ViewMyJourney from "./ViewMyJourney";

const WhatWouldYouDoLikeToNext = () => {
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(false);
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
            <img src="/assets/becklogoSmall.svg" alt={"BecknLogoIcon"} />
          </div>
          <div style={{ 
            cursor: "pointer",
            background: "black",
            width:"40px",
            height: "40px",
            borderRadius: "26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            right: "100px",
            }}
           className=" homeIcon" onClick={()=>setOpen(true)}>
            <img src="/assets/homeIcon.png" alt={"HomeIcon"} />
            <Modal open={open} footer={null} closable={false}>
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
            // to={"/viewMyJourney"}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <button className="colorButton mt30"onClick={()=>setFlag(true)} >
              view my journey
              <img
                width={"10px"}
                src="/assets/tiltArrowblack.svg"
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
              <img
                width={"10px"}
                src="/assets/tiltArrowWithWhite.svg"
                alt={"BecknLogoIcon"}
              />
            </button>
          </Link>
        </div>
      </div>
      <ViewMyJourney flag={flag}/>
    </motion.div>
  );
};

export default WhatWouldYouDoLikeToNext;
