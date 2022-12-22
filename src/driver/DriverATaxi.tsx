import QrScanner from "../common/qrScanner";
import Man from "../assets/man.svg";
import GenQRCode from "../utility/GenQRCode";
import { Link } from "react-router-dom";

interface Props {
  expId: string;
}

const DriverATaxi = ({ expId }: Props) => {
  return (
    <div>
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
    </div>
  );
};

export default DriverATaxi;
