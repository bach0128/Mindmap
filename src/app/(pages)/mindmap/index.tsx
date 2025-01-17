"use client";
import React, { useEffect, useState } from "react";
import { getAllMap, deleteMap } from "../../server/fetchData";
import { useRouter } from "next/navigation";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import notify from "../../../utils/toastify/notify";
import { MapDto } from "@/app/interface/map";
import Loading from "@/app/components/loading";

function MindMap() {
  const router = useRouter();
  const [listMap, setListMap] = useState<MapDto[]>([]);
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

  const handleEdit = async (id: string) => {
    router.push(`/mindmap/${id}`);
  };

  const handleDelete = async (id: string) => {
    notify("warn", "Xác nhận xóa mindmap?", true, () => {
      delMap(id);
    });
    const delMap = async (id: string) => {
      try {
        await deleteMap(id);
        notify("success", "Xóa mindmap thành công");
        getData();
      } catch (error) {
        notify("error", "Xóa mindmap xảy ra lỗi");
        router.refresh();
      }
    };
  };
  return (
    <>
      {loading ? <Loading /> : ""}
      <div className="p-3 bg-slate-50 h-[700px] my-5 mx-10">
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
              <th className="border border-slate-400 border-r-2">Created-at</th>
              <th className="border border-slate-400 border-r-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {listMap?.length > 0 &&
              listMap?.map(({ name, id, created_at }, index) => (
                <tr
                  className="p-4 rounded-md border border-slate-300 mb-2"
                  key={index}
                >
                  <td className="text-center border-slate-400  w-10">
                    {index + 1}
                  </td>
                  <td className="text-center border-slate-400 ">{name}</td>
                  <td className="text-center border-slate-400">{created_at}</td>
                  <td className="text-center border-slate-400  px-2 flex items-center justify-center">
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
                        handleDelete(id);
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
    </>
  );
}

export default MindMap;
