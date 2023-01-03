import React from "react";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import Title from "../common/title";
import CardWithContent from "../common/cardWithContent";
import TiltArrow from "../assets/tiltArrow.svg";
import driveTaxi from "../assets/driveTaxi.svg";
import bookRideLogo from "../assets/bookRideLogo.svg";
import bookRideLogoBlack from "../assets/bookRideLogoBlack.svg";
import tiltArrowblack from "../assets/tiltArrowblack.svg";
import driveTaxiBlack from "../assets/driveTaxiBlack.svg";
import { motion } from "framer-motion";
import homeIcon from "../assets/homeIcon.png";
import backArrw from "../assets/backArrw.png";

const ChoiceToDo = () => {
  const navigate = useNavigate();

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
      //   transition: { ease: "easeOut", duration: 0.1 },
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
          <Link style={{ cursor: "pointer" }} to={"/"}>
            <img src={homeIcon} alt={"HomeIcon"} />
          </Link>
        </Box>
        <Box
          style={{
            textAlign: "center",
            height: "100vh",
            width: "80%",
            margin: "60px auto",
          }}
        >
          <Box
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "70px",
            }}
          >
            <Title
              titleText={"what do you want to do?"}
              className="visualizationTitle"
            />
          </Box>
          <Box
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Box style={{ marginTop: "80px", display: "flex", width: "80%" }}>
              <Link
                to="/TravelBuddy"
                style={{ textDecoration: "none", color: "#000", width: "100%" }}
              >
                <CardWithContent
                  mainIconUrlInBlack={bookRideLogoBlack}
                  arrowIconInBlackColor={tiltArrowblack}
                  className="hover_card"
                  mainIconUrl={bookRideLogo}
                  arrowIconUrl={TiltArrow}
                  MainTitle={"book a ride"}
                  subTitle={"be a passenger"}
                />
              </Link>
              <Link
                to="/acceptRideForTaxiHub"
                style={{ textDecoration: "none", color: "#000", width: "100%" }}
              >
                <CardWithContent
                  mainIconUrlInBlack={driveTaxiBlack}
                  arrowIconInBlackColor={tiltArrowblack}
                  className="hover_card"
                  mainIconUrl={driveTaxi}
                  arrowIconUrl={TiltArrow}
                  MainTitle={"drive a taxi"}
                  subTitle={"recieve a ride request"}
                />
              </Link>
            </Box>
          </Box>
          <Box
            style={{
              background: "black",
              color: "#AED3F0",
              width: "104px",
              margin: "40px auto",
              padding: "6px",
              borderRadius: "12px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-around",
              fontSize: "14px",
            }}
            onClick={() => navigate(-1)}
          >
            <img src={backArrw} alt="" /> Go Back
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ChoiceToDo;
