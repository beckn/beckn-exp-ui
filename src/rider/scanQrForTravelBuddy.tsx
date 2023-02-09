import React, { useEffect, useState, useContext } from "react";
import QrScanner from "../common/QrScanner/qrScanner";
import GenQRCode from "../utility/GenQRCode";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import axios from "axios";
import useInterval from "../common/MobilityCard/useInterval";
import ErrorModal from "../common/ErrorModal/ErrorModal";
import EventApiContext from "../context/EventApiContext";
import { Modal } from "antd";

const ScanQrForTravelBuddy = () => {
  const { expId, postExpId, getEvent } = useContext(EventApiContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    localStorage.setItem("expId", expId);
    postExpId("1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchEvent = async () => {
    try {
      const res = await getEvent();
      const events = res?.events;

      if (events.length > 0) {
        setTimeout(() => {
          navigate("/node-visualization");
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="main-container page-content luxecab">
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
          <div
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
            className="home-container"
            onClick={handleOpen}
          >
            <img src="/assets/homeIcon.png" alt={"HomeIcon"} />
            <Modal open={open} footer={null} closable={false} width={800}>
              <ErrorModal
                titleText={"Are you sure?"}
                subTitle={
                  "You are about to exit this experience. Click ‘confirm’ to continue."
                }
                colorbuttonText={"Cancel"}
                buttonText={"Confirm"}
              />
            </Modal>
          </div>
        </div>
        {/* <Link
          to="/MobilityCard"
          style={{ textDecoration: "none", color: "#000" }}
        > */}
        <QrScanner
          imageUrl="/assets/lady.svg"
          desccription={
            "Please pick up the device on your right and scan the QR code"
          }
          logo={
            <GenQRCode url={`https://taxibap-dev.becknprotocol.io/?${expId}`} />
          }
        />
        {/* https://taxibap.becknprotocol.io/ */}
        {/* </Link> */}
      </div>
    </motion.div>
  );
};

export default ScanQrForTravelBuddy;
