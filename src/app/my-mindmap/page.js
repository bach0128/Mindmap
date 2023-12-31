"use client";
import { ReactFlowProvider } from "reactflow";

import Mindmap from "./Mindmap";

export default function page() {
  return (
    <ReactFlowProvider>
      <Mindmap />
    </ReactFlowProvider>
  );
}
