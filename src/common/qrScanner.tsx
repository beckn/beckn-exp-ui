import React, { useState } from "react";
import { Box, Card, CardContent, Modal, Typography } from "@mui/material";
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
    <>
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
                  style={{ textDecoration: "none", color: "#AED3F0" }}
                >
                  <ColorButton endIcon={<img src={Arrow} alt={""} />}>
                    Next
                  </ColorButton>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
      {/* </Box> */}
    </>
  );
};

export default QrScanner;
