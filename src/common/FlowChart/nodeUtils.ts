import { Position, MarkerType } from "reactflow";
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
  const edges = [];
  const nodes = [];
  nodes.push(
    {
      id: ids.mobility,
      data: {
        label: "",
      },

      className: "pulse_energy_whatsapp",
      position: { x: 200, y: 90 },
    },
    {
      id: ids.gateway,
      data: { label: "Gateway" },
      className: "gateway",
      position: { x: 360, y: 170 },
    },

    {
      id: ids.whatsappMobility,
      data: { label: "" },
      className: "sheru_bap",
      position: { x: 200, y: 200 },
    },
    {
      id: ids.taxi,
      className: "pulse_energy_bpp",
      data: { label: "" },
      position: { x: 500, y: 60 },
    },
    {
      id: "separid",
      className: "kazam",
      data: { label: "" },
      position: { x: 500, y: 150 },
    },
    {
      id: ids.luxeCabs,
      className: "turno_bpp",
      data: { label: "" },
      position: { x: 500, y: 240 },
    }
  );

  edges.push(
    {
      id: data.eventId,
      source: data?.eventSource?.id,
      target: data?.eventDestination?.id,
      data: {
        text: data?.eventMessage?.actionMessage,
      },
      type: "floating",
      markerEnd: {
        type: MarkerType.Arrow,
        width: 16,
        height: 16,
        color:
          data?.eventSource?.id === ids.taxi ||
          data?.eventSource?.id === ids.luxeCabs ||
          (data?.eventSource?.id === ids.gateway &&
            data?.eventDestination?.id === ids.mobility) ||
          (data?.eventSource?.id === ids.gateway &&
            data?.eventDestination?.id === ids.whatsappMobility)
            ? "#FB1E1E"
            : "#23DFDF",
      },
      style: {
        transform:
          data?.eventSource?.id === ids.gateway &&
          data?.eventDestination?.id === ids.mobility
            ? "translate(20px, -7px)"
            : data?.eventSource?.id === ids.gateway &&
              data?.eventDestination?.id === ids.whatsappMobility
            ? "translate(41px, 19px)"
            : data?.eventSource?.id === ids.luxeCabs &&
              data?.eventDestination?.id === ids.mobility
            ? "translate(26px, -39px)"
            : data?.eventSource?.id === ids.whatsappMobility &&
              data?.eventDestination?.id === ids.taxi
            ? "translate(-29px, -4px)"
            : data?.eventSource?.id === ids.taxi &&
              data?.eventDestination?.id === ids.whatsappMobility
            ? "translate(-45px, 4px)"
            : " ",
        strokeWidth: 3,
        stroke:
          data?.eventSource?.id === ids.taxi ||
          data?.eventSource?.id === ids.luxeCabs ||
          (data?.eventSource?.id === ids.gateway &&
            data?.eventDestination?.id === ids.mobility) ||
          (data?.eventSource?.id === ids.gateway &&
            data?.eventDestination?.id === ids.whatsappMobility)
            ? "#FB1E1E"
            : "#23DFDF",
      },
    },
    {
      id: data1.eventId,
      source: data1?.eventSource?.id,
      target: data1?.eventDestination?.id,
      data: {
        eventCode: data1?.eventMessage?.eventCode,
        text: data1?.eventMessage?.actionMessage,
      },
      type: "floating",
      markerEnd: {
        type: MarkerType.Arrow,
        width: 16,
        height: 16,
        color:
          data1?.eventSource?.id === ids.taxi ||
          data1?.eventSource?.id === ids.luxeCabs ||
          (data1?.eventSource?.id === ids.gateway &&
            data1?.eventDestination?.id === ids.mobility) ||
          (data1?.eventSource?.id === ids.gateway &&
            data1?.eventDestination?.id === ids.whatsappMobility)
            ? "#FB1E1E"
            : "#23DFDF",
      },
      style: {
        transform:
          data1?.eventSource?.id === ids.gateway &&
          data1?.eventDestination?.id === ids.mobility
            ? "translate(4px, 16px)"
            : data1?.eventSource?.id === ids.gateway &&
              data1?.eventDestination?.id === ids.whatsappMobility
            ? "translate(20px, -4px)"
            : " ",
        strokeWidth: 3,
        stroke:
          data1?.eventSource?.id === ids.taxi ||
          data1?.eventSource?.id === ids.luxeCabs ||
          (data1?.eventSource?.id === ids.gateway &&
            data1?.eventDestination?.id === ids.mobility) ||
          (data1?.eventSource?.id === ids.gateway &&
            data1?.eventDestination?.id === ids.whatsappMobility)
            ? "#FB1E1E"
            : "#23DFDF",
      },
    }
  );
  return { nodes, edges };
};
