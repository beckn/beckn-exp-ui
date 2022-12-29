import QrScanner from "../common/qrScanner";
import Man from "../assets/man.svg";
import GenQRCode from "../utility/GenQRCode";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  expId: string;
}

const DriverATaxi = ({ expId }: Props) => {
  return (
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { ease: "easeOut", duration: 0.2 },
      }}
    >
      <Link
        to="/MobilityCard"
        style={{ textDecoration: "none", color: "#000" }}
      >
        <QrScanner
          imageUrl={Man}
          desccription={
            "Please pick up the device on your right and scan the QR code"
          }
          logo={<GenQRCode expId={expId} />}
        />
      </Link>
    </motion.div>
  );
};

export default DriverATaxi;
