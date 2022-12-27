import "./MobilityCard.css";
import Xarrow, { Xwrapper } from "react-xarrows";
import { useState } from "react";
import axios from "axios";
import NodeComponent from "./NodeComponent";
import useInterval from "./useInterval";
import BecknLogoIcon from "../../assets/becklogoSmall.svg";

const MobilityCard = () => {
  const [events, setEvents] = useState<any>([]);
  const expId = localStorage.getItem("expId");
  const fetchEvent = async () => {
    try {
      const res = await axios.get(
        `https://api.experience.becknprotocol.io/event/${expId}`
      );
      console.log(res.data.events, "res mob");
      setEvents(res.data.events);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };
  console.log(expId, "expId");

  useInterval(() => {
    fetchEvent();
  }, 2000);
  if (
    events.length > 0 &&
    events[0].event_code === "recieved_payconfirmation"
  ) {
    setTimeout(() => {
      window.location.href = "/WhatWouldYouDoLikeToNext";
    }, 2000);
  }

  return (
    <div>
      <img
        src={BecknLogoIcon}
        alt={"BecknLogoIcon"}
        style={{
          marginTop: "-97px",
          marginLeft: "30px",
          display: "flex",
        }}
      />
      <Xwrapper>
        <NodeComponent
          driverText={"driver"}
          riderText={events.length > 0 ? events[0].event_message : "rider"}
        />
        {events.length > 0 && (
          <Xarrow
            key={events[0].event_id}
            start={events[0].event_source_id}
            end={events[0].event_destination_id}
            lineColor={
              events[0].event_source_id === "taxi" ||
              (events[0].event_source_id === "gateway" &&
                events[0].event_destination_id === "mobility")
                ? "#FB1E1E"
                : "#23DFDF"
            }
            headColor={
              events[0].event_source_id === "taxi" ||
              (events[0].event_source_id === "gateway" &&
                events[0].event_destination_id === "mobility")
                ? "#FB1E1E"
                : "#23DFDF"
            }
            animateDrawing={true}
            headSize={7}
            path={"straight"}
            labels={{
              middle: <div className="step"></div>,
            }}
          />
        )}
      </Xwrapper>

      {/* <Xarrow
          start={events[0].event_source_id}
          end={events[0].event_destination_id}
          lineColor={"#fff"}
          headColor={"#fff"}
          path={"straight"}
          labels={<div className="step">{events[0].event_title}</div>}
          animateDrawing={true}
        />
            // if (events.length === 0) {
  //   return (
  //     <div>
  //       <Xwrapper>
  //         <NodeComponent driverText={"driver"} riderText={"rider"} />
  //         <Xarrow
  //           start={null as any}
  //           end={null as any}
  //           lineColor={"#fff"}
  //           headColor={"#fff"}
  //           path={"straight"}
  //           animateDrawing={true}
  //         />
  //       </Xwrapper>
  //     </div>
  //   );
  // }

        */}
    </div>
  );
};

export default MobilityCard;
