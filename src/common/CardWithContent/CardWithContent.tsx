import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const CardWithContent = (props: any) => {
  const { title, subtitle, imageUrl } = props;
  return (
    <Card
      style={{
        backgroundColor: "black",
        width: "300px",
        border: "1px solid #272727",
        color: "white",
        display: "flex",
      }}
    >
      <div>
        {/* <CardMedia image={imageUrl}></CardMedia> */}
        <img className="image-icon" src={imageUrl} />
      </div>
      <CardContent>
        <div>
          <Typography variant="subtitle1" className="title" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle2" className="subtitle" gutterBottom>
            {subtitle}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardWithContent;
