import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function IframeVideo() {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          right: "40px",
          top: "40px",
          height: "25px",
          width: "25px",
          cursor: "pointer",
        }}
      >
        <img width={"100%"} src="/assets/cross.svg" alt="" />
      </Box>
      <iframe
        className="iframeVideoBeck"
        src="/assets/Beckn-Final_27.12.mp4"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </Box>
  );
}

export default IframeVideo;
