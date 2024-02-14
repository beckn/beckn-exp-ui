import { Position, MarkerType, Edge } from "reactflow";
import "./index.css";
import { ids } from "../../utility/utils";
const getNodeIntersection = (intersectionNode: any, targetNode: any) => {
  const {
    width: intersectionNodeWidth,
    height: intersectionNodeHeight,
    positionAbsolute: intersectionNodePosition,
  } = intersectionNode;
  const targetPosition = targetNode.positionAbsolute;

  const w = intersectionNodeWidth / 2;
  const h = intersectionNodeHeight / 2;

  const x2 = intersectionNodePosition.x + w;
  const y2 = intersectionNodePosition.y + h;
  const x1 = targetPosition.x + w;
  const y1 = targetPosition.y + h;

  const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h);
  const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h);
  const a = 1 / (Math.abs(xx1) + Math.abs(yy1));
  const xx3 = a * xx1;
  const yy3 = a * yy1;
  const x = w * (xx3 + yy3) + x2;
  const y = h * (-xx3 + yy3) + y2;

  return { x, y };
};

const getEdgePosition = (node: any, intersectionPoint: any) => {
  const n = { ...node.positionAbsolute, ...node };
  const nx = Math.round(n.x);
  const ny = Math.round(n.y);
  const px = Math.round(intersectionPoint.x);
  const py = Math.round(intersectionPoint.y);

  if (px <= nx + 1) {
    return Position.Left;
  }
  if (px >= nx + n.width - 1) {
    return Position.Right;
  }
  if (py <= ny + 1) {
    return Position.Top;
  }
  if (py >= n.y + n.height - 1) {
    return Position.Bottom;
  }
  return Position.Top;
};

export const getEdgeParams = (source: any, target: any) => {
  const sourceIntersectionPoint = getNodeIntersection(source, target);
  const targetIntersectionPoint = getNodeIntersection(target, source);

  const sourcePos = getEdgePosition(source, sourceIntersectionPoint);
  const targetPos = getEdgePosition(target, targetIntersectionPoint);

  return {
    sx: sourceIntersectionPoint.x,
    sy: sourceIntersectionPoint.y,
    tx: targetIntersectionPoint.x,
    ty: targetIntersectionPoint.y,
    sourcePos,
    targetPos,
  };
};

export const createNodesAndEdges = (data: any, data1: any) => {
  const edges: Edge[] = [];
  const nodes = [];
  // console.log({ data, data1 });
  nodes.push(
    {
      id: ids.pulseEnergyWhatsapp,
      data: {
        label: "",
      },

      className: "pulse_energy_whatsapp",
      position: { x: 200, y: 90 },
      draggable: false,
      focusable: false,
    },
    {
      id: ids.gateway,
      data: { label: "Gateway" },
      className: "gateway",
      position: { x: 360, y: 170 },
      draggable: false,
      focusable: false,
    },

    {
      id: ids.sheruBap,
      data: { label: "" },
      className: "sheru_bap",
      position: { x: 200, y: 200 },
      draggable: false,
      focusable: false,
    },
    {
      id: ids.pulseEnergyBpp,
      className: "pulse_energy_bpp",
      data: { label: "" },
      position: { x: 500, y: 60 },
      draggable: false,
      focusable: false,
    },
    {
      id: ids.kazam,
      className: "kazam",
      data: { label: "" },
      position: { x: 500, y: 150 },
      draggable: false,
      focusable: false,
    },
    {
      id: ids.turnoBpp,
      className: "turno_bpp",
      data: { label: "" },
      position: { x: 500, y: 240 },
      draggable: false,
      focusable: false,
    }
  );

  if (data.length > 0) {
    const dataId = data[data.length - 1].data.id;

    const dataOfEvent = data[data.length - 1].data.events[0].context;

    console.log("dataEvent", dataOfEvent);

    edges.push(
      {
        id: dataId,
        source: dataOfEvent?.source?.id || dataOfEvent?.source?.type,
        target: dataOfEvent?.target?.id || dataOfEvent?.target?.type,
        data: {
          text: "",
        },
        type: "floating",
        markerEnd: {
          type: MarkerType.Arrow,
          width: 16,
          height: 16,
          color: "#4498E8",
        },
        style: {
          // TODO :- To check this tansform after having the correct logic of arrow and transform of below object also

          // transform:
          //   dataOfEvent?.source?.type === ids.gateway &&
          //   dataOfEvent?.target?.id === ids.pulseEnergyWhatsapp
          //     ? "translate(20px, -7px)"
          //     : dataOfEvent?.source?.type === ids.gateway &&
          //       dataOfEvent?.target?.id === ids.pulseEnergyWhatsapp
          //     ? "translate(41px, 19px)"
          //     : dataOfEvent?.source?.id === ids.turnoBpp &&
          //       dataOfEvent?.target?.id === ids.pulseEnergyWhatsapp
          //     ? "translate(26px, -39px)"
          //     : dataOfEvent?.source?.id === ids.sheruBap &&
          //       dataOfEvent?.target?.id === ids.pulseEnergyBpp
          //     ? "translate(-29px, -4px)"
          //     : dataOfEvent?.source?.id === ids.pulseEnergyBpp &&
          //       dataOfEvent?.target?.id === ids.sheruBap
          //     ? "translate(-45px, 4px)"
          //     : " ",
          // transform: "translate(41px, 19px)",
          strokeWidth: 4,
          stroke: "#4498E8",
        },
      }

      // TODO :- check this later

      // {
      //   id: data1.eventId,
      //   source: data1?.eventSource?.id,
      //   target: data1?.eventDestination?.id,
      //   data: {
      //     eventCode: data1?.eventMessage?.eventCode,
      //     text: data1?.eventMessage?.actionMessage,
      //   },
      //   type: "floating",
      //   markerEnd: {
      //     type: MarkerType.Arrow,
      //     width: 16,
      //     height: 16,
      //     color:
      //       data1?.eventSource?.id === ids.pulseEnergyBpp ||
      //       data1?.eventSource?.id === ids.turnoBpp ||
      //       (data1?.eventSource?.id === ids.gateway &&
      //         data1?.eventDestination?.id === ids.pulseEnergyWhatsapp) ||
      //       (data1?.eventSource?.id === ids.gateway &&
      //         data1?.eventDestination?.id === ids.sheruBap)
      //         ? "#FB1E1E"
      //         : "#23DFDF",
      //   },
      //   style: {
      //     // transform:
      //     //   data1?.eventSource?.id === ids.gateway &&
      //     //   data1?.eventDestination?.id === ids.pulseEnergyWhatsapp
      //     //     ? "translate(4px, 16px)"
      //     //     : data1?.eventSource?.id === ids.gateway &&
      //     //       data1?.eventDestination?.id === ids.sheruBap
      //     //     ? "translate(20px, -4px)"
      //     //     : " ",
      //     strokeWidth: 3,
      //     stroke:
      //       data1?.eventSource?.id === ids.pulseEnergyBpp ||
      //       data1?.eventSource?.id === ids.turnoBpp ||
      //       (data1?.eventSource?.id === ids.gateway &&
      //         data1?.eventDestination?.id === ids.pulseEnergyWhatsapp) ||
      //       (data1?.eventSource?.id === ids.gateway &&
      //         data1?.eventDestination?.id === ids.sheruBap)
      //         ? "#FB1E1E"
      //         : "#23DFDF",
      //   },
      // }
    );
  }

  return { nodes, edges };
};
