import React from "react";
import { QRCode } from "antd";

interface Props {
  url: string;
}
const GenQRCode = ({ url }: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <QRCode
        errorLevel="H"
        value={url}
        icon="https://media.licdn.com/dms/image/C560BAQE2YDgbg7Y4hA/company-logo_100_100/0/1632750319720?e=1681344000&v=beta&t=FT2l1AbAMBJMXzoXoiw6vsf0AN2400O2N9pU1rYv54M"
      />
    </div>
  );
};

export default GenQRCode;
