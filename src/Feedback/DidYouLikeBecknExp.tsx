import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ErrorModal from "../common/ErrorModal/ErrorModal";
import { Card, Col, Row, Modal } from "antd";

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
              <img src="/assets/becklogoSmall.svg" alt={"BecknLogoIcon"} />
            </div>
            <div className="cur-pointer" onClick={handleOpen}>
              <img src="/assets/homeIcon.png" alt={"HomeIcon"} />
              <Modal open={open} footer={null}>
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
                      src="/assets/tiltArrowblack.svg"
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
                    no <img src="/assets/tiltArrow.svg" width={"10px"} alt="tiltArrow" />
                  </Link>
                </div>
              </div>
            </Card>
            <Col className="car-image">
              <img src="/assets/car-with-a-man.png" alt="" style={{ width: "100%" }} />
            </Col>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DidYouLikeBecknExp;
