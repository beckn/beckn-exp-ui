import React, { useContext, useEffect, useState } from "react";
import menWithCar from "../assets/car-with-a-man.png";
import { Link } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import homeIcon from "../assets/homeIcon.png";
import { motion } from "framer-motion";
import ErrorModal from "../common/ErrorModal/ErrorModal";
import EventApiContext from "../context/EventApiContext";
import { Col, Row, Card } from "antd";
import "./Feedback.css";

const ImproveTheExp = () => {
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
  // const expId = localStorage.getItem("expId");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const updateExpId = async () => {
  //   await fetch("https://api.experience.becknprotocol.io/v2/xc/experience", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     redirect: "follow",
  //     referrerPolicy: "no-referrer",
  //     body: JSON.stringify({
  //       experienceId: expId,
  //       end_ts: Date.now(),
  //       experienceFeedback: {
  //         user_review: "N",
  //         user_comment: text,
  //       },
  //     }),
  //   })
  //     .then((response) => response)

  //     .catch((error) => console.log("error", error));
  // };

  useEffect(() => {
    updateExpId(text);
  }, [updateExpId]);
  return (
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
          <Col style={{ cursor: "pointer" }} onClick={handleOpen}>
            <img src={homeIcon} alt={"HomeIcon"} />
            <Modal open={open}>
              <ErrorModal
                titleText={"Are you sure?"}
                subTitle={
                  "You are about to exit this experience. Click ???confirm??? to continue."
                }
                colorbuttonText={"Cancel"}
                buttonText={"Confirm"}
              />
            </Modal>
          </Col>
        </div>
        <div className="box-container">
          <Card className="card-qr cardFeddback">
            <p className="card-text foripad">
              Ohhh! Please let us know how we can help improve your experience.
            </p>
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
                Submit
              </Link>
            </div>
          </Card>
          <Col className="car-image">
            <img src={menWithCar} alt="" style={{ width: "100%" }} />
          </Col>
        </div>
      </div>
    </motion.div>
  );
};

export default ImproveTheExp;
