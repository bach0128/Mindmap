"use client"
import React, { useCallback, useRef, useMemo, useState, useEffect } from 'react';
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
  Background
} from 'reactflow';
import { shallow } from 'zustand/shallow';
import useStore, { RFState } from './store';
import MindMapNode from './MindMapNode';
import MindMapEdge from './MindMapEdge';
import './index.css';
import 'reactflow/dist/style.css';

import { useSelector, useDispatch } from 'react-redux';
import { mindmapSlice } from '../../redux/slice/mindmapSlice';

import {postMap} from "../data/fetchData"

const {add} = mindmapSlice.actions;

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
const connectionLineStyle = { stroke: '#F6AD55', strokeWidth: 3 };
const defaultEdgeOptions = { style: connectionLineStyle, type: 'mindmap' };

function MindMap() {
  const [checkMap, setCheckMap] = useState(false)
  const listMap = useSelector((state) => state.mindmap.listMap)
  console.log(listMap);
  
  const [mapName, setMapName] = useState("Mind Map chưa có tên")  
  const dispatch = useDispatch()
  const nodeTypes = useMemo(
    () => ({
      mindmap: MindMapNode,
    }),
    [],
  );
  const edgeTypes = useMemo(
    () => ({
      mindmap: MindMapEdge,
    }),
    [],
  );
  let { nodes, edges, onNodesChange, onEdgesChange, addChildNode } = useStore(
    selector,
    shallow,
  );
  const connectingNodeId = useRef<string | null>(null);
  const store = useStoreApi();
  
  const { screenToFlowPosition } = useReactFlow();

  const getChildNodePosition = (
    event: MouseEvent | TouchEvent,
    parentNode?: Node,
  ) => {
    const { domNode } = store.getState();

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
      console.log("allNode",nodeInternals);
      
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

  const handleAddMap = () => {
    dispatch(add({
      name: mapName,
      list: nodes
    }))
    postMap({
      name: mapName,
      list: nodes
    })
    setCheckMap(false)
  }

  return (
    <>
    { 
    !checkMap && <div className='list-map px-28 my-12'>
    <h2 className='text-3xl my-4 '>Mind Map của tôi</h2>
    <button className='bg-blue-600 rounded w-28 h-12 text-white text-md'
      onClick={() => setCheckMap(true)}
    >Thêm mới</button>
    </div>
    }
    {!checkMap && listMap.forEach(({name, list}) => (<div className='w-full h-20'>
          <p> {name} </p>
          <button onClick={ () => {
            nodes = list
          }}>Sửa</button>
          <button>Xóa</button>
        </div>)
    )}
    {
      checkMap && <div className='py-5 mx-auto map'>
      <div className='mindMap_btn w-full flex justify-between px-20'>
        <input type="text" placeholder='Mind map name' onChange={(e) => setMapName(e.target.value)} 
          className='border-none outline-none p-2 bg-white'
        />
        <div className='flex'>
        <button className='flex bg-green-500 items-center justify-center px-4 py-2 mr-3 text-white border rounded hover:bg-green-700'
        onClick={() => handleAddMap()}
        >
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" fill='white' style={{marginRight: "6px"}} viewBox="0 0 448 512"> <path d="M48 96V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H309.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16zm80-16v80H272V80H128zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/></svg>
          Lưu thay đổi
        </button>
        <button className='flex bg-blue-500 items-center justify-center px-4 text-white border rounded hover:bg-blue-700'>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill='white' style={{marginRight: "6px"}} viewBox="0 0 512 512"><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
        Chia sẻ
        </button>
        </div>
      </div>
      <div style={{height: "600px", width: "auto", paddingTop: "40px"}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
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
      </div>
    }
    
    </>
  );
}

export default MindMap
