import React, { useEffect } from "react";
import QrScanner from "../common/qrScanner";
import Lady from "../assets/lady.svg";
import GenQRCode from "../utility/GenQRCode";
import { Link } from "react-router-dom";
interface Props {
  expId: string;
}
const ScanQrForTravelBuddy = ({ expId }: Props) => {
  const postExpId = async () => {
    await fetch("https://api.experience.becknprotocol.io/xc/experience", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        experienceId: expId,
        domainId: "mobility",
        active: true,
        eventSourceAppId: "1",
        created_at: Date.now(),
        last_modified_at: Date.now(),
      }), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((result) => console.log(result.experience_id, "result"))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    localStorage.setItem("expId", expId);
    postExpId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default ScanQrForTravelBuddy;
