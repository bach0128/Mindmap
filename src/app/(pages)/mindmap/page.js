"use client";
import React, { useEffect, useState } from "react";
import { ReactFlowProvider } from "reactflow";
import { useSelector, useDispatch } from "react-redux";
import { postMap, getAllMap, deleteMap, getMap } from "../../data/fetchData";
import { mindmapSlice } from "../../../redux/slice/mindmapSlice";
import "./[id]/flow.css";
import { useRouter } from "next/navigation";
import Loading from "../../../utils/loading/loading";

const { add } = mindmapSlice.actions;
import Link from "next/link";

function page({ children }) {
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

  return (
    <ReactFlowProvider>
      {loading ? (
        <Loading />
      ) : (
        <div className="flow">
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
              {listMap?.map(({ nodes, edges, name, id }, index) => (
                <tr
                  className="p-4 rounded-md border border-slate-300 mb-2"
                  key={id}
                >
                  <td className="border border-slate-400 border-r-2 w-10">
                    {id}
                  </td>
                  <td className="border border-slate-400 border-r-2">{name}</td>
                  <td className="border border-slate-400 border-r-2">Now</td>
                  <td className="border border-slate-400 border-r-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(id);
                      }}
                    >
                      Sửa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <main>{children}</main> */}
        </div>
      )}
    </ReactFlowProvider>
  );
}

export default page;
