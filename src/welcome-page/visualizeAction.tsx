import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../common/title";
import CardWithContent from "../common/Cards/cardWithContent";
import { motion } from "framer-motion";

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
            <img style={{height:"52px", width:"200px", marginTop:"20px", cursor: "pointer"}}src="/assets/becklogoSmall.svg" alt={"BecknLogoIcon"} />
          </div>
          <Link style={{ 
            cursor: "pointer",
            background: "black",
            width:"40px",
            height: "40px",
            borderRadius: "26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position:"relative",
            right: "100px",
            }} to={"/"}>
            <img  src="/assets/homeIcon.png"alt={"HomeIcon"} />
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
                mainIconUrlInBlack="/assets/VisuliseIconinBlack.svg"
                arrowIconInBlackColor="/assets/tiltArrowblack.svg"
                className="hover_card"
                mainIconUrl="/assets/VisualizeIcon.svg"
                arrowIconUrl="/assets/tiltArrow.svg"
                MainTitle={"visualise beckn in action "}
                subTitle={"experience beckn enabled live"}
              />
            </Link>
            <Link
              to="/IframeVideo"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <CardWithContent
                mainIconUrlInBlack="/assets/bulbIconBlack.svg"
                arrowIconInBlackColor="/assets/tiltArrowblack.svg"
                className="hover_card"
                mainIconUrl="/assets/bulbIcon.svg"
                arrowIconUrl="/assets/tiltArrow.svg"
                MainTitle={"learn about beckn"}
                subTitle={"understanding what is beckn"}
              />
            </Link>
          </div>
          <div className="back-btn" onClick={() => navigate(-1)}>
            <img src="/assets/backArrw.png" alt="" /> Go Back
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VisualizeAction;
