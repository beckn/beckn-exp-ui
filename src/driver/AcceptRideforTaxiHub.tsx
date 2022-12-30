import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import Title from "../common/title";
import CardWithContent from "../common/cardWithContent";
import TiltArrow from "../assets/tiltArrow.svg";
import taxiIcon from "../assets/taxiIcon.svg";
import LuxeCabSequentialflow from "../assets/LuxeCabSequentialflow.png";
import tiltArrowblack from "../assets/tiltArrowblack.svg";
import { motion } from "framer-motion";
import homeIcon from "../assets/homeIcon.png";
import backArrw from "../assets/backArrw.png";

const AcceptRideForTaxiHub = () => {
  const navigate = useNavigate();

  return (
    <motion.div
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
          width: "100%",
          height: "100vh",
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
              titleText={"select platform to accept rides"}
              className="visualizationTitle"
            />
          </Box>
          <Box
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Box style={{ marginTop: "80px", display: "flex" }}>
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
                  mainIconUrlInBlack={LuxeCabSequentialflow}
                  arrowIconInBlackColor={tiltArrowblack}
                  mainIconUrl={LuxeCabSequentialflow}
                  arrowIconUrl={TiltArrow}
                  className="hover_card"
                  MainTitle={"Luxe Cabs"}
                  subTitle={"recieve a ride request"}
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
    // </Layout>
  );
};

export default AcceptRideForTaxiHub;
