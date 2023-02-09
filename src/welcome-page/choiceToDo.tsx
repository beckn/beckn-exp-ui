import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Title from "../common/title";
import CardWithContent from "../common/Cards/cardWithContent";
import { motion } from "framer-motion";

const ChoiceToDo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className="main-container page-content">
      <div className="header">
        <div>
          <img
            style={{
              height: "52px",
              width: "200px",
              marginTop: "20px",
              cursor: "pointer",
            }}
            src="/assets/becklogoSmall.svg"
            alt={"BecknLogoIcon"}
          />
        </div>
        <Link
          style={{
            cursor: "pointer",
            background: "black",
            width: "40px",
            height: "40px",
            borderRadius: "26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            right: "100px",
          }}
          to={"/"}
        >
          <img src="/assets/homeIcon.png" alt={"HomeIcon"} />
        </Link>
      </div>
      <div className="content-wrapper">
        <div className="content-wrapper-innr">
          <motion.div
            transition={{ ease: "easeIn", duration: 0.2 }}
            exit={{
              transition: { duration: "none" },
            }}
          >
            <Title
              titleText={"what do you want to do?"}
              className="page-content-title"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ x: state ? "-100vw" : "100vw" }}
          animate={{ x: 0, y: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          exit={{
            x: state ? "100vw" : "-100vw",
            transition: { ease: "easeOut", duration: 0 },
          }}
        >
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
        </motion.div>
      </div>
      <div
        className="back-btn"
        onClick={() => navigate("/visualizeAction", { state: "flag" })}
      >
        <img src="/assets/backArrw.png" alt="" /> Go Back
      </div>
    </div>
  );
};

export default ChoiceToDo;
