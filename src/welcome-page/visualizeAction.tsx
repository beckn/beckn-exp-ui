import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import homeIcon from "../assets/homeIcon.png";
import Title from "../common/title";
import CardWithContent from "../common/Cards/cardWithContent";
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ overflow: "hidden" }}
    >
      <div className="main-container page-content">
        <div className="header">
          <div>
            <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
          </div>
          <Link style={{ cursor: "pointer" }} to={"/"}>
            <img src={homeIcon} alt={"HomeIcon"} />
          </Link>
        </div>
        <div className="content-wrapper">
          <div className="content-wrapper-innr">
            <Title
              titleText={"welcome to the beckn experience center"}
              className="page-content-title"
            />
          </div>
          <div className="card-wrapper">
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
          </div>
          <div className="back-btn" onClick={() => navigate(-1)}>
            <img src={backArrw} alt="" /> Go Back
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VisualizeAction;
