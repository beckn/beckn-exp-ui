import React from "react";
import QRcode from "react-qr-code";
interface Props {
  expId: string;
}
const GenQRCode = ({ expId }: Props) => {
  const url = `https://taxibap-staging.becknprotocol.io?${expId}`;
  return (
    <div>
      <QRcode style={{ width: "180px", opacity: "0.5" }} value={url} />
    </div>
  );
};

export default GenQRCode;
