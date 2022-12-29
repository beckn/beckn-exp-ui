import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import homeIcon from "../assets/homeIcon.png";

interface qrScannerPropsModal {
  imageUrl: any;
  desccription: string;
  logo: any;
}

const QrScanner: React.FC<qrScannerPropsModal> = ({
  imageUrl,
  desccription,
  logo,
}: qrScannerPropsModal) => {
  return (
    <Box
      className="main-container"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "96%",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        <Box>
          <img src={BecknLogoIcon} alt={"BecknLogoIcon"} />
        </Box>
        <Box style={{ cursor: "pointer" }}>
          <img src={homeIcon} alt={"HomeIcon"} />
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Box>
          <img
            style={{ width: "25rem", position: "relative", top: "5em" }}
            src={imageUrl}
            alt={"Lady"}
          />
        </Box>
        <Box style={{ height: "max-content" }}>
          <Card
            sx={{
              maxWidth: 445,
              height: "70%",
              background: "#1E1E1E",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography
                marginTop={"50px"}
                padding={"25px"}
                fontSize={"32px"}
                fontWeight={"275"}
                lineHeight={"48px"}
                alignItems={"center"}
                color={"#FFFFFF"}
              >
                {desccription}
              </Typography>
              {logo}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default QrScanner;
