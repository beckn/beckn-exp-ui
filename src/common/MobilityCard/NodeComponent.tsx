import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myMobility from "../../assets/myMobility.svg";
import RHP from "../../assets/RHP.svg";
import whatsappMobility from "../../assets/whatsappMobility.svg";
import LuxeCab from "../../assets/luxe.svg";
import axios from "axios";
import useInterval from "./useInterval";
import EventApiContext from "../../context/EventApiContext";
import {
  mobilityCardArr,
  ids,
  getClassNameOfNode,
  getClassNameOfNodeForBorder,
} from "../../utility/utils";

const NodeComponent = (props: any) => {
  const [experienceCenterId, setExperienceCenterId] = useState<any>("");
  const [events, setEvents] = useState<any>([]);
  const { getEvent } = useContext(EventApiContext);

  const fetchEvent = async () => {
    try {
      const res = await getEvent();
      setExperienceCenterId(res?.experienceSession.experienceCenterId);
      setEvents(res?.events);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  useEffect(() => {
    fetchEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortedEvents = events
    .map((e: any) => e)
    .sort((a: any, b: any) => b.eventId - a.eventId);

  useInterval(() => {
    fetchEvent();
  }, 500);

  // const getClassNameOfNode = (ele: any, events: any) => {
  //   if (events.length > 0) {
  //     if (events.some((ev: any) => ele.id === ev.event.eventSource.id)) {
  //       return "source-node";
  //     } else if (
  //       events.some((ev: any) => ele.id === ev.event.eventDestination.id)
  //     ) {
  //       return "dest-node";
  //     } else {
  //       return "";
  //     }
  //   }
  //   return "";
  // };

  // const getClassNameOfNodeForBorder = (ele: any, events: any) => {
  //   if (events.length > 0) {
  //     if (events.some((ev: any) => ele.id === ev.event.eventSource.id)) {
  //       return "source-node-border";
  //     } else if (
  //       events.some((ev: any) => ele.id === ev.event.eventDestination.id)
  //     ) {
  //       return "dest-node-border";
  //     } else {
  //       return "";
  //     }
  //   }
  //   return "";
  // };

  return (
    <>
      <div className="mobility-row">
        {events.length > 0 &&
        sortedEvents[0].event.eventSource.id ===
          sortedEvents[0].event.eventDestination.id ? (
          <h3
            className={
              (sortedEvents[0].event.eventSource.id &&
                sortedEvents[0].event.eventDestination.id) === ids.mobility
                ? "mobilitySource"
                : (sortedEvents[0].event.eventSource.id &&
                    sortedEvents[0].event.eventDestination.id) === ids.taxi
                ? "taxihubSource"
                : (sortedEvents[0].event.eventSource.id &&
                    sortedEvents[0].event.eventDestination.id) ===
                  ids.whatsappMobility
                ? "whatsappSource"
                : (sortedEvents[0].event.eventSource.id &&
                    sortedEvents[0].event.eventDestination.id) === ids.yatri
                ? "luxecabSource"
                : ""
            }
          >
            {events[0].event.eventMessage.actionMessage}
          </h3>
        ) : null}

        {mobilityCardArr.map((ele, ind) => {
          return (
            <div id={ele.id} className={`${ele.name}s `} key={ind}>
              <div
                className={`border${ele.name} ${getClassNameOfNodeForBorder(
                  ele,
                  props.uniqueArray
                )}`}
              >
                <div
                  className={`${ele.name} 
                  ${getClassNameOfNode(ele, props.uniqueArray)}
                  `}
                  style={{ background: "#ACD1F0" }}
                >
                  {ele.img ? (
                    <img src={ele.img} alt="" />
                  ) : (
                    <div>{ele.title}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mobilityFooter">
        <div className="GWP">
          <div className="GWP-text">{props.riderText}</div>

          <img src="/assets/girlWithPhone.svg" alt="" />
        </div>
        <div className="MWP">
          <div className="MWP-text">{props.driverText}</div>
          <Link to="/WhatWouldYouDoLikeToNext">
            <img src="/assets/menWithPhone.svg" alt="" />
          </Link>
        </div>
        <img
          className={`circle ${
            experienceCenterId === "2"
              ? "circle-driver-active"
              : "circle-driver"
          }`}
          src="/assets/circle.svg"
          alt=""
        />
      </div>
    </>
  );
};

export default NodeComponent;
