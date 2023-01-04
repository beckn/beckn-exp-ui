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
  const ids = {
    mobility: "mobilityreferencebap.becknprotocol.io",
    taxi: "becknify.humbhionline.in.mobility.BPP/beckn_open/app1-succinct-in",
    gateway: "gateway.becknprotocol.io",
    whatsappMobility: "mobilityreferencebap-staging.becknprotocol.io",
    yatri: "becknify.humbhionline.in/mobility/beckn_open/taxi-staging/bpp",
  };
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
  const sourceId = events.map((event) => {
    return event.event.eventSource.id;
  });
  const uniqueSourceId = [...new Set(sourceId)];
  console.log(uniqueSourceId, "uniqueSourceId");
  console.log(sourceId, "sourceId");
  const categories = uniqueSourceId.map((id) => {
    if (id === ids.mobility) {
      return "Travelbuddy";
    } else if (id === ids.gateway) {
      return "gateway";
    } else if (id === ids.taxi) {
      return "taxi";
    } else if (id === ids.yatri) {
      return "LuxeCabs";
    }
  });
  const imageCategories = [
    TravelbuddyLogo,
    "",
    TravelbuddyLogo,
    TravelbuddyLogo,
  ];

  const data = events
    .sort((a, b) => a.eventId - b.eventId)
    .map((event) => {
      const sourceId = () => {
        if (event.event.eventSource.id === ids.mobility) {
          return 0;
        } else if (event.event.eventSource.id === ids.gateway) {
          return 1;
        } else if (event.event.eventSource.id === ids.taxi) {
          return 2;
        } else if (event.event.eventSource.id === ids.yatri) {
          return 3;
        } else if (event.event.eventSource.id === ids.whatsappMobility) {
          return 0;
        }
      };

      const destinationId = () => {
        if (event.event.eventDestination.id === ids.mobility) {
          return 0;
        } else if (event.event.eventDestination.id === ids.gateway) {
          return 1;
        } else if (event.event.eventDestination.id === ids.taxi) {
          return 2;
        } else if (event.event.eventDestination.id === ids.yatri) {
          return 3;
        } else if (event.event.eventDestination.id === ids.whatsappMobility) {
          return 0;
        }
      };
      const message = event.event.eventMessage.actionMessage;

      return {
        from: sourceId(),
        to: destinationId(),
        edge: message,
      };
    });
  console.log(events, "events");

  const options = {
    boxWidth: 140,
    boxHeight: 40,
    gapEdge: 50,
    gapStep: 266,
    boxBorderColor: "#1E1E1E",
    stepLineWidth: 1,
    stepLineColor: "#fff",
    // position: "absolute",
    // top: "15%",
    // left: "15%",
    position: "relative",
    fontWeight: "300",
    fontSize: "14px",
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

  const elements = Array.from(document.getElementsByClassName("point-left"));
  elements.map((element) => {
    element.parentNode.classList.add("main-div");
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        background: "#000",
        minHeight: "100vh",
        height: "fit-content",
      }}
    >
      <div className="sequence">my journey </div>
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
      <Box
        className="flow-wrap"
        position={"relative"}
        margin="0 auto"
        width="1200px"
      >
        <SequenceDiagram
          categories={categories}
          data={data}
          style={{ ...options, ...customStyle }}
        />
        <Box>
          <img
            src={TravelbuddyLogo}
            alt=""
            style={{
              position: "absolute",
              top: "9px",
              left: " 10%",
            }}
          />
          <img
            src={TaxiLogo}
            alt=""
            style={{
              position: "absolute",
              top: "5px",
              left: "55%",
            }}
          />
          <img
            src={LuxeCabsLogo}
            alt=""
            style={{
              position: "absolute",
              top: "9px",
              left: " 76.3%",
              width: "2.5%",
            }}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default ViewMyJourney;
