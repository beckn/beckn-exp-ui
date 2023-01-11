import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import Title from "../common/title";
import CardWithContent from "../common/Cards/cardWithContent";
import TiltArrow from "../assets/tiltArrow.svg";
import taxiIcon from "../assets/taxiIcon.svg";
import LuxeCabSequentialflow from "../assets/luxecab.svg";
import LuxeCabHover from "../assets/luxecabBackground.svg";
import tiltArrowblack from "../assets/tiltArrowblack.svg";
import { motion } from "framer-motion";
import homeIcon from "../assets/homeIcon.png";
import backArrw from "../assets/backArrw.png";

const AcceptRideForTaxiHub = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
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
              titleText={"select platform to accept rides"}
              className="page-content-title"
            />
          </div>

          <div className="card-wrapper">
            <Link
              to="/DriverATaxi"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <CardWithContent
                mainIconUrlInBlack={taxiIcon}
                arrowIconInBlackColor={tiltArrowblack}
                mainIconUrl={taxiIcon}
                arrowIconUrl={TiltArrow}
                className="hover_card"
                MainTitle={"taxi hub"}
                subTitle={"local taxi application"}
              />
            </Link>
            <Link
              to="/luxecabe"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <CardWithContent
                mainIconUrlInBlack={LuxeCabHover}
                arrowIconInBlackColor={tiltArrowblack}
                mainIconUrl={LuxeCabSequentialflow}
                arrowIconUrl={TiltArrow}
                className="hover_card"
                MainTitle={"Luxe Cabs"}
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
    // </Layout>
  );
};

export default AcceptRideForTaxiHub;
