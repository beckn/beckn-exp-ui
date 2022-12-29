import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import BecknLogoIcon from "../assets/becknLogoIcon.svg";
import Title from "../common/title";
import CardWithContent from "../common/cardWithContent";
import VisualiseIccon from "../assets/VisualizeIcon.svg";
import BulbIcon from "../assets/bulbIcon.svg";
import TiltArrow from "../assets/tiltArrow.svg";
import VisuliseIconinBlack from "../../src/assets/VisuliseIconinBlack.svg";
import tiltArrowblack from "../assets/tiltArrowblack.svg";
import BulbIconBlack from "../assets/bulbIconBlack.svg";
import { motion } from "framer-motion";
const VisualizeAction = () => {
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
      <div className="goBack">go back</div>
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
            <Title
              titleText={"welcome to the beckn experience center"}
              className="visualizationTitle"
            />
          </Box>
          <Box style={{ marginTop: "40px", display: "flex" }}>
            <Link
              to="/ChoiceToDo"
              style={{ textDecoration: "none", color: "#000" }}
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
            <CardWithContent
              mainIconUrlInBlack={BulbIconBlack}
              arrowIconInBlackColor={tiltArrowblack}
              className="hover_card"
              mainIconUrl={BulbIcon}
              arrowIconUrl={TiltArrow}
              MainTitle={"learn about beckn"}
              subTitle={"understanding what is beckn"}
            />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default VisualizeAction;
