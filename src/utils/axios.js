import axios from "axios";

const mockInstance = axios.create({
  baseURL: `${process.env.MOCK_PATH}`,
  timeout: 1000,
});

export {
    mockInstance,
};