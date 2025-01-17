"use client";
import React, { useCallback, useEffect, useRef } from "react";
import {
  ReactFlow,
  Controls,
  Panel,
  useReactFlow,
  ReactFlowProvider,
  ConnectionLineType,
  type NodeOrigin,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
} from "@xyflow/react";
import MindMapNode from "./MindMapNode";
import MindMapEdge from "./MindMapEdge";
import "@xyflow/react/dist/style.css";
import "./flow.css";
import { v1 as uuidv1 } from "uuid";
import { MapDto } from "@/app/interface/map";

const nodeOrigin: NodeOrigin = [0.5, 0.5];
const connectionLineStyle = { stroke: "#F6AD55", strokeWidth: 3 };
const defaultEdgeOptions = { style: connectionLineStyle, type: "mindmap" };

const initialNodes: Node[] = [
  {
    id: "root",
    type: "mindmap",
    data: { label: "Root" },
    position: { x: 0, y: 0 },
  },
];

const nodeTypes = {
  mindmap: MindMapNode,
};

const edgeTypes = {
  mindmap: MindMapEdge,
};

const initialEdges: Edge[] = [];

export function Flow({
  saveNodes,
  saveEdges,
  initialData,
}: {
  saveNodes: any;
  saveEdges: any;
  initialData: MapDto;
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState(
    initialData?.nodes ?? initialNodes
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    initialData?.edges ?? initialEdges
  );
  const { screenToFlowPosition } = useReactFlow();
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  useEffect(() => {
    saveNodes(nodes);
    saveEdges(edges);
  }, [nodes, edges]);

  useEffect(() => {
    if (initialData) {
      setNodes(initialData.nodes);
      setEdges(initialData.edges);
    }
  }, [initialData]);

  const onConnectEnd = useCallback(
    (event, connectionState) => {
      // when a connection is dropped on the pane it's not valid
      if (!connectionState.isValid) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = uuidv1();
        const { clientX, clientY } =
          "changedTouches" in event ? event.changedTouches[0] : event;
        const newNode = {
          id,
          type: "mindmap",
          position: screenToFlowPosition({
            x: clientX,
            y: clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectionState.fromNode.id, target: id })
        );
      }
    },
    [screenToFlowPosition]
  );

  console.log(nodes);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onConnect={onConnect}
      onConnectEnd={onConnectEnd}
      nodeOrigin={nodeOrigin}
      connectionLineStyle={connectionLineStyle}
      defaultEdgeOptions={defaultEdgeOptions}
      connectionLineType={ConnectionLineType.Straight}
      fitView
    >
      <Controls showInteractive={false} />
      <Panel position="top-left">React Flow Mind Map</Panel>
      <Background color="#ccc" variant={BackgroundVariant.Dots} />
    </ReactFlow>
  );
}

export default function FlowWithProvider({
  saveNodes,
  saveEdges,
  initialData,
}: {
  saveNodes: any;
  saveEdges: any;
  initialData?: MapDto;
}) {
  return (
    <ReactFlowProvider>
      <Flow
        saveNodes={saveNodes}
        saveEdges={saveEdges}
        initialData={initialData}
      />
    </ReactFlowProvider>
  );
}
