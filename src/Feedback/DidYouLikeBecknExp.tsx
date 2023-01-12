import React, { useState } from "react";
import menWithCar from "../assets/car-with-a-man.png";
import tiltArrowBlack from "../assets/tiltArrowblack.svg";
import tiltArrow from "../assets/tiltArrow.svg";
import { Link } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import homeIcon from "../assets/homeIcon.png";
import { motion } from "framer-motion";
import ErrorModal from "../common/ErrorModal";
import { Card, Col, Row } from "antd";
import "./DidYouLikeBecknExp.css";

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
        // initial={{ width: "0%" }}
        // animate={{ width: "100%" }}
        // exit={{
        //   x: window.innerWidth,
        //   transition: { ease: "easeOut", duration: 0.2 },
        // }}
      >
        <Col className="main-container container">
          <Row className="beck-logo-and-homeIcon">
            <Col className="beckn-logo">
              <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
            </Col>
            <Col style={{ cursor: "pointer" }} onClick={handleOpen}>
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
            </Col>
          </Row>
          <div className="box-container">
            <Card className="card">
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
        </Col>
      </motion.div>
    </>
  );
};

export default DidYouLikeBecknExp;
