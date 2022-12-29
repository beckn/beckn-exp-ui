import React from "react";
import menWithCar from "../assets/menWithCar.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const YourFeedbackIsValubleForUs = () => {
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
          padding: "20px",
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
            padding: "20px",
            resize: "none",
          }}
        >
          your feedback is valuable to us
        </p>
        <textarea
          style={{
            height: "160px",
            width: "360px",
            marginTop: "30px",
            background: "#1E1E1E",
            color: "#fff",
          }}
          name="textarea"
          id="textarea"
        ></textarea>
        <div
          style={{
            display: "flex",
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
              to="/thankYouForVisitBecknExpCenter"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Submit
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

export default YourFeedbackIsValubleForUs;
