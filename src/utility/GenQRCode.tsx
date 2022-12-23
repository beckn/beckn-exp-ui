import React, { useEffect, useState } from "react";
import QRcode from "react-qr-code";
interface Props {
  expId: string;
}
const GenQRCode = ({ expId }: Props) => {
  const [data, setData] = useState(
    `https://taxibap-staging.becknprotocol.io?${expId}`
  );
  return (
    <div>
      <QRcode style={{ width: "180px", opacity: "0.5" }} value={data} />
    </div>
  );
};

export default GenQRCode;
