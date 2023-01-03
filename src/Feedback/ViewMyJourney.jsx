import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import backArrw from "../assets/backArrw.png";
import { motion } from "framer-motion";
import { SequenceDiagram } from "react-sd";
import axios from "axios";
import useInterval from "../common/MobilityCard/useInterval";
import TravelbuddyLogo from "../assets/TravelbuddyLogo.svg";
import TaxiLogo from "../assets/TaxiLogo.svg";
import LuxeCabsLogo from "../assets/LuxeCabsLogo.svg";
const ViewMyJourney = () => {
  const [events, setEvents] = React.useState([]);
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
  useInterval(() => {
    fetchEvent();
  }, 2000);
  const categories = ["Travel Buddy", "Gateway", "Taxi", "Luxe Cabs"];
  // const mockData = [
  //   {
  //     from: 0,
  //     to: 1,
  //     edge: "search",
  //   },
  //   {
  //     from: 1,
  //     to: 2,
  //     edge: "search",
  //   },
  //   {
  //     from: 1,
  //     to: 3,
  //     edge: "search",
  //   },
  //   {
  //     from: 3,
  //     to: 1,
  //     edge: "search",
  //   },
  //   {
  //     from: 2,
  //     to: 1,
  //     edge: "select",
  //   },
  //   {
  //     from: 0,
  //     to: 2,
  //     edge: "select",
  //   },
  //   {
  //     from: 2,
  //     to: 0,
  //     edge: "select",
  //   },
  //   {
  //     from: 0,
  //     to: 2,
  //     edge: "init",
  //   },
  //   {
  //     from: 2,
  //     to: 0,
  //     edge: "init",
  //   },
  //   {
  //     from: 0,
  //     to: 2,
  //     edge: "init",
  //   },
  //   {
  //     from: 2,
  //     to: 0,
  //     edge: "init",
  //   },
  //   {
  //     from: 0,
  //     to: 2,
  //     edge: "init",
  //   },
  //   {
  //     from: 2,
  //     to: 0,
  //     edge: "init",
  //   },
  //   {
  //     from: 0,
  //     to: 2,
  //     edge: "init",
  //   },
  //   {
  //     from: 2,
  //     to: 0,
  //     edge: "init",
  //   },
  // ];

  const data = events
    .sort((a, b) => a.eventId - b.eventId)
    .map((event) => {
      const sourceId = () => {
        if (
          event.event.eventSource.id === "mobilityreferencebap.becknprotocol.io"
        ) {
          return 0;
        } else if (event.event.eventSource.id === "gateway.becknprotocol.io") {
          return 1;
        } else if (
          event.event.eventSource.id ===
          "becknify.humbhionline.in.mobility.BPP/beckn_open/app1-succinct-in"
        ) {
          return 2;
        } else if (
          event.event.eventSource.id ===
          "becknify.humbhionline.in/mobility/beckn_open/taxi-staging/bpp"
        ) {
          return 3;
        }
      };

      const destinationId = () => {
        if (
          event.event.eventDestination.id ===
          "mobilityreferencebap.becknprotocol.io"
        ) {
          return 0;
        } else if (
          event.event.eventDestination.id === "gateway.becknprotocol.io"
        ) {
          return 1;
        } else if (
          event.event.eventDestination.id ===
          "becknify.humbhionline.in.mobility.BPP/beckn_open/app1-succinct-in"
        ) {
          return 2;
        } else if (
          event.event.eventDestination.id ===
          "becknify.humbhionline.in/mobility/beckn_open/taxi-staging/bpp"
        ) {
          return 3;
        }
      };
      const message = event.event.eventMessage.actionMessage;
      // console.log(sourceId(), destinationId, message, "data");
      return {
        from: sourceId(),
        to: destinationId(),
        edge: message,
      };
    });
  console.log(data, "data");

  const options = {
    boxWidth: 200,
    boxHeight: 50,
    gapEdge: 43,
    gapStep: 370,
    boxBorderColor: "#1E1E1E",
    stepLineWidth: 1,
    stepLineColor: "#fff",
    position: "absolute",
    top: "15%",
    left: "15%",
    fontWeight: "300",
  };

  const customStyle = {
    edgeStyle: {
      color: "#fff",
    },
    stepStyle: {
      topBoxStyle: {
        color: "#fff",
        background: "#1E1E1E",
      },
      bottomBoxStyle: {
        visibility: "hidden",
      },
    },
    edgeLineColor: " #23DFDF",
    edgePointColor: "#23DFDF",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        background: "#000",
        height: "100vh",
      }}
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
      <SequenceDiagram
        categories={categories}
        data={data}
        style={{ ...options, ...customStyle }}
      />
      <img
        src={TravelbuddyLogo}
        alt=""
        style={{
          position: "absolute",
          top: "16.5%",

          left: " 21.5%",
        }}
      />
      <img
        src={TaxiLogo}
        alt=""
        style={{
          position: "absolute",
          top: "16%",

          left: " 62%",
        }}
      />
      <img
        src={LuxeCabsLogo}
        alt=""
        style={{
          position: "absolute",
          top: "16%",
          left: " 79%",
        }}
      />
    </motion.div>
  );
};

export default ViewMyJourney;
