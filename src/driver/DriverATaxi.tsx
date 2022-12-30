import QrScanner from "../common/qrScanner";
import Man from "../assets/man.svg";
import GenQRCode from "../utility/GenQRCode";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface Props {
  expId: string;
}

const DriverATaxi = ({ expId }: Props) => {
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

  return (
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { ease: "easeOut", duration: 0.2 },
      }}
    >
      {/* <Link
        to="/MobilityCard"
        style={{ textDecoration: "none", color: "#000" }}
      > */}
        <QrScanner
          imageUrl={Man}
          desccription={
            "Please pick up the device on your right and scan the QR code"
          }
          logo={
            <GenQRCode
              expId={expId}
              url={`https://taxibpp.becknprotocol.io?${expId}`}
            />
          }
        />
      {/* </Link> */}
    </motion.div>
  );
};

export default DriverATaxi;
