import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import BecknLogoIcon from "../assets/becknLogoIcon.svg";
import Title from "../common/title";
import CardWithContent from "../common/cardWithContent";
import VisualiseIccon from "../assets/VisualizeIcon.svg";
import BulbIcon from "../assets/bulbIcon.svg";
import TiltArrow from "../assets/tiltArrow.svg";
import driveTaxi from "../assets/driveTaxi.svg";
import bookRideLogo from "../assets/bookRideLogo.svg";
import bookRideLogoBlack from "../assets/bookRideLogoBlack.svg";
import tiltArrowblack from "../assets/tiltArrowblack.svg";
import driveTaxiBlack from "../assets/driveTaxiBlack.svg";
const ChoiceToDo = () => {
  return (
    <Box className="main-container" style={{ width: "100%" }}>
      <Box>
        <img
          style={{ marginTop: "50px", marginLeft: "30px" }}
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
              to="/TravelBuddy"
              style={{ textDecoration: "none", color: "#000" }}
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
              style={{ textDecoration: "none", color: "#000" }}
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
          </Box>
        </Box>
      </Box>
    </Box>
    // </Layout>
  );
};

export default ChoiceToDo;
