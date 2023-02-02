import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SequenceDiagram } from "react-sd";
import useInterval from "../common/MobilityCard/useInterval";
import EventApiContext from "../context/EventApiContext";
import "./Feedback.css";
import { ids } from "../utility/utils";

const ViewMyJourney = () => {
  const [events, setEvents] = React.useState([]);
  const { getEvent } = useContext(EventApiContext);

  const navigate = useNavigate();

  const fetchEvent = async () => {
    try {
      const res = await getEvent();

      setEvents(res?.events);
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
  const sourceId = events
    .sort((a, b) => a.eventId - b.eventId)
    .map((event) => {
      return event.event.eventSource.id;
    });
  const destinationId = events
    .sort((a, b) => a.eventId - b.eventId)
    .map((event) => {
      return event.event.eventDestination.id;
    });
  const mergedId = [...sourceId, ...destinationId];
  const uniqueSourceId = [...new Set(mergedId)];

  // eslint-disable-next-line array-callback-return
  const categories = uniqueSourceId.map((id) => {
    if (id === ids.mobility) {
      return "Travel buddy";
    } else if (id === ids.gateway) {
      return "gateway";
    } else if (id === ids.taxi) {
      return "taxi";
    } else if (id === ids.yatri) {
      return "Luxe Cabs";
    } else if (id === ids.whatsappMobility) {
      return "Whatsapp";
    }
  });
  // const imageCategories = [
  //   TravelbuddyLogo,
  //   "",
  //   TravelbuddyLogo,
  //   TravelbuddyLogo,
  // ];
  const updateEvents = events.filter((event) => {
    return event.event.eventSource.id !== event.event.eventDestination.id;
  });
  const data = updateEvents
    .sort((a, b) => a.eventId - b.eventId)
    .map((event) => {
      const sourceId = () => {
        if (event.event.eventSource.id === uniqueSourceId[0]) {
          return 0;
        } else if (event.event.eventSource.id === uniqueSourceId[1]) {
          return 1;
        } else if (event.event.eventSource.id === uniqueSourceId[2]) {
          return 2;
        } else if (event.event.eventSource.id === uniqueSourceId[3]) {
          return 3;
        } else if (event.event.eventSource.id === uniqueSourceId[0]) {
          return 0;
        }
      };

      const destinationId = () => {
        if (event.event.eventDestination.id === uniqueSourceId[0]) {
          return 0;
        } else if (event.event.eventDestination.id === uniqueSourceId[1]) {
          return 1;
        } else if (event.event.eventDestination.id === uniqueSourceId[2]) {
          return 2;
        } else if (event.event.eventDestination.id === uniqueSourceId[3]) {
          return 3;
        } else if (event.event.eventDestination.id === uniqueSourceId[0]) {
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

  const options = {
    boxWidth: 160,
    boxHeight: 40,
    gapEdge: 50,
    gapStep: 266,
    boxBorderColor: "#1E1E1E",
    stepLineWidth: 1,
    stepLineColor: "#fff",

    position: "relative",
    fontWeight: "400",
    fontSize: "16px",
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
  // eslint-disable-next-line array-callback-return
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
      <div>
        <div className="sequence">my journey </div>
        <div className="vmj-back-btn" onClick={() => navigate(-1)}>
          <img src="/assets/backArrw.png" alt="" /> go back
        </div>
      </div>
      <div className="flow-wrap">
        <SequenceDiagram
          categories={categories}
          data={data}
          style={{ ...options, ...customStyle }}
        />
        <div>
          {uniqueSourceId[0] === ids.mobility && (
            <img
              className="travelbuddylogo"
              src="/assets/TravelbuddyLogo.svg"
              alt=""
            />
          )}
          {uniqueSourceId[0] === ids.whatsappMobility && (
            <img
              className="whatsapplogo"
              src="/assets/whatsappLogo.png"
              alt=""
            />
          )}

          <img className="taxilogo" src="/assets/TaxiLogo.svg" alt="" />

          <img className="luxecabslogo" src="/assets/LuxeCabsLogo.svg" alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default ViewMyJourney;
