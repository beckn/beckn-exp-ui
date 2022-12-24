import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import BecknLogoIcon from "../assets/becknLogoIcon.svg";
import Arrow from "../assets/arrow.svg";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#ABD4FA",
  border: "1px solid #ABD4FA",
  backgroundColor: "#0E0E0F",
  textTransform: "lowercase",
  fontSize: "24px",
  padding: "20px 45px 20px 15px",
  "&:hover": {
    backgroundColor: "#0E0E0E",
  },
}));

const WelcomeToExpCenter = () => {
  return (
    <Box
      className="main-container"
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <Box style={{ textAlign: "center" }}>
        <Box style={{ marginTop: "130px", marginBottom: "40px" }}>
          <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
        </Box>
        <Box
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Typography
            style={{
              color: "#FFFFFF",
              fontSize: "80px",
              width: "80%",
              fontWeight: "275",
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
            <ColorButton endIcon={<img src={Arrow} alt={"BecknLogoIcon"} />}>
              begin your journey
            </ColorButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeToExpCenter;
