import React from "react";
import { Box, Typography } from "@mui/material";
import BecknLogoIcon from "../assets/becknLogoIcon.svg";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import TiltArrowInBlack from "../assets/tiltArrowblack.svg";
import TiltArrow from "../assets/tiltArrow.svg";
import { Link } from "react-router-dom";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: "224px",
  height: "46px",
  border: "1px solid #ABD4FA",
  backgroundColor: "#ABD4FA",
  color: "#000000",
  borderRadius: "25px",
  textTransform: "lowercase",
  padding: "10px",
  "&:hover": {
    backgroundColor: "#ABD4FA",
  },
}));

const ColorButtonSec = styled(Button)<ButtonProps>(({ theme }) => ({
  width: "184px",
  height: "46px",
  backgroundColor: "#000000",
  color: "#FFFFFF",
  borderRadius: "25px",
  textTransform: "lowercase",
  padding: "10px",
  "&:hover": {
    backgroundColor: "#000000",
  },
}));

const whatWouldYouDoLikeToNext = () => {
  return (
    <Box
      className="main-container"
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <Box style={{ textAlign: "center" }}>
        <Box style={{ marginTop: "80px", marginBottom: "40px" }}>
          <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
        </Box>
        <Box>
          <Typography color={"#FFFF"}>
            <Typography fontSize={"70px"}>congratulations!</Typography>
            <Typography fontSize={"70px"}>
              you just performed your first transaction on
            </Typography>
            <Typography fontSize={"70px"}>
              a beckn enabled open mobility network
            </Typography>
          </Typography>
          <Typography fontSize={"45px"} color={"#FFFF"}>
            What would you like to do next?
          </Typography>
        </Box>
        <Box style={{ marginTop: "40px" }}>
          <Box>
            <ColorButton
              endIcon={
                <img
                  width={"10px"}
                  src={TiltArrowInBlack}
                  alt={"BecknLogoIcon"}
                />
              }
            >
              view my journey
            </ColorButton>
          </Box>
          <Box marginTop={"42px"}>
            <Link
              to={"/didYouLikeBecknExp"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <ColorButtonSec
                endIcon={
                  <img width={"10px"} src={TiltArrow} alt={"BecknLogoIcon"} />
                }
              >
                no, i'm done
              </ColorButtonSec>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default whatWouldYouDoLikeToNext;