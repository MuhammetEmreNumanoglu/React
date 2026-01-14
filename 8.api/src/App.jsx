import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const BASE_URL = "http://localhost:3005";
function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    return response.data.postId;
  };
  useEffect(() => {
    // getUserById(1);
  }, []);

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  useEffect(() => {
    // const newUser = {
    //   username: "Mami",
    //   password: "yy",
    // };
    // createUser(newUser);
  }, []);

  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };
  // useEffect(() => {
  //   updateUser("750d", {
  //     username: "mami2",
  //     password: "zz",
  //   });
  // }, []);

  const deleteByUserId = async (userId) => {
    const deletedUser = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedUser.data);
  };

  // useEffect(()=>{
  //   deleteByUserId("3")
  // },[])
  const BASE_URL1 = "https://jsonplaceholder.typicode.com";

  const getPostById = async (postId) => {
    const response = await axios.get(`${BASE_URL1}/posts/${postId}`);
    return response.data;
  };
  
  const getPost = async () => {
    const a = await getUserById(1);
    const postData = await getPostById(a);
    console.log(postData)
  };

  useEffect(() => {
    getPost();
  }, []);
}

export default App;
