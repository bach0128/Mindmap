"use client";
import FlowWithProvider, { Flow } from "../[id]/flow/index";
import { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import { postMap } from "../../../server/fetchData";
import notify from "../../../../utils/toastify/notify";
import { useParams, useRouter } from "next/navigation";
import { MapDto } from "@/app/interface/map";
import { Node, Edge } from "@xyflow/react";
import Loading from "@/app/components/loading";

function page() {
  const { id } = useParams();
  const router = useRouter();
  const [name, setName] = useState<string>("Mindmap no name");
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const addNew = async () => {
    const id = uuidv1();
    const createNewMap: MapDto = {
      id: id,
      nodes: nodes,
      edges: edges,
      name: name,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    try {
      setLoading(true);
      await postMap(createNewMap);
      notify("success", "Tạo mới thành công!");
      router.push("/mindmap");
    } catch (error) {
      notify("error", "Đã có lỗi xảy ra, vui lòng thử lại!");
      router.push("/mindmap");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="p-2 mt-4">
        <div className="flex justify-between mx-10 min-h-[600]">
          <input
            placeholder="Mindmap name"
            type="text"
            className="bg-gray-200 p-2"
            autoFocus
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          {!Number(+id) ? (
            <button
              type="button"
              className="bg-green-400 border py-2 px-4 rounded-xl text-gray-800 hover:bg-green-500"
              onClick={addNew}
            >
              Save
            </button>
          ) : (
            <a
              className="bg-green-400 border py-2 px-4 rounded-xl text-gray-800 hover:bg-green-500"
              href="/mindmap"
            >
              Back
            </a>
          )}
        </div>
      </div>
      <div className="h-[800px]">
        <FlowWithProvider saveNodes={setNodes} saveEdges={setEdges} />
      </div>
    </>
  );
}

export default page;
