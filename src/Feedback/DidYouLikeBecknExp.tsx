import React, { useState } from "react";
import menWithCar from "../assets/car-with-a-man.png";
import tiltArrowBlack from "../assets/tiltArrowblack.svg";
import tiltArrow from "../assets/tiltArrow.svg";
import { Link } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import homeIcon from "../assets/homeIcon.png";
import { motion } from "framer-motion";
import ErrorModal from "../common/ErrorModal/ErrorModal";
import { Card, Col, Row } from "antd";

const DidYouLikeBecknExp = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="main-container page-content">
          <div className="header">
            <div>
              <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
            </div>
            <div style={{ cursor: "pointer" }} onClick={handleOpen}>
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
          <div className="box-container">
            <Card className="card-qr">
              <p className="card-text">did you like the beckn experience?</p>

              <div className="card-buttons">
                <div className="yes-button">
                  <Link
                    to="/yourFeedbackIsValubleForUs"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    yes
                    <img
                      src={tiltArrowBlack}
                      width={"10px"}
                      alt="tiltArrowBlack"
                    />
                  </Link>
                </div>
                <div className="no-button">
                  <Link
                    to="/improveTheExp"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    no <img src={tiltArrow} width={"10px"} alt="tiltArrow" />
                  </Link>
                </div>
              </div>
            </Card>
            <Col className="car-image">
              <img src={menWithCar} alt="" style={{ width: "100%" }} />
            </Col>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DidYouLikeBecknExp;
