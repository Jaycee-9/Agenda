import axios from "axios";

const url = "http://localhost:8000";

export const userLogin = (loginData) => {
  try {
    const response = axios.post(`${url}/login`, loginData);
    return response;
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

export const addTask = (task) => {
  try {
    const response = axios.post(`${url}/addtask`, task);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getTasks = (userId) => {
  try {
    const response = axios.get(`${url}/tasks?userId=${userId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const detailTaskView = (taskId) => {
  try {
    const response = axios.get(`${url}/detailview?taskId=${taskId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const editTask = (taskId) => {
  try {
    const response = axios.put(`${url}/tasks/edit`, taskId);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (taskId) => {
  try {
    const response = axios.delete(`${url}/tasks/delete?taskId=${taskId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
