import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import feedbackQr from "../assets/feedbackQr.svg";
import { motion } from "framer-motion";
import homeIcon from "../assets/homeIcon.png";
import GenQRCode from "../utility/GenQRCode";
// import ErrorModal from "../common/ErrorModal";
// import { useNavigate } from "react-router-dom";

const ThankYouForVisitBecknExpCenter = () => {
  // const navigate = useNavigate();
  const expId = localStorage.getItem("expId");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateExpId = async () => {
    await fetch("https://api.experience.becknprotocol.io/xc/experience", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        experienceId: expId,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result.experience_id, "result"))
      .catch((error) => console.log("error", error));
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    updateExpId();
    localStorage.removeItem("expId");
  }, [updateExpId]);
  return (
    <motion.div
      // initial={{ width: "0%" }}
      // animate={{ width: "100%" }}
      // exit={{
      //   x: window.innerWidth,
      //   transition: { ease: "easeOut", duration: 0.2 },
      // }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
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
            // onClick={() => navigate("/")}
          >
            <a href="/">
              <img src={homeIcon} alt={"HomeIcon"} />
            </a>
          </Box>
          <Box
            style={{
              textAlign: "center",
              backgroundColor: "#1E1E1E",
              padding: "40px",
            }}
          >
            <Box color={"#FFFF"}>
              <Typography fontSize={"70px"}>
                thank you for visiting the
              </Typography>
              <Typography fontSize={"70px"}>beckn experience centre</Typography>
            </Box>
            <Typography fontSize={"45px"} color={"#FFFF"}>
              join our collective
            </Typography>
            <Box style={{ marginTop: "30px", marginBottom: "40px" }}>
              <GenQRCode url={"https://bit.ly/bocServerInvite"} />
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ThankYouForVisitBecknExpCenter;
