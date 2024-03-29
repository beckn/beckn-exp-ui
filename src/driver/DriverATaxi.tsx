import QrScanner from "../common/QrScanner/qrScanner";
import GenQRCode from "../utility/GenQRCode";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState, useContext } from "react";

import useInterval from "../common/MobilityCard/useInterval";
import { Modal } from "antd";
import ErrorModal from "../common/ErrorModal/ErrorModal";
import EventApiContext from "../context/EventApiContext";

const DriverATaxi = () => {
  const [open, setOpen] = useState(false);
  const { expId, postExpId, getEvent } = useContext(EventApiContext);

  const handleOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("expId", expId);
    postExpId("2");
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
        <QrScanner
          imageUrl="/assets/man.svg"
          desccription={
            "Please pick up the device on your right and scan the QR code"
          }
          logo={<GenQRCode url={`https://taxibpp.becknprotocol.io?${expId}`} />}
        />
      </div>
    </motion.div>
  );
};

export default DriverATaxi;
