import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import backArrw from "../assets/backArrw.png";
import { motion } from "framer-motion";
import axios from "axios";
import Sequence from "react-sequence-diagram";

const ViewMyJourney = () => {
  const [events, setEvents] = React.useState<any>([]);
  const expId = localStorage.getItem("expId");

  const navigate = useNavigate();
  const fetchEvent = async () => {
    try {
      const res = await axios.get(
        `https://api.experience.becknprotocol.io/v2/event/${expId}`
      );

      setEvents(res.data.events);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };
  useEffect(() => {
    fetchEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("events", events);
  const GATEWAY = "Gateway";
  const TRAVELBUDDY = "Travel Buddy";
  const TAXI = "Taxi";
  const YATRI = "yatri";
  // const PATH = "/admin/orders";
  return (
    <motion.div
      // initial={{ width: "0%" }}
      // animate={{ width: "100%" }}
      // exit={{
      //   x: window.innerWidth,
      //   transition: { ease: "easeIn", duration: 0.2 },
      // }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ background: "aqua" }}
    >
      <div className="sequence">sequential flow</div>
      <Box
        style={{
          background: "black",
          color: "#AED3F0",
          width: "104px",
          margin: "40px auto",
          padding: "6px",
          borderRadius: "12px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-around",
          position: "absolute",
          top: "0px",
          left: "10px",
          fontSize: "14px",
        }}
        onClick={() => navigate(-1)}
      >
        <img src={backArrw} alt="" /> go back
      </Box>
      <Sequence
        input={`
    ${TRAVELBUDDY}->${GATEWAY}: 2 - 1
    
    ${GATEWAY}->${TAXI}:1 - 3
    ${GATEWAY}->${YATRI}: 1 - 5
    ${YATRI}->${GATEWAY}: 5 - 1
    ${TAXI}->${GATEWAY}: 3 - 1
    ${GATEWAY}->${TRAVELBUDDY}: 1 - 2
      ${TAXI}->${TRAVELBUDDY}: 1 - 3
    ${TAXI}->${YATRI}: {path: "1 - 3", path: "3 - 5"}
    ${YATRI}->${YATRI}: Diff incoming page
    ${YATRI}->${TRAVELBUDDY}: apply new scripts/styles
    ${YATRI}->${TAXI}: update page contents, disable loading
    ${TAXI}->${TRAVELBUDDY}: update DOM
  `}
        options={{
          theme: "simple",
          css_class: "sequence",
        }}
      />
    </motion.div>
  );
};

export default ViewMyJourney;
