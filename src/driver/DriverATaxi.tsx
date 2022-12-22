import React from "react";
import QrScanner from "../common/qrScanner";
import Lady from "../assets/lady.svg";
import Qr from "../assets/Qr.svg";
import GenQRCode from "../utility/GenQRCode";

interface Props {
  expId: string;
}

const DriverATaxi = ({ expId }: Props) => {
  return (
    <div>
      <QrScanner
        imageUrl={Lady}
        desccription={
          "Please pick up the device on your right and scan the QR code"
        }
        logo={<GenQRCode expId={expId} />}
      />
    </div>
  );
};

export default DriverATaxi;
