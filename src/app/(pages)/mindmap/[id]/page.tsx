"use client";
import Loading from "@/app/components/loading";
import { MapDto } from "@/app/interface/map";
import { getMapDetail } from "@/app/server/fetchData";
import notify from "@/utils/toastify/notify";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FlowWithProvider from "./flow";
import { Node, Edge } from "@xyflow/react";

function page() {
  const router = useRouter();
  const { id } = useParams();
  const mapId = Array.isArray(id) ? id[0] : id;
  const [loading, setLoading] = useState<boolean>(false);
  const [mapDetail, setMapDetail] = useState<MapDto>(undefined);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const dataMap = await getMapDetail(mapId ?? "");
        setMapDetail(dataMap.data);
      } catch (error) {
        notify("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [mapId]);

  return (
    <>
      {loading && <Loading />}
      <div className="px-10 py-3">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <label htmlFor="name">Map title</label>
            <input
              id="name"
              type="text"
              defaultValue={mapDetail?.name}
              className="border p-2 max-w-[400px] rounded border-gray-400 mt-2"
            />
          </div>
          <div>
            <button className="bg-green-400 border py-2 px-4 rounded-xl text-gray-800 hover:bg-green-500">
              Update
            </button>
            <button
              className="bg-blue-400 border py-2 px-4 rounded-xl text-gray-800 hover:bg-blue-500"
              onClick={() => router.back()}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="h-[800px]">
          <FlowWithProvider
            saveNodes={setNodes}
            saveEdges={setEdges}
            initialData={mapDetail}
          />
        </div>
      </div>
      ;
    </>
  );
}

export default page;