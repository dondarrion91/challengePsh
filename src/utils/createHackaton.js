import { mockInstance } from "./axios.js";

export const createHackaton = async () => {
  const { data } = await mockInstance.get("?results=10");
};