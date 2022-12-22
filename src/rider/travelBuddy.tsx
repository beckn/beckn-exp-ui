import React from "react";
import { Box } from "@mui/material";
import BecknLogoIcon from "../assets/becknLogoIcon.svg";
import Title from "../common/title";
import CardWithContent from "../common/cardWithContent";
import TiltArrow from "../assets/tiltArrow.svg";
import RedditLogo from "../assets/redditLogo.svg";
import Car from "../assets/car.svg";
import { Link } from "react-router-dom";
const TravelBuddy = () => {
  return (
      <Box
      className="main-container"
      style={{ width: "100%" }}
      >
          <Box >
            <img style={{ marginTop: "50px", marginLeft: "30px" }} src={BecknLogoIcon} alt={"BecknLogoIcon"} />
          </Box>
        <Box style={{ textAlign: "center" }}>
          <Box
            style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "70px" }}
          >
            <Title
              titleText={"what do you want to do?"}
              className="visualizationTitle"
            />
          </Box>
          <Box style={{display: 'flex', justifyContent:"center", width:"100%"}}>
          <Box style={{ marginTop: "80px", display: "flex" }}>
            <Link to="/scanQrForTravelBuddy" style={{ textDecoration: "none", color: "#000" }}>
            <CardWithContent
              mainIconUrl={Car}
              arrowIconUrl={TiltArrow}
              MainTitle={"travel buddy"}
              subTitle={"book via travel app "}
            />
            </Link>
            <Link to="/useWhatsapp" style={{ textDecoration: "none", color: "#000" }}>
            <CardWithContent
              mainIconUrl={RedditLogo}
              arrowIconUrl={TiltArrow}
              MainTitle={"whatsapp"}
              subTitle={"book a ride via  chat "}
            />
            </Link>
          </Box>
          </Box>
        </Box>
      </Box>
    // </Layout>
  );
};

export default TravelBuddy;
