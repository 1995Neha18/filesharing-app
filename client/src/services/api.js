import axios from "axios";

export const uploadFile = async (data) => {
  const API_URL = "http://localhost:8800/";
  try {
    const response = await axios.post(`${API_URL}/upload`, data);
    return response.data;
  } catch (error) {
    console.log("Error while uploading file", error.message);
  }
};
