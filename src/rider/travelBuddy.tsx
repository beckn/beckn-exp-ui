import React from "react";
import { Box } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import Title from "../common/title";
import CardWithContent from "../common/cardWithContent";
import TiltArrow from "../assets/tiltArrow.svg";
import RedditLogo from "../assets/redditLogo.svg";
import Car from "../assets/car.svg";
import { Link, useNavigate } from "react-router-dom";
import redditLogoBlack from "../assets/redditLogoBlack.svg";
import tiltArrowblack from "../assets/tiltArrowblack.svg";
import carBlack from "../assets/carBlack.svg";
import { motion } from "framer-motion";
import homeIcon from "../assets/homeIcon.png";
import backArrw from "../assets/backArrw.png";

const TravelBuddy = () => {
  const navigate = useNavigate();
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
                to="/scanQrForTravelBuddy"
                style={{ textDecoration: "none", color: "#000", width: "100%" }}
              >
                <CardWithContent
                  mainIconUrlInBlack={carBlack}
                  arrowIconInBlackColor={tiltArrowblack}
                  className="hover_card"
                  mainIconUrl={Car}
                  arrowIconUrl={TiltArrow}
                  MainTitle={"travel buddy"}
                  subTitle={"book via travel app "}
                />
              </Link>
              <Link
                to="/useWhatsapp"
                style={{ textDecoration: "none", color: "#000", width: "100%" }}
              >
                <CardWithContent
                  mainIconUrlInBlack={redditLogoBlack}
                  arrowIconInBlackColor={tiltArrowblack}
                  className="hover_card"
                  mainIconUrl={RedditLogo}
                  arrowIconUrl={TiltArrow}
                  MainTitle={"whatsapp"}
                  subTitle={"book a ride via  chat "}
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

export default TravelBuddy;
