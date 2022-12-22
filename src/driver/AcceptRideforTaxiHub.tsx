import React from "react";
import { Box } from "@mui/material";
import BecknLogoIcon from "../assets/becknLogoIcon.svg";
import Title from "../common/title";
import CardWithContent from "../common/cardWithContent";
import TiltArrow from "../assets/tiltArrow.svg";
import taxiIcon from "../assets/taxiIcon.svg";
import yatriIcon from "../assets/yatriIcon.svg";
import { Link } from "react-router-dom";
const AcceptRideForTaxiHub = () => {
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
                mainIconUrl={taxiIcon}
                arrowIconUrl={TiltArrow}
                MainTitle={"taxi hub"}
                subTitle={"local taxi application"}
              />
            </Link>
            <Link
              to="/useWhatsapp"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <CardWithContent
                mainIconUrl={yatriIcon}
                arrowIconUrl={TiltArrow}
                MainTitle={"yatri partner"}
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

export default AcceptRideForTaxiHub;
