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
        />
        <div className="main-container">
          <div className="txtcenter">
            <div className="marginbottom40">
              <img src="/assets/becknLogoIcon.svg" alt={"BecknLogoIcon"} />
            </div>
            <div className="weltext">
              <Typography className="welcomePage-content">
                welcome to the beckn experience centre
              </Typography>
            </div>
            <div className="margintop40">
              <Link
                to="/VisualizeAction"
                style={{ textDecoration: "none", color: "#000", cursor: "default" }}
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
