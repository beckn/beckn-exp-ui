import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import BecknLogoIcon from "../assets/becklogoSmall.svg";
import homeIcon from "../assets/homeIcon.png";
import Arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

interface qrScannerPropsModal {
  imageUrl: any;
  desccription: string;
  logo: any;
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  background: "black",
  color: "#AED3F0",
  width: "104px",
  padding: "6px",
  borderRadius: "12px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-around",
  fontSize: "16px",
  textTransform: "lowercase",
  "&:hover": {
    backgroundColor: "#0E0E0E",
  },
}));

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
              <Box
                style={{
                  margin: "30px auto",
                  padding: "6px",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
              <Link
                to="/MobilityCard"
                style={{ textDecoration: "none",color: "#AED3F0", }}
              >
                <ColorButton
                  endIcon={<img src={Arrow} alt={""} />}
                >
                  Next
                </ColorButton>
              </Link>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default QrScanner;
