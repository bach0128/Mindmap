import { Handle, NodeProps, Position } from 'reactflow';
 import {useLayoutEffect, useRef, useEffect} from 'react'
import useStore from '../flow/store';
 
export type NodeData = {
  label: string;
};


 
function MindMapNode({ id, data }: NodeProps<NodeData>) {
  const inputRef = useRef<HTMLInputElement>();
  const updateNodeLabel = useStore((state) => state.updateNodeLabel);

  useLayoutEffect(() => {
  if (inputRef.current) {
    inputRef.current.style.width = `${data.label.length * 10.5}px`;
  }
}, [data.label.length]);

useEffect(() => {
  setTimeout(() => {
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, 1);
}, []);
 
  return (
    <>
      <div className="inputWrapper">
        <div className="dragHandle">
          
        </div>
        <input
          value={data.label}
          onChange={(evt) => updateNodeLabel(id, evt.target.value)}
          onFocus={(evt) => updateNodeLabel(id, evt.target.value)}
          className="input"
          ref={inputRef}
        />
      </div>
 
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}
 
export default MindMapNode;