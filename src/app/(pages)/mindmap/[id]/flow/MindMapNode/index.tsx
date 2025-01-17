import { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";

function MindMapNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <div className="inputWrapper">
        <div className="dragHandle"></div>
        <input value={data.label} onChange={onChange} className="input" />
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

export default MindMapNode;