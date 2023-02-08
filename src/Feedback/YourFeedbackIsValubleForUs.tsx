import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ErrorModal from "../common/ErrorModal/ErrorModal";
import EventApiContext from "../context/EventApiContext";
import { Card, Col, Modal } from "antd";
import "./Feedback.css";

const YourFeedbackIsValubleForUs = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { updateExpId } = useContext(EventApiContext);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChanges = (e: any) => {
    e.preventDefault();
    setText(e.target.value);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    updateExpId(text);
  }, [updateExpId, text]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ overflow: "hidden" }}
    >
      <div className="main-container page-content">
        <div className="header feedbackHeader">
          <div className="beckn-logo-img">
            <img
              style={{ height: "50px" }}
              src="/assets/becklogoSmall.svg"
              alt={"BecknLogoIcon"}
            />
          </div>
          <div
            className="feedbCKBTn"
            style={{
              cursor: "pointer",
              background: "black",
              width: "40px",
              height: "40px",
              borderRadius: "26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              right: "100px",
            }}
            onClick={handleOpen}
          >
            <img src="/assets/homeIcon.png" alt={"HomeIcon"} />
            <Modal open={open} footer={null} closable={false} width={800}>
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
          <Card className="card-qr cardFeddback">
            <p className="card-text">your feedback is valuable to us</p>
            <textarea
              className="textarea-text"
              name="textarea"
              id="textarea"
              value={text}
              onChange={handleChanges}
            ></textarea>
            <div className="submit-btn">
              <Link
                to="/thankYouForVisitBecknExpCenter"
                style={{ textDecoration: "none", color: "#000" }}
                onClick={updateExpId}
              >
                submit
                <img
                  style={{ marginLeft: "5px" }}
                  src="/assets/tiltArrowblack.svg"
                  width={"10px"}
                  alt="tiltArrowBlack"
                />
              </Link>
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
  );
};

export default YourFeedbackIsValubleForUs;
