import {
    Edge,
    EdgeChange,
    Node,
    NodeChange,
    OnNodesChange,
    OnEdgesChange,
    applyNodeChanges,
    applyEdgeChanges,
    XYPosition,
  } from 'reactflow';
  // import { create } from 'zustand';
  import { createWithEqualityFn } from 'zustand/traditional';
  
  import { nanoid } from 'nanoid/non-secure';
  
  export type RFState = {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    addChildNode: (parentNode: Node, position: XYPosition) => void;
    updateNodeLabel: (nodeId: string, label: string) => void;
    setNodes: (payload: Node[] | ((nodes: Node[]) => Node[])) => void;
    setEdges: (payload: Edge[] | ((edges: Edge[]) => Edge[])) => void;
  };
  
  const useStore = createWithEqualityFn<RFState>((set, get) => ({
    nodes: [
      {
        id: 'root',
        type: 'mindmap',
        data: { label: 'My MindMap' },
        position: { x: 0, y: 0 },
      },
    ],
    edges: [
    ],
    setNodes: (dataNodes: Node[] | ((nodes: Node[]) => Node[])) => {
      set({ nodes: [...get().nodes, ...dataNodes] });
    },
    setEdges: (dataEdges: Edge[] | ((edges: Edge[]) => Edge[])) => {
      set({ edges: [...get().edges, ...dataEdges] });
    },
    
    onNodesChange: (changes: NodeChange[]) => {
      set({
        nodes: applyNodeChanges(changes, get().nodes),
      });
    },
    onEdgesChange: (changes: EdgeChange[]) => {
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },
    addChildNode: (parentNode: Node, position: XYPosition) => {
      const newNode = {
        id: nanoid(),
        type: 'mindmap',
        data: { label: `New Node`  },
        position,
        parentNode: parentNode.id,
      };
  
      const newEdge = {
        id: nanoid(),
        source: parentNode.id,
        target: newNode.id,
      };
  
      set({
        nodes: [...get().nodes, newNode],
        edges: [...get().edges, newEdge],
      });
    },
    updateNodeLabel: (nodeId: string, label: string) => {
      set({
        nodes: get().nodes.map((node) => {
          if (node.id === nodeId) {
            node.data = { ...node.data, label };
          }
          return node;
        }),
      });
    },

    
  }));
  
  export default useStore;
  