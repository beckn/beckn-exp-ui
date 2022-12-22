import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";
import BecknLogoIcon from "../assets/becknLogoIcon.svg";

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
    <Box className="main-container" style={{ width: "100%" }}>
      <Box>
        <img
          style={{ marginTop: "50px", marginLeft: "30px" }}
          src={BecknLogoIcon}
          alt={"BecknLogoIcon"}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "100%",
        }}
      >
        <Box>
          <img
            style={{ width: "25rem", position: "relative", top: "5em" }}
            src={imageUrl}
            alt={"Lady"}
          />
        </Box>
        <Box>
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
