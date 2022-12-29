import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import BecknLogoIcon from "../assets/becknLogoIcon.svg";
import Arrow from "../assets/arrow.svg";
import Background from "../assets/Back.mp4";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { motion } from "framer-motion";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#ABD4FA",
  border: "1px solid #ABD4FA",
  backgroundColor: "#0E0E0F",
  textTransform: "lowercase",
  fontSize: "24px",
  padding: "8px 30px 8px 15px",
  "&:hover": {
    backgroundColor: "#0E0E0E",
  },
}));

const WelcomeToExpCenter = () => {
  useEffect(() => {
    localStorage.removeItem("expId");
  }, []);
  return (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { ease: "easeOut", duration: 0.2 },
      }}
    >
      <Box className="myvideo">
        <video
          src={Background}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
        <Box
          className="main-container"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            position: "absolute",
            top: "15%",
            background: "unset",
          }}
        >
          <Box style={{ textAlign: "center" }}>
            <Box style={{ marginBottom: "40px" }}>
              <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
            </Box>
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                style={{
                  color: "#FFFFFF",
                  fontSize: "80px",
                  width: "80%",
                  fontWeight: "275",
                  marginBottom: "20px",
                }}
              >
                welcome to the beckn experience centre
              </Typography>
            </Box>
            <Box style={{ marginTop: "40px" }}>
              <Link
                to="/VisualizeAction"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ColorButton
                  endIcon={<img src={Arrow} alt={"BecknLogoIcon"} />}
                >
                  begin your journey
                </ColorButton>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default WelcomeToExpCenter;
