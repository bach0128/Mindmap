"use client";
import FlowWithProvider from "./flow/index";
import { useState, useEffect, Fragment } from "react";
import { postMap, deleteMap, getMap } from "../../../data/fetchData";
import "./flow.css";
import { nanoid } from "nanoid";
import notify from "../../../../utils/toastify/notify";
import { useRouter } from "next/navigation";

function page(props) {
  const { id } = props.params;
  const router = useRouter();
  const [name, setName] = useState("Mindmap no name");
  const [dataId, setDataId] = useState({});
  let dataNew = {};
  const setDataMap = function (nodes, edges) {
    dataNew = { nodes, edges, name };
  };
  const addNew = async () => {
    const _id = await nanoid();
    dataNew = { ...dataNew, _id };
    const res = await postMap(dataNew);
    if (res.ok) {
      notify("Tạo mới thành công!");
      router.push("/mindmap");
    }
  };
  const setMapId = async (id) => {
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
        </div>
      </div>
      <FlowWithProvider setdata={setDataMap} data={dataId} />
    </Fragment>
  );
}

export default page;
