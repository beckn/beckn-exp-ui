import React, { useCallback, useContext, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import NodeTypeComp from "./NodeType";
import FloatingEdge from "./FloatingEdge";
import FloatingConnectionLine from "./FloatingConnectionLine";
import { createNodesAndEdges } from "./utils";
import "./index.css";
// import { useNavigate } from "react-router-dom";
import EventApiContext from "../../context/EventApiContext";
import useInterval from "../MobilityCard/useInterval";


const edgeTypes: any = {
  floating: FloatingEdge,
};

const connectionLineComponent: any = {
  connectionLine: FloatingConnectionLine,
};

const nodeTypes: any = {
  circleNode: NodeTypeComp,
};

const NodeAsHandleFlow: React.FC = () => {
  const [events, setEvents] = useState<any>([]);
  const [events1, setEvents1] = useState<any>([]);

  const { nodes: initialNodes, edges: initialEdge } = createNodesAndEdges(events, events1);

  const [nodes, setNodes , onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const { getEvent } = useContext(EventApiContext);
  const fetchEvent = async () => {
    try {
      const res = await getEvent();
      console.log("VVVV---->", res)
      setEvents(res?.events[0].event);
      if (
        (res?.events[1].event.eventMessage.eventCode === "mbgw_srch_brdcst" &&
          res?.events[0].event.eventMessage.eventCode === "mbgw_srch_brdcst") ||
        (res?.events[1].event.eventMessage.eventCode === "mbth_snt_catalogue" &&
          res?.events[0].event.eventMessage.eventCode ===
            "mblc_snt_catalogue") ||
        (res?.events[1].event.eventMessage.eventCode === "mblc_snt_catalogue" &&
          res?.events[0].event.eventMessage.eventCode ===
            "mbth_snt_catalogue") ||
        (res?.events[1].event.eventMessage.eventCode === "mbgw_sent_ctlg_bap" &&
          res?.events[0].event.eventMessage.eventCode ===
            "mbgw_sent_ctlg_bap") ||
        (res?.events[1].event.eventMessage.eventCode === "mbgw_sent_ctlg_bap" &&
          res?.events[0].event.eventMessage.eventCode === "mbgw_sent_ctlg_bap")
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
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        // connectionLineComponent={connectionLineComponent}
      ></ReactFlow>
    </div>
  );
};

export default NodeAsHandleFlow;
