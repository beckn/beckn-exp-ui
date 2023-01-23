import { useNavigate } from "react-router-dom";
import "./IframeVideo.css";

function IframeVideo() {
  const navigate = useNavigate();
  return (
    <div className="videoContainer">
      <div
        onClick={() => navigate(-1)}
        className="videosubcontainer"
      >
        <img width={"100%"} src="/assets/cross.svg" alt="" />
      </div>
      <iframe
        className="iframeVideoBeck"
        src="/assets/Beckn-Final_27.12.mp4"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </div>
  );
}

export default IframeVideo;
