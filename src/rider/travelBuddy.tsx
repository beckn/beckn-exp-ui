import React from "react";
import { Box } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import Title from "../common/title";
import CardWithContent from "../common/cardWithContent";
import TiltArrow from "../assets/tiltArrow.svg";
import RedditLogo from "../assets/redditLogo.svg";
import Car from "../assets/car.svg";
import { Link } from "react-router-dom";
import redditLogoBlack from "../assets/redditLogoBlack.svg";
import tiltArrowblack from "../assets/tiltArrowblack.svg";
import carBlack from "../assets/carBlack.svg";
import { motion } from "framer-motion";
const TravelBuddy = () => {
  return (
    <motion.div
      // initial={{ x: "100vw" }}
      // animate={{ x: 0, y: 0 }}
      // transition={{ ease: "easeIn", duration: 1 }}
      // exit={{ x: "-100vw", transition: { ease: "easeOut" } }}
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { ease: "easeOut", duration: 0.2 },
      }}
    >
      <Box className="main-container" style={{ width: "100%" }}>
        <Box>
          <img
            style={{ marginTop: "50px", marginLeft: "30px", display: "flex" }}
            src={BecknLogoIcon}
            alt={"BecknLogoIcon"}
          />
        </Box>
        <Box style={{ textAlign: "center" }}>
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
            <Box style={{ marginTop: "80px", display: "flex" }}>
              <Link
                to="/scanQrForTravelBuddy"
                style={{ textDecoration: "none", color: "#000" }}
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
                style={{ textDecoration: "none", color: "#000" }}
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
        </Box>
      </Box>
    </motion.div>
    // </Layout>
  );
};

export default TravelBuddy;
