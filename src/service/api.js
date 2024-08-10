import axios from "axios";

const API_URL = "http://localhost:8080/api/user";

export const createUser = async (data) => {
  try {
    return await axios.post(`${API_URL}`, data);
  } catch (error) {
    console.log("error while calling createUser api", error.message);
  }
};

export const getAllUsers = async () => {
  try {
    return await axios.get(`${API_URL}`);
  } catch (error) {
    console.log("error while calling getAllUser api", error.message);
  }
};

export const getUserById = async (id) => {
  try {
    return await axios.get(`${API_URL}/${id}`);
  } catch (error) {
    console.log("error while calling getUserById api", error.message);
  }
};

export const updateUser = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log("error while calling updateUser api", error.message);
  }
};

export const deleteUserById = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("error while calling deleteUserById api ", error.message);
  }
};
