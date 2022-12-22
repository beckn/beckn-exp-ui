import React from "react";
import QrScanner from "../common/qrScanner";
import Lady from "../assets/lady.svg";
import GenQRCode from "../utility/GenQRCode";
import { Link } from "react-router-dom";

interface Props {
  expId: string;
}

const useWhatsapp = ({ expId }: Props) => {
  return (
    <div>
      <Link
        to="/MobilityCard"
        style={{ textDecoration: "none", color: "#000" }}
      >
        <QrScanner
          imageUrl={Lady}
          desccription={
            "Please pick up the device on your right and scan the QR code"
          }
          logo={<GenQRCode expId={expId} />}
        />
      </Link>
    </div>
  );
};

export default useWhatsapp;
