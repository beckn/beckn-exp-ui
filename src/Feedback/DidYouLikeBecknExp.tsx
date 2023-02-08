import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ErrorModal from "../common/ErrorModal/ErrorModal";
import { Card, Col, Modal } from "antd";

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
            <div className="beckn-logo-img">
              <img style={{height:"52px", cursor: "pointer"}} src="/assets/becklogoSmall.svg" alt={"BecknLogoIcon"} />
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
            position: "relative",
            right: "100px"
            }}
             className="cur-pointer" onClick={handleOpen}>
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
          <div className="box-container">
            <Card className="card-qr">
              <p className="card-text">did you like the beckn experience?</p>

              <div className="card-buttons">
                <div className="yes-button">
                  <Link
                    to="/thankYouForVisitBecknExpCenter"
                    style={{ textDecoration: "none", color: "#000"}}
                  >
                    yes
                    <img style={{ marginLeft:"5px" }}
                      src="/assets/tiltArrowblack.svg"
                      width={"10px"}
                      alt="tiltArrowBlack"
                    />
                  </Link>
                </div>
                <div className="no-button">
                  <Link
                    to="/yourFeedbackIsValubleForUs"
                    style={{ textDecoration: "none", color: "#fff", marginLeft:"5px" }}
                  >
                    no
                    <img style={{ marginLeft:"5px" }}
                      src="/assets/tiltArrowWithWhite.svg"
                      width={"10px"}
                      alt="tiltArrow"
                    />
                  </Link>
                </div>
              </div>
            </Card>
            <Col className="car-image">
              <img
                src="/assets/car-with-a-man.png"
                alt=""
                style={{ width: "100%" }}
              />
            </Col>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DidYouLikeBecknExp;
