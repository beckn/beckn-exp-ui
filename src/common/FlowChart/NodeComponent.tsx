import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactFlow, { useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import FloatingEdge from "./FloatingEdge";
import { createNodesAndEdges } from "./nodeUtils";
import { ids } from "../../utility/utils";
import "./index.css";
import EventApiContext from "../../context/EventApiContext";
import useInterval from "../MobilityCard/useInterval";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import ErrorModal from "../ErrorModal/ErrorModal";
import socket from "../../socket";

const edgeTypes: any = {
  floating: FloatingEdge,
};

const NodeAsHandleFlow: React.FC = () => {
  const [events, setEvents] = useState<any>([]);
  const [eventsRes, setEventsRes] = useState<any>([]);
  const [events1, setEvents1] = useState<any>([]);
  const { nodes: initialNodes, edges: initialEdge } = createNodesAndEdges(
    events,
    events1
  );
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const { getEvent } = useContext(EventApiContext);
  const [experienceCenterId, setExperienceCenterId] = useState<any>("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(true);
  };
  const [telemetryData, setTelemetryData] = useState([]);

  useEffect(() => {
    socket.on("telemetry_data", (data) => {
      console.log("telemetry data", data);
      setTelemetryData(data.data);
      setEvents(data.data);
    });

    return () => {
      if (socket) {
        socket.off("telemetry_data");
      }
    };
  }, []);

  useEffect(() => {
    if (eventsRes[0]?.action === "ending ride") {
      navigate("/WhatWouldYouDoLikeToNext");
    }
  }, [eventsRes]);

  // const fetchEvent = async () => {
  //   const res = await getEvent();
  //   setExperienceCenterId(res?.experienceSession.experienceCenterId);
  //   try {
  //     setEventsRes(res?.events);
  //     setEvents(res?.events[0].event);
  //     const firstResponseOfAPI = await res?.events[1].event.eventMessage
  //       .eventCode;
  //     const secondResponseOfAPI = await res?.events[0].event.eventMessage
  //       .eventCode;

  //     if (
  //       (firstResponseOfAPI === ids.searchBroadCast &&
  //         secondResponseOfAPI === ids.searchBroadCast) ||
  //       (firstResponseOfAPI === "mbth_snt_catalogue" &&
  //         secondResponseOfAPI === "mblc_snt_catalogue") ||
  //       (firstResponseOfAPI === "mblc_snt_catalogue" &&
  //         secondResponseOfAPI === "mbth_snt_catalogue") ||
  //       (firstResponseOfAPI === ids.mbgwSentCatalogueBap &&
  //         secondResponseOfAPI === ids.mbgwSentCatalogueBap) ||
  //       (firstResponseOfAPI === ids.mbgwSentCatalogueBap &&
  //         secondResponseOfAPI === ids.mbgwSentCatalogueBap)
  //     ) {
  //       setEvents1(res?.events[1].event);
  //     } else {
  //       setEvents1([]);
  //     }
  //   } catch (error) {}
  // };

  // useInterval(() => {
  //   fetchEvent();
  // }, 1000);

  //TODO :- THis logic is for updating nodes based on some logic

  // const updateNodes = nodes
  //   .map((node) => {
  //     if (
  //       node.id === ids.pulseEnergyWhatsapp &&
  //       events?.eventSource?.id === ids.pulseEnergyWhatsapp &&
  //       events?.eventDestination?.id === ids.pulseEnergyWhatsapp
  //     ) {
  //       return {
  //         ...node,
  //         data: {
  //           ...node.data,
  //           label: (
  //             <div className="nodeMobility">
  //               this is an a a tion message
  //               {/* {eventsRes[0]?.event.eventMessage.actionMessage} */}
  //             </div>
  //           ),
  //         },

  //         className: "activeMobility",
  //       };
  //     }
  //     if (
  //       node.id === ids.sheruBap &&
  //       events?.eventSource?.id === ids.sheruBap &&
  //       events?.eventDestination?.id === ids.sheruBap
  //     ) {
  //       return {
  //         ...node,
  //         data: {
  //           ...node.data,
  //           label: (
  //             <div className="nodeMobility">
  //               {eventsRes[0]?.event.eventMessage.actionMessage}
  //             </div>
  //           ),
  //         },

  //         className: "activeWhatsappMobility",
  //       };
  //     }
  //     if (
  //       node.id === ids.turnoBpp &&
  //       events?.eventSource?.id === ids.turnoBpp &&
  //       events?.eventDestination?.id === ids.turnoBpp
  //     ) {
  //       return {
  //         ...node,
  //         data: {
  //           ...node.data,
  //           label: (
  //             <div className="nodeMobility">
  //               {eventsRes[0]?.event.eventMessage.actionMessage}
  //             </div>
  //           ),
  //         },

  //         className: "activeLuxeCabs",
  //       };
  //     }
  //     if (
  //       node.id === ids.pulseEnergyBpp &&
  //       events?.eventSource?.id === ids.pulseEnergyBpp &&
  //       events?.eventDestination?.id === ids.pulseEnergyBpp
  //     ) {
  //       return {
  //         ...node,
  //         data: {
  //           ...node.data,
  //           label: (
  //             <div className="nodeMobility">
  //               {eventsRes[0]?.event.eventMessage.actionMessage}
  //             </div>
  //           ),
  //         },

  //         className: "activeTaxi",
  //       };
  //     }

  //     if (
  //       (node.id === ids.pulseEnergyWhatsapp &&
  //         events?.eventSource?.id === ids.pulseEnergyWhatsapp) ||
  //       (node.id === ids.pulseEnergyWhatsapp &&
  //         events1?.eventSource?.id === ids.pulseEnergyWhatsapp)
  //     ) {
  //       return {
  //         ...node,

  //         className: "activeMobility",
  //       };
  //     }
  //     if (
  //       (node.id === ids.gateway && events?.eventSource?.id === ids.gateway) ||
  //       (node.id === ids.gateway && events1?.eventSource?.id === ids.gateway) ||
  //       (node.id === ids.gateway &&
  //         events?.eventDestination?.id === ids.gateway) ||
  //       (node.id === ids.gateway &&
  //         events1?.eventDestination?.id === ids.gateway)
  //     ) {
  //       return {
  //         ...node,
  //         className: "activeGateway",
  //       };
  //     }
  //     if (
  //       (node.id === ids.pulseEnergyBpp &&
  //         events?.eventSource?.id === ids.pulseEnergyBpp) ||
  //       (node.id === ids.pulseEnergyBpp &&
  //         events1?.eventSource?.id === ids.pulseEnergyBpp)
  //     ) {
  //       return {
  //         ...node,
  //         className: "activeTaxi",
  //       };
  //     }

  //     if (
  //       (node.id === ids.turnoBpp &&
  //         events?.eventSource?.id === ids.turnoBpp) ||
  //       (node.id === ids.turnoBpp && events1?.eventSource?.id === ids.turnoBpp)
  //     ) {
  //       return {
  //         ...node,
  //         className: "activeLuxeCabs",
  //       };
  //     }
  //     if (
  //       (node.id === ids.sheruBap &&
  //         events?.eventSource?.id === ids.sheruBap) ||
  //       (node.id === ids.sheruBap && events1?.eventSource?.id === ids.sheruBap)
  //     ) {
  //       return {
  //         ...node,
  //         className: "activeWhatsappMobility",
  //       };
  //     }
  //     if (
  //       (node.id === ids.pulseEnergyWhatsapp &&
  //         events?.eventDestination?.id === ids.pulseEnergyWhatsapp) ||
  //       (node.id === ids.pulseEnergyWhatsapp &&
  //         events1?.eventDestination?.id === ids.pulseEnergyWhatsapp)
  //     ) {
  //       return {
  //         ...node,
  //         className: "destMobility",
  //       };
  //     }
  //     if (
  //       (node.id === ids.pulseEnergyBpp &&
  //         events?.eventDestination?.id === ids.pulseEnergyBpp) ||
  //       (node.id === ids.pulseEnergyBpp &&
  //         events1?.eventDestination?.id === ids.pulseEnergyBpp)
  //     ) {
  //       return {
  //         ...node,
  //         className: "destTaxi",
  //       };
  //     }
  //     if (
  //       (node.id === ids.turnoBpp &&
  //         events?.eventDestination?.id === ids.turnoBpp) ||
  //       (node.id === ids.turnoBpp &&
  //         events1?.eventDestination?.id === ids.turnoBpp)
  //     ) {
  //       return {
  //         ...node,
  //         className: "destLuxeCabs",
  //       };
  //     }
  //     if (
  //       (node.id === ids.sheruBap &&
  //         events?.eventDestination?.id === ids.sheruBap) ||
  //       (node.id === ids.sheruBap &&
  //         events1?.eventDestination?.id === ids.sheruBap)
  //     ) {
  //       return {
  //         ...node,
  //         className: "destWhatsappMobility",
  //       };
  //     }

  //     return node;
  //   })
  //   .filter(Boolean);

  return (
    <div className="floatingedges main-container page-content">
      <ReactFlow
        // nodes={updateNodes}
        nodes={initialNodes}
        edges={initialEdge}
        onNodesChange={onNodesChange}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        fitView
        edgeTypes={edgeTypes}
      ></ReactFlow>

      <div className="flowFooter">Serch brodcasted</div>

      {/* <div className="mobilityFooter">
        <div
          className={`GWP ${
            experienceCenterId === "1" ? "girl-active" : "girl"
          }`}
        >
          <div className="GWP-text">
            {eventsRes.length > 0
              ? eventsRes[0].event.eventMessage.bapMessage
              : "rider"}
          </div>

          <img src="/assets/girlWithPhone.svg" alt="" />
        </div>
        <div
          className={`MWP ${
            experienceCenterId === "2" || experienceCenterId === "3"
              ? "man-active"
              : "man"
          }`}
        >
          <div className="MWP-text">
            {eventsRes.length > 0
              ? eventsRes[0].event.eventMessage.bppMessage
              : "driver"}
          </div>
          <Link to="/WhatWouldYouDoLikeToNext">
            <img src="/assets/manWithHat.svg" alt="" />
          </Link>
        </div>
        <img
          className={`circle ${
            experienceCenterId === "2" || experienceCenterId === "3"
              ? "circle-driver-active"
              : "circle-driver"
          }`}
          src="/assets/circle.svg"
          alt=""
        />
        <div
          className={`arrow ${
            experienceCenterId === "2" || experienceCenterId === "3"
              ? "arrow-driver-active"
              : "arrow-driver"
          }`}
        >
          <span
            className={`arrowSpan ${
              experienceCenterId === "2" || experienceCenterId === "3"
                ? "arrowL"
                : "arrowR"
            }`}
          >
            <img src="/assets/arrowLeft.svg" alt="" />
          </span>
          <span
            className={`arrowSpan ${
              experienceCenterId === "2" || experienceCenterId === "3"
                ? "arrow-indicator-right"
                : "arrow-indicator-left"
            }`}
          >
            this is you
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default NodeAsHandleFlow;
