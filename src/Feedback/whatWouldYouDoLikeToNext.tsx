import { Box, Typography } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import TiltArrowInBlack from "../assets/tiltArrowblack.svg";
import TiltArrow from "../assets/tiltArrow.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import homeIcon from "../assets/homeIcon.png";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: "224px",
  height: "46px",
  border: "1px solid #ABD4FA",
  backgroundColor: "#ABD4FA",
  color: "#000000",
  borderRadius: "25px",
  textTransform: "lowercase",
  padding: "10px",
  "&:hover": {
    backgroundColor: "#ABD4FA",
  },
}));

const ColorButtonSec = styled(Button)<ButtonProps>(({ theme }) => ({
  width: "184px",
  height: "46px",
  backgroundColor: "#000000",
  color: "#FFFFFF",
  borderRadius: "25px",
  textTransform: "lowercase",
  padding: "10px",
  "&:hover": {
    backgroundColor: "#000000",
  },
}));

const whatWouldYouDoLikeToNext = () => {
  return (
    <motion.div
      style={{ overflow: "hidden" }}
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
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Box style={{ textAlign: "center" }}>
          <Box style={{ marginBottom: "60px" }}>
            <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
          </Box>
          <Box
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "50px",
              top: "30px",
            }}
          >
            <img src={homeIcon} alt={"HomeIcon"} />
          </Box>
          <Box>
            <Typography color={"#FFFF"}>
              <Typography fontSize={"60px"}>congratulations!</Typography>
              <Typography fontSize={"60px"}>
                you just performed your first transaction on
              </Typography>
              <Typography fontSize={"60px"}>
                a beckn enabled open mobility network
              </Typography>
            </Typography>
            <Typography mt={6} fontSize={"30px"} color={"#FFFF"}>
              What would you like to do next?
            </Typography>
          </Box>
          <Box style={{ marginTop: "40px" }}>
            <Box>
              <Link to={"/viewMyJourney"} style={{ textDecoration: "none" }}>
                <ColorButton
                  endIcon={
                    <img
                      width={"10px"}
                      src={TiltArrowInBlack}
                      alt={"BecknLogoIcon"}
                    />
                  }
                >
                  view my journey
                </ColorButton>
              </Link>
            </Box>
            <Box marginTop={"42px"}>
              <Link
                to={"/didYouLikeBecknExp"}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <ColorButtonSec
                  endIcon={
                    <img width={"10px"} src={TiltArrow} alt={"BecknLogoIcon"} />
                  }
                >
                  no, i'm done
                </ColorButtonSec>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default whatWouldYouDoLikeToNext;
