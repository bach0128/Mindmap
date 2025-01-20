import { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";

function MindMapNode({ id, data, onNodeLabelChange }) {
  const onChange = useCallback(
    (evt) => {
      const newLabel = evt.target.value;
      onNodeLabelChange(id, newLabel);
    },
    [data.id, onNodeLabelChange]
  );

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
