import React, { useEffect } from "react";
import QrScanner from "../common/qrScanner";
import Lady from "../assets/lady.svg";
import GenQRCode from "../utility/GenQRCode";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import useInterval from "../common/MobilityCard/useInterval";

interface Props {
  expId: string;
}

const useWhatsapp = ({ expId }: Props) => {
  const navigate = useNavigate();

  const postExpId = async () => {
    await fetch("https://api.experience.becknprotocol.io/v2/xc/experience", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        experienceId: expId,
        experienceCenterId: "1",
        eventSourceAppId: "1",
        start_ts: Date.now(),
      }), // body data type must match "Content-Type" header
    })
      .then((response) => console.log(`Event Created with`, response))

      .catch((error) => console.log("error", error));
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

      console.log(`res.data ${JSON.stringify(res.data.events.length)}`);

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
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { ease: "easeOut", duration: 0.2 },
      }}
    >
      <QrScanner
        imageUrl={Lady}
        desccription={
          "Please pick up the device on your right and scan the QR code"
        }
        logo={<GenQRCode expId={expId} url={""} />}
      />
    </motion.div>
  );
};

export default useWhatsapp;
