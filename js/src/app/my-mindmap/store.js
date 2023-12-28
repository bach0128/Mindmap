import { applyNodeChanges, applyEdgeChanges, } from 'reactflow';
import { create } from 'zustand';
const useStore = create((set, get) => ({
    nodes: [
        {
            id: 'root',
            type: 'mindmap',
            data: { label: 'React Flow Mind Map' },
            position: { x: 0, y: 0 },
        },
    ],
    edges: [],
    onNodesChange: (changes) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },
    onEdgesChange: (changes) => {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },
}));
export default useStore;
