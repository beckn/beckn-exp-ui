import "./MobilityCard.css";
import Xarrow, { Xwrapper } from "react-xarrows";
import { useState } from "react";
import axios from "axios";
import NodeComponent from "./NodeComponent";
import useInterval from "./useInterval";
import { useNavigate } from "react-router-dom";
import BecknLogoIcon from "../../assets/becklogoSmall.svg";

const MobilityCard = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<any>([]);
  const expId = localStorage.getItem("expId");
  const fetchEvent = async () => {
    try {
      const res = await axios.get(
        `https://api.experience.becknprotocol.io/event/${expId}`
      );

      setEvents(res.data.events);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  useInterval(() => {
    fetchEvent();
  }, 1000);

  if (
    events.length > 0 &&
    events[events.length - 1].event_code === "recieved_payconfirmation"
  ) {
    setTimeout(() => {
      navigate("/WhatWouldYouDoLikeToNext");
      // window.location.href = "/WhatWouldYouDoLikeToNext";
    }, 5000);
  }
  // eslint-disable-next-line array-callback-return
  const slicedArr: any[] = [];

  events.map((event: any) => {
    if (
      (event.event_source_id === "gateway" &&
        event.event_destination_id === "taxi") ||
      (event.event_source_id === "gateway" &&
        event.event_destination_id === "yatri")
    ) {
      console.log(`if`);
      return slicedArr.push(...events.slice(1, events.length));
    } else if (
      (event.event_source_id === "yatri" &&
        event.event_destination_id === "gateway") ||
      (event.event_source_id === "taxi" &&
        event.event_destination_id === "gateway")
    ) {
      console.log(`else if`);
      slicedArr.splice(0);
      return slicedArr.push(...events.slice(3, events.length));
    } else if (
      event.event_source_id === "gateway" &&
      event.event_destination_id === "mobility"
    ) {
      console.log(`else if 2`);
      slicedArr.splice(0);
      return slicedArr.push(
        ...events.slice(
          events[events.length - 2].event_source_id === "taxi"
            ? events.length - 1
            : events.length - 2,
          events.length
        )
      );
    } else {
      console.log(`else`);
      slicedArr.splice(0);
      return slicedArr.push(...events.slice(-1));
    }
  });
  const duplicate = slicedArr.filter(
    (item, index) =>
      slicedArr.findIndex((item2) => item2.event_code === item.event_code) ===
      index
  );
  console.log(
    duplicate.map((e) => e),
    "duplicate"
  );

  console.log(events, "events");
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
        {events.length > 0 &&
          duplicate.map((event: any) => {
            return (
              <Xarrow
                key={event.event_code}
                start={event.event_source_id}
                end={event.event_destination_id}
                lineColor={
                  event.event_source_id === "taxi" ||
                  event.event_source_id === "yatri" ||
                  (event.event_source_id === "gateway" &&
                    event.event_destination_id === "mobility")
                    ? "#FB1E1E"
                    : "#23DFDF"
                }
                headColor={
                  event.event_source_id === "taxi" ||
                  event.event_source_id === "yatri" ||
                  (event.event_source_id === "gateway" &&
                    event.event_destination_id === "mobility")
                    ? "#FB1E1E"
                    : "#23DFDF"
                }
                animateDrawing={true}
                headSize={7}
                path={"straight"}
                labels={<div className="step"></div>}
              />
            );
          })}
        {/* {events.length > 0 && (
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
            labels={<div className="step"></div>}
          />
        )} */}
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
