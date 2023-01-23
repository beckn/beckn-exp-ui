import React, { useContext, useEffect, useState } from "react";
import ReactFlow, { useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import FloatingEdge from "./FloatingEdge";
import { createNodesAndEdges, ids } from "./nodeUtils";
import "./index.css";
import EventApiContext from "../../context/EventApiContext";
import useInterval from "../MobilityCard/useInterval";

const edgeTypes: any = {
  floating: FloatingEdge,
};

const NodeAsHandleFlow: React.FC = () => {
  const [events, setEvents] = useState<any>([]);
  const [events1, setEvents1] = useState<any>([]);
  const { nodes: initialNodes, edges: initialEdge } = createNodesAndEdges(
    events,
    events1
  );
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const { getEvent } = useContext(EventApiContext);

  const fetchEvent = async () => {
    try {
      const res = await getEvent();
      setEvents(res?.events[0].event);
      const firstResponseOfAPI = res?.events[1].event.eventMessage.eventCode;
      const secondResponseOfAPI = res?.events[0].event.eventMessage.eventCode;

      if (
        (firstResponseOfAPI === ids.searchBroadCast &&
          secondResponseOfAPI === ids.searchBroadCast) ||
        (firstResponseOfAPI === ids.mbthSentCatalogue &&
          secondResponseOfAPI === ids.mblcSentCatalogue) ||
        (firstResponseOfAPI === ids.mblcSentCatalogue &&
          secondResponseOfAPI === ids.mbthSentCatalogue) ||
        (firstResponseOfAPI === ids.mbgwSentCatalogueBap &&
          secondResponseOfAPI === ids.mbgwSentCatalogueBap) ||
        (firstResponseOfAPI === ids.mbgwSentCatalogueBap &&
          secondResponseOfAPI === ids.mbgwSentCatalogueBap)
      ) {
        setEvents1(res?.events[1].event);
      } else {
        setEvents1([]);
      }
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  useInterval(() => {
    fetchEvent();
  }, 1000);

  return (
    <div className="floatingedges">
      <ReactFlow
        nodes={nodes}
        edges={initialEdge}
        onNodesChange={onNodesChange}
        fitView
        edgeTypes={edgeTypes}
      ></ReactFlow>
    </div>
  );
};

export default NodeAsHandleFlow;
