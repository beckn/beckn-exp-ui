import React, { useState } from "react";
import QRcode from "react-qr-code";
interface Props {
  expId: string;
  url: string;
}
const GenQRCode = ({ expId, url }: Props) => {
  return (
    <div>
      <QRcode style={{ width: "180px", opacity: "0.5" }} value={url} />
    </div>
  );
};

export default GenQRCode;
