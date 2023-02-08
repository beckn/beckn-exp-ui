import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../common/title";
import CardWithContent from "../common/Cards/cardWithContent";
import { motion } from "framer-motion";

const ChoiceToDo = () => {
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
            <img style={{height:"52px", width:"200px", marginTop:"20px", cursor: "pointer"}} src="/assets/becklogoSmall.svg" alt={"BecknLogoIcon"} />
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
            <img  src="/assets/homeIcon.png" alt={"HomeIcon"} />
          </Link>
        </div>
        <div className="content-wrapper">
          <div className="content-wrapper-innr">
            <Title
              titleText={"what do you want to do?"}
              className="page-content-title"
            />
          </div>

          <div className="card-wrapper">
            <Link
              to="/TravelBuddy"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <CardWithContent
                mainIconUrlInBlack="/assets/bookRideLogoBlack.svg"
                arrowIconInBlackColor="/assets/tiltArrowblack.svg"
                className="hover_card"
                mainIconUrl="/assets/bookRideLogo.svg"
                arrowIconUrl="/assets/tiltArrow.svg"
                MainTitle={"book a ride"}
                subTitle={"be a passenger"}
              />
            </Link>
            <Link
              to="/acceptRideForTaxiHub"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <CardWithContent
                mainIconUrlInBlack="/assets/driveTaxiBlack.svg"
                arrowIconInBlackColor="/assets/tiltArrowblack.svg"
                className="hover_card"
                mainIconUrl="/assets/driveTaxi.svg"
                arrowIconUrl="/assets/tiltArrow.svg"
                MainTitle={"drive a taxi"}
                subTitle={"recieve a ride request"}
              />
            </Link>
          </div>
        </div>
        <div className="back-btn" onClick={() => navigate(-1)}>
          <img src="/assets/backArrw.png" alt="" /> Go Back
        </div>
      </div>
    </motion.div>
  );
};

export default ChoiceToDo;
