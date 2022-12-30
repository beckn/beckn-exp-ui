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
const DidYouLikeBecknExp = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <motion.div
        style={{ overflow: "hidden" }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        exit={{
          x: window.innerWidth,
          transition: { ease: "easeOut", duration: 0.2 },
        }}
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
                height: "600px",
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
                Awesome! Please share your valuable feedback with us.
              </p>

              <div
                style={{
                  width: "100%",
                  alignItems: "center",
                  marginTop: "30px",
                }}
              >
                <div
                  style={{
                    padding: "8px 20px",
                    background: "#ACD1F0",
                    borderRadius: "12px",
                    width: "100px",
                    margin: "0 auto",
                  }}
                >
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
                <div
                  style={{
                    marginTop: "20px",
                    padding: "8px 30px",
                    background: "#000",
                    color: "#fff",
                    borderRadius: "12px",
                    width: "100px",
                    margin: "20px auto",
                  }}
                >
                  <Link
                    to="/improveTheExp"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    no <img src={tiltArrow} width={"10px"} alt="tiltArrow" />
                  </Link>
                </div>
              </div>
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
    </>
  );
};

export default DidYouLikeBecknExp;
