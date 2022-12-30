import React from "react";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import homeIcon from "../assets/homeIcon.png";
import Title from "../common/title";
import CardWithContent from "../common/cardWithContent";
import VisualiseIccon from "../assets/VisualizeIcon.svg";
import BulbIcon from "../assets/bulbIcon.svg";
import TiltArrow from "../assets/tiltArrow.svg";
import VisuliseIconinBlack from "../../src/assets/VisuliseIconinBlack.svg";
import tiltArrowblack from "../assets/tiltArrowblack.svg";
import BulbIconBlack from "../assets/bulbIconBlack.svg";
import { motion } from "framer-motion";
import backArrw from "../assets/backArrw.png";

const VisualizeAction = () => {
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
            marginTop: "30px",
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
              titleText={"welcome to the beckn experience center"}
              className="visualizationTitle"
            />
          </Box>
          <Box
            style={{
              marginTop: "40px",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Link
              to="/ChoiceToDo"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <CardWithContent
                mainIconUrlInBlack={VisuliseIconinBlack}
                arrowIconInBlackColor={tiltArrowblack}
                className="hover_card"
                mainIconUrl={VisualiseIccon}
                arrowIconUrl={TiltArrow}
                MainTitle={"visualise beckn in action "}
                subTitle={"experience beckn enabled live"}
              />
            </Link>
            <Link
              to="/IframeVideo"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <CardWithContent
                mainIconUrlInBlack={BulbIconBlack}
                arrowIconInBlackColor={tiltArrowblack}
                className="hover_card"
                mainIconUrl={BulbIcon}
                arrowIconUrl={TiltArrow}
                MainTitle={"learn about beckn"}
                subTitle={"understanding what is beckn"}
              />
            </Link>
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

export default VisualizeAction;
