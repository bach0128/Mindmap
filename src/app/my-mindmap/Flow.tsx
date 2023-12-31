"use client"
import {useCallback, useRef} from "react"
import ReactFlow, {
    Controls,
    OnConnectEnd,
    OnConnectStart,
    Panel,
    useStoreApi,
    Node,
    useReactFlow,
    NodeOrigin,
    ConnectionLineType,
    MiniMap,
    Background,
    getIncomers,
    getOutgoers,
    getConnectedEdges,
    useNodesState,
  useEdgesState,
  } from 'reactflow';
  import { shallow } from 'zustand/shallow';
  import useStore, { RFState } from './store';
  import MindMapNode from './MindMapNode';
  import MindMapEdge from './MindMapEdge';
  import './index.css';

const selector = (state: RFState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    addChildNode: state.addChildNode,
  });
  const nodeColor = () => {
      return 'rgb(255, 204, 0)';
  };
  const nodeOrigin: NodeOrigin = [0.5, 0.5];
  const connectionLineStyle = { stroke: '#555cf6', strokeWidth: 3 };
  const defaultEdgeOptions = { style: connectionLineStyle, type: 'mindmap' };
  const nodeTypes = {
    mindmap: MindMapNode
  }
  const edgeTypes = {
    mindmap: MindMapEdge
  }

export default function Flow({handleSetNodes, nodesData}) {
    let { nodes, edges, onNodesChange, onEdgesChange, addChildNode } = useStore(
        selector,
        shallow,
      );
    const [nodess, setNodes] = useNodesState(nodes);
    const [edgess, setEdges] = useEdgesState(edges);
    if (nodesData) {
        nodes = nodesData
    }
      const connectingNodeId = useRef<string | null>(null);
      const store = useStoreApi();
      const { screenToFlowPosition } = useReactFlow();
      const getChildNodePosition = (
        event: MouseEvent | TouchEvent,
        parentNode?: Node,
      ) => {
        const { domNode } = store.getState()
        if (
          !domNode ||
          !parentNode?.positionAbsolute ||
          !parentNode?.width ||
          !parentNode?.height
        ) {
          return;
        }
        const isTouchEvent = 'touches' in event;
        const x = isTouchEvent ? event.touches[0].clientX : event.clientX;
        const y = isTouchEvent ? event.touches[0].clientY : event.clientY;
        const panePosition = screenToFlowPosition({
          x,
          y,
        });
        return {
          x: panePosition.x - parentNode.positionAbsolute.x + parentNode.width / 2,
          y: panePosition.y - parentNode.positionAbsolute.y + parentNode.height / 2,
        };
      };
      const onConnectStart: OnConnectStart = useCallback((_, { nodeId }) => {
        connectingNodeId.current = nodeId;
      }, []);
      const onConnectEnd: OnConnectEnd = useCallback(
        (event) => {
          const { nodeInternals } = store.getState();
          const targetIsPane = (event.target as Element).classList.contains(
            'react-flow__pane',
          );
          const node = (event.target as Element).closest('.react-flow__node');
          if (node) {
            node.querySelector('input')?.focus({ preventScroll: true });
          } else if (targetIsPane && connectingNodeId.current) {
            const parentNode = nodeInternals.get(connectingNodeId.current);
            const childNodePosition = getChildNodePosition(event, parentNode);
            if (parentNode && childNodePosition) {
              addChildNode(parentNode, childNodePosition);
            }
          }
        },
        [getChildNodePosition],
      );  
      const onNodesDelete = useCallback(
        (deleted) => { 
          setEdges(
            deleted.reduce((acc, node) => {
                const incomers = getIncomers(node, nodes, edges);
                const outgoers = getOutgoers(node, nodes, edges);
                const connectedEdges = getConnectedEdges([node], edges);
                const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge));
                const createdEdges = incomers.flatMap(({ id: source }) =>
                  outgoers.map(({ id: target }) => ({ id: `${source}->${target}`, source, target }))
                );
                return [...remainingEdges, ...createdEdges];
            }, edges)
          );
        },
        [nodes , edges]
      );
    // handleSetNodes(nodes)

  return (
      <div style={{height: "600px", width: "auto", paddingTop: "40px"}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodesDelete={onNodesDelete}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        connectionLineStyle={connectionLineStyle}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.Straight}
        nodeOrigin={nodeOrigin}
        fitView
      >
        <Controls showInteractive={false} />
        <Panel position="top-left" className="header">
          React Flow Mind Map
        </Panel>
        <MiniMap nodeColor={nodeColor}/>
        <Background />
      </ReactFlow>
      </div>
  )
}
