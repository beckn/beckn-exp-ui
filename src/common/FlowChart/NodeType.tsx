import { Handle, Position } from "react-flow-renderer";
const NodeTypeComp: React.FC=()=> {
  return (
    <article
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "10em",
        backgroundColor: "#055C9D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p className="RRRR" style={{ color: "white" }}>Generator</p>
      <Handle type="target" position={Position.Top} id="target-node" />
      <Handle type="source" position={Position.Bottom} id="source-node" />
    </article>
  );
}

export default NodeTypeComp;