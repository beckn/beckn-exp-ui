import React from "react";
import { Card, Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

interface cardContentPropsModal {
  mainIconUrl?: any;
  MainTitle?: string;
  subTitle?: string;
  arrowIconUrl?: any;
  mainIconUrlInBlack?: any;
  arrowIconInBlackColor?: any;
  className?: string;
}
const useStyles = makeStyles((theme: any) => ({
  root: {
    // "&:hover": {
    //   backgroundColor: "#AED3F0",
    //   color: '#000000'
    // }
  },
  text: {
    // "&:hover": {
    //   color: '#000000'
    // }
  },
}));

const CardWithContent: React.FC<cardContentPropsModal> = ({
  mainIconUrl,
  MainTitle,
  subTitle,
  arrowIconUrl,
  mainIconUrlInBlack,
  arrowIconInBlackColor,
  className,
}: cardContentPropsModal) => {
  const classes = useStyles();

  return (
    <Card
      className={className}
      style={{
        width: "639px",
        height: "245px",
        border: "1px solid #272727",
        background:
          "linear-gradient(0deg, #000000, #000000),linear-gradient(0deg, #272727, #272727)",
      }}
    >
      <Box
        className={classes.root}
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          display={"flex"}
          height={"100%"}
          alignItems={"center"}
          color={"green"}
        >
          <Box paddingLeft={"40px"} className="image-url-container">
            <img src={mainIconUrl} alt={"BecknLogoIcon"} />
            <img src={mainIconUrlInBlack} alt={"BecknLogoIcon"} />
          </Box>
          <Box paddingLeft={"40px"} textAlign={"left"}>
            <Typography
              className={classes.text}
              fontSize={"35px"}
              color={"#AED3F0"}
            >
              {MainTitle}
            </Typography>
            <Typography
              className={classes.text}
              fontSize={"20px"}
              color={"#FFFFFF"}
            >
              {subTitle}
            </Typography>
          </Box>
        </Box>
        <Box className="image-url-container">
          <img
            style={{ position: "relative", top: "20px", right: "20px" }}
            src={arrowIconUrl}
            alt={"BecknLogoIcon"}
          />
          <img
            style={{ position: "relative", top: "20px", right: "20px" }}
            src={arrowIconInBlackColor}
            alt={"BecknLogoIcon"}
          />
        </Box>
      </Box>
    </Card>
  );
};
export default CardWithContent;
