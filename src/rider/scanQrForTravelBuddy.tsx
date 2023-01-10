import React, { useEffect, useState, useContext } from "react";
import QrScanner from "../common/qrScanner";
import Lady from "../assets/lady.svg";
import GenQRCode from "../utility/GenQRCode";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import useInterval from "../common/MobilityCard/useInterval";
import { Box, Modal } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import homeIcon from "../assets/homeIcon.png";
import ErrorModal from "../common/ErrorModal";
import EventApiContext from "../context/EventApiContext";

const ScanQrForTravelBuddy = () => {
  const { expId, postExpId } = useContext(EventApiContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("expId", expId);
    postExpId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchEvent = async () => {
    try {
      const res = await axios.get(
        `https://api.experience.becknprotocol.io/v2/event/${expId}`
      );
      const events = res.data.events;

      if (events.length > 0) {
        setTimeout(() => {
          navigate("/MobilityCard");
        }, 1000);
      }
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  useInterval(() => {
    fetchEvent();
  }, 1000);

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
          width: "100%",
          minHeight: "100vh",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "96%",
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
          <Box>
            <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
          </Box>
          <Box style={{ cursor: "pointer", zIndex: "99" }} onClick={handleOpen}>
            <img src={homeIcon} alt={"HomeIcon"} />
            <Modal open={open} onClose={handleClose}>
              <ErrorModal
                titleText={"Are you sure?"}
                subTitle={
                  "You are about to exit this experience. Click ‘confirm’ to continue."
                }
                colorbuttonText={"Cancel"}
                buttonText={"Confirm"}
              />
            </Modal>
          </Box>
        </Box>
        {/* <Link
          to="/MobilityCard"
          style={{ textDecoration: "none", color: "#000" }}
        > */}
        <QrScanner
          imageUrl={Lady}
          desccription={
            "Please pick up the device on your right and scan the QR code"
          }
          logo={
            <GenQRCode
              expId={expId}
              url={`https://taxibap.becknprotocol.io/?${expId}`}
            />
          }
        />
        {/* </Link> */}
      </Box>
    </motion.div>
  );
};

export default ScanQrForTravelBuddy;
