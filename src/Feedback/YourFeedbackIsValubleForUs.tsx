import React, { useState } from "react";
import menWithCar from "../assets/car-with-a-man.png";
import { Link } from "react-router-dom";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import homeIcon from "../assets/homeIcon.png";
import { Box, Modal } from "@mui/material";
import { motion } from "framer-motion";
import ErrorModal from "../common/ErrorModal";
const YourFeedbackIsValubleForUs = () => {
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
      <Box
        className="main-container"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "96%",
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
          <Box>
            <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
          </Box>
          <Box style={{ cursor: "pointer" }} onClick={handleOpen}>
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
          </Box>
        </Box>
        <Box
          style={{
            textAlign: "center",
            height: "100vh",
            width: "80%",
            margin: "60px auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "440px",
              background: "#1E1E1E",
            }}
          >
            <p
              style={{
                fontSize: "48px",
                color: "#fff",
                padding: "30px ",
                resize: "none",
              }}
            >
              your feedback is valuable to us
            </p>
            <textarea
              style={{
                height: "160px",
                width: "360px",
                marginTop: "20px",
                background: "#1E1E1E",
                color: "#fff",
              }}
              name="textarea"
              id="textarea"
            ></textarea>
            <div
              style={{
                padding: "8px 20px",
                background: "#ACD1F0",
                borderRadius: "12px",
                width: "100px",
                margin: "5px auto",
              }}
            >
              <Link
                to="/thankYouForVisitBecknExpCenter"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Submit
              </Link>
            </div>
            <div
              style={{
                width: "100%",
                alignItems: "center",
                marginTop: "30px",
              }}
            ></div>
          </div>
          <Box
            style={{
              maxWidth: "640px",
              display: "grid",
              alignContent: "center",
            }}
          >
            <img src={menWithCar} alt="" style={{ width: "100%" }} />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default YourFeedbackIsValubleForUs;
