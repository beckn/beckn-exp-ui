import React from "react";
import menWithCar from "../assets/menWithCar.png";
import tiltArrowBlack from "../assets/tiltArrowblack.svg";
import tiltArrow from "../assets/tiltArrow.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const DidYouLikeBecknExp = () => {
  return (
    <motion.div
      style={{ overflow: "hidden" }}
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { ease: "easeOut", duration: 0.2 },
      }}
    >
      <div
        style={{
          height: "600px",
          width: "440px",
          background: "#1E1E1E",
          position: "absolute",
          left: "108px",
          top: "22%",
        }}
      >
        <p
          style={{
            fontSize: "48px",
            color: "#fff",
            padding: "30px ",
            resize: "none",
          }}
        >
          Awesome! Please share your valuable feedback with us.
        </p>

        <div
          style={{
            // display: "flex",

            width: "100%",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              padding: "8px 20px",
              background: "#ACD1F0",
              borderRadius: "12px",
              width: "100px",
              margin: "0 auto",
            }}
          >
            <Link
              to="/yourFeedbackIsValubleForUs"
              style={{ textDecoration: "none", color: "#000" }}
            >
              yes{" "}
              <img src={tiltArrowBlack} width={"10px"} alt="tiltArrowBlack" />
            </Link>
          </div>
          <div
            style={{
              marginTop: "20px",
              padding: "8px 30px",
              background: "#000",
              color: "#fff",
              borderRadius: "12px",
              width: "100px",
              margin: "20px auto",
            }}
          >
            <Link
              to="/improveTheExp"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              no <img src={tiltArrow} width={"10px"} alt="tiltArrow" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img src={menWithCar} alt="" />
      </div>
    </motion.div>
  );
};

export default DidYouLikeBecknExp;
