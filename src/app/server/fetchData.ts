import axios from "axios";
import { MapDto } from "../interface/map";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const postMap = async (data: MapDto) => {
  try {
    const res = await axiosInstance.post("/maps", { data });
    return res;
  } catch (error) {
    console.error("Error posting map:", error);
    throw error;
  }
};

export const deleteMap = async (id: string) => {
  try {
    const res = await axiosInstance.delete(`/maps/${id}`);
    return res;
  } catch (error) {
    console.error("Error deleting map:", error);
    throw error;
  }
};

export const getAllMap = async (): Promise<MapDto[]> => {
  try {
    const res = await axiosInstance.get("/maps");
    return res.data as MapDto[];
  } catch (error) {
    console.error("Error fetching all maps:", error);
    throw error;
  }
};

export const getMapDetail = async (id: string): Promise<{ data: MapDto }> => {
  try {
    const res = await axiosInstance.get(`/maps/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching map:", error);
    throw error;
  }
};

export const deleteAllMap = async () => {
  try {
    const res = await axiosInstance.delete("/maps");
    return res;
  } catch (error) {
    console.error("Error deleting all maps:", error);
    throw error;
  }
};
