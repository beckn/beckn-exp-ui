import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import Title from "../common/title";
import CardWithContent from "../common/Cards/cardWithContent";
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
          </div>
        </div>
        <div className="back-btn" onClick={() => navigate(-1)}>
          <img src={backArrw} alt="" /> Go Back
        </div>
      </div>
    </motion.div>
  );
};

export default ChoiceToDo;
