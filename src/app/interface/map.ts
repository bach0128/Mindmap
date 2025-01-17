import { Node, Edge } from "@xyflow/react";

export interface MapDto {
  nodes: Node[];
  edges: Edge[];
  name: string;
  created_at?: string;
  updated_at?: string;
  id: string;
}

export interface NodeData {
  id: string;
  type: string;
  data: {
    label: string;
  };
  measured: MeasuredType;
  position: PositionType;
  width: number;
  height: number;
  selected: boolean;
  positionAbsolute?: PositionType;
  dragging: boolean;
}

export interface EdgeData {
  id: string;
  source: string;
  target: string;
}

type PositionType = {
  x: number;
  y: number;
};

type MeasuredType = {
  width: number;
  height: number;
};
