import React from "react";
import menWithCar from "../assets/menWithCar.png";
import { Link } from "react-router-dom";
const ImproveTheExp = () => {
  return (
    <div style={{ overflow: "hidden" }}>
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
            padding: "20px",
            resize: "none",
          }}
        >
          Ohhh! Please let us know how we can help improve your experience.
        </p>
        <textarea
          style={{
            height: "160px",
            width: "360px",
            marginTop: "30px",
            background: "#1E1E1E",
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
    </div>
  );
};

export default ImproveTheExp;
