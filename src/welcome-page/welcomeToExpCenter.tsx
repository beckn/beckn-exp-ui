import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { motion } from "framer-motion";

const WelcomeToExpCenter = () => {
  useEffect(() => {
    localStorage.removeItem("expId");
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ overflow: "hidden" }}
    >
      <div className="myvideo">
        <video
          src="/assets/Back.mp4"
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
        <div className="main-container">
          <div style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "40px" }}>
              <img src="/assets/becknLogoIcon.svg" alt={"BecknLogoIcon"} />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography className="welcomePage-content">
                welcome to the beckn experience centre
              </Typography>
            </div>
            <div style={{ marginTop: "40px" }}>
              <Link
                to="/VisualizeAction"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <button className="begin-journey">
                  <span> begin your journey</span>
                  <img src="/assets/arrow.svg" alt={"BecknLogoIcon"} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeToExpCenter;
