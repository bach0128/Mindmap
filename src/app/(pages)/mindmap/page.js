"use client";
import React, { useEffect, useState } from "react";
import { ReactFlowProvider } from "reactflow";
// import { useSelector, useDispatch } from "react-redux";
import { postMap, getAllMap, deleteMap, getMap } from "../../data/fetchData";
import { mindmapSlice } from "../../../redux/slice/mindmapSlice";
import "./[id]/flow.css";
import { useRouter } from "next/navigation";
import Loading from "../../../utils/loading/loading";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import notify from "../../../utils/toastify/notify";

const { add } = mindmapSlice.actions;

function page() {
  const router = useRouter();
  // let listMap = useSelector((state) => state.mindmap.listMap);
  const [listMap, setListMap] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const listDataFetch = await getAllMap();
    if (listDataFetch) {
      setLoading(false);
    }
    setListMap(listDataFetch);
  };

  useEffect(() => {
    getData();
  }, []);
  const handleAdd = () => {
    router.push(`/mindmap/create`);
  };

  const handleEdit = async (id) => {
    router.push(`/mindmap/${id}`);
  };

  const handleDelete = async (id, index) => {
    // confirm(`Are you sure you want to delete mindmap`)
    notify("warn", "Xác nhận xóa mindmap?", true, () => {
      delMap(id, index);
    });
    const delMap = async () => {
      const res = await deleteMap(id);
      if (res.ok) {
        notify("success", "Xóa mindmap thành công");
        const newArr = listMap.slice(0, index).concat(listMap.slice(index + 1));
        setListMap(newArr);
      }
    };
  };

  return (
    <ReactFlowProvider>
      {loading ? (
        <Loading />
      ) : (
        <div className="flow">
          {console.log(listMap)}
          <button
            className="btn bg-blue-500 p-3 border rounded-xl mb-3 hover:bg-blue-400"
            onClick={(e) => {
              e.stopPropagation();
              handleAdd();
            }}
          >
            Create
          </button>

          <table className="table-auto rounded-sm w-full border-collapse border border-slate-400">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-slate-400 border-r-2 w-10">Id</th>
                <th className="border border-slate-400 border-r-2">Name</th>
                <th className="border border-slate-400 border-r-2">
                  Created-at
                </th>
                <th className="border border-slate-400 border-r-2">Button</th>
              </tr>
            </thead>
            <tbody>
              {listMap?.map(({ name, id, created_at }, index) => (
                <tr
                  className="p-4 rounded-md border border-slate-300 mb-2"
                  key={id}
                >
                  <td className="border border-slate-400 border-r-2 w-10">
                    {index + 1}
                  </td>
                  <td className="border border-slate-400 border-r-2">{name}</td>
                  <td className="border border-slate-400 border-r-2">
                    {created_at}
                  </td>
                  <td className="border border-slate-400 border-r-2 px-2 flex items-center justify-center">
                    <button
                      className="p-1 mr-2 bg-green-400 "
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(id);
                      }}
                    >
                      <FiEdit />
                    </button>
                    <button
                      className="p-1 mr-2 bg-red-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(id, index);
                      }}
                    >
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </ReactFlowProvider>
  );
}

export default page;
