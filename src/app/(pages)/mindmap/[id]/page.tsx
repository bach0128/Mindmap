"use client";
import FlowWithProvider from "./flow";
import { useState, useEffect, Fragment } from "react";
import { postMap, deleteMap, getMap } from "../../../data/fetchData";
import "./flow.css";
import { nanoid } from "nanoid";
import notify from "../../../../utils/toastify/notify";
import { useRouter } from "next/navigation";
import { EdgeData, MapDto, NodeData } from "@/app/interface/map";

function page(props: any) {
  const { id } = props.params;
  const router = useRouter();
  const [name, setName] = useState("Mindmap no name");
  const [dataId, setDataId] = useState({});
  let dataNew = {};
  const setDataMap = function (nodes: NodeData, edges: EdgeData) {
    const curDate = new Date();
    var curDay = curDate.getDate();
    var curMonth = curDate.getMonth() + 1;
    var curYear = curDate.getFullYear();
    const created_at = curYear + "/" + curMonth + "/" + curDay;
    dataNew = { nodes, edges, name, created_at };
  };
  const addNew = async () => {
    const _id = nanoid();
    const createNewMap = { ...dataNew, _id: _id } as MapDto;
    const res = await postMap(createNewMap);
    console.log(res);

    if (res.status == 201) {
      notify("success", "Tạo mới thành công!");
      router.push("/mindmap");
    }
  };
  const setMapId = async (id: string) => {
    if (Number(+id)) {
      const data = await getMap(id);
      if (data) {
        setName(data.name);
        setDataId(data);
      } else {
        return false;
      }
    }
  };

  useEffect(() => {
    setMapId(id);
  }, []);

  return (
    <Fragment>
      <div className="p-2 mt-4">
        <div className="flex justify-between mx-10 min-h-[600]">
          <input
            placeholder="Mindmap name"
            type="text"
            className="bg-gray-200 p-2"
            autoFocus
            onChange={(e) => {
              if (e.target.value) {
                setName(e.target.value);
              } else setName("Mindmap no name");
            }}
            value={name}
          />
          {!Number(+id) ? (
            <button
              type="button"
              className="bg-green-400 border py-2 px-4 rounded-xl text-gray-800 hover:bg-green-500"
              onClick={(e) => {
                e.stopPropagation();
                addNew();
              }}
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

      <FlowWithProvider save={setDataMap} data={dataId} />
    </Fragment>
  );
}

export default page;
