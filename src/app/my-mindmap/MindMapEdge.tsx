import React from 'react';
import { BaseEdge, EdgeProps, getBezierPath } from 'reactflow';

function MindMapEdge(props: EdgeProps) {
  const { sourceX, sourceY, targetX, targetY } = props;

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return <BaseEdge path={edgePath} {...props} labelBgStyle={{ fill: 'red' }}/>;
}

export default MindMapEdge;