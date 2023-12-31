import React, { memo } from "react";
import { Handle, useReactFlow, useStoreApi, Position } from "reactflow";
import "./overview.css";
const options = [
    {
        value: "default",
        label: "Bezier (default)",
    },
];
function Select({ value, handleId, nodeId }) {
    const { setNodes } = useReactFlow();
    const store = useStoreApi();
    const onChange = (evt) => {
        const { nodeInternals } = store.getState();
        setNodes(Array.from(nodeInternals.values()).map((node) => {
            if (node.id === nodeId) {
                node.data = {
                    ...node.data,
                    selects: {
                        ...node.data.selects,
                        [handleId]: evt.target.value,
                    },
                };
            }
            return node;
        }));
    };
    return (<div className="custom-node__select">
      <select className="nodrag" onChange={onChange} value={value}>
        {options.map((option) => (<option key={option.value} value={option.value}>
            {option.label}
          </option>))}
      </select>
      <Handle type="source" position={Position.Right} id={handleId}/>
    </div>);
}
function CustomNode({ id, data }) {
    return (<>
      <div className="custom-node__body">
        {Object.keys(data.selects).map((handleId) => (<Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId}/>))}
      </div>
    </>);
}
export default memo(CustomNode);
