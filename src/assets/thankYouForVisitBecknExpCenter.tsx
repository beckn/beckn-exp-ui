import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import BecknLogoIcon from "../assets/becknLogoIcon.svg";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import  QrIcon from '../assets/QrIcon.svg';

const ThankYouForVisitBecknExpCenter = () => {
  return (
    <Box
      className="main-container"
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <Box style={{ textAlign: "center", width:"90%"}}>
        <Box style={{ marginTop: "80px", marginBottom: "40px" }}>
          <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
        </Box>
        <Box style={{display:"flex", justifyContent:"center", width:"100%"}}>
        <Box width={'80%'} height={"550px"} style={{ textAlign: "center", backgroundColor:"#1E1E1E" }}>
          <Box color={"#FFFF"}>
              <Typography fontSize={'70px'}>thank you for visiting the</Typography>
              <Typography fontSize={'70px'}>beckn experience centre</Typography>
          </Box>
          <Typography fontSize={'45px'} color={"#FFFF"}>
          join our collective
          </Typography>
          <Box style={{ marginTop: "30px", marginBottom: "40px" }}>
          <img src={QrIcon} alt={"BecknLogoIcon"} />
        </Box>
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default ThankYouForVisitBecknExpCenter;
