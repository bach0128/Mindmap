import axios from "axios";
import { MapDto } from "../interface/map";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postMap = async (data: MapDto) => {
  try {
    const res = await axiosInstance.post("/listMap", { newMap: data });
    return res;
  } catch (error) {
    console.error("Error posting map:", error);
    throw error;
  }
};

export const deleteMap = async (id: string) => {
  try {
    const res = await axiosInstance.delete(`/listMap/${id}`);
    return res;
  } catch (error) {
    console.error("Error deleting map:", error);
    throw error;
  }
};

export const getAllMap = async () => {
  try {
    const res = await axiosInstance.get("/listMap");
    return res.data;
  } catch (error) {
    console.error("Error fetching all maps:", error);
    throw error;
  }
};

export const getMap = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/listMap/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching map:", error);
    throw error;
  }
};

export const deleteAllMap = async () => {
  try {
    const res = await axiosInstance.delete("/listMap");
    return res;
  } catch (error) {
    console.error("Error deleting all maps:", error);
    throw error;
  }
};
