export interface MapDto {
  nodes: NodeData[];
  edges: EdgeData[];
  name: string;
  created_at: string;
  target: string;
  _id: string;
}

export interface NodeData {
  id: string;
  type: string;
  data: {
    label: string;
  };
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
