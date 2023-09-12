// appeler le contenu du project 10 avec axios

// import { useEffect, useState } from "react";
import axios from "axios";

export const getToken = async (email: string, password: string) => {
  console.log(email, password);
  try {
    const { data } = await axios.post(
      `http://localhost:3001/api/v1/user/login`,
      {
        email: email,
        password: password,
      }
    );
    return data.body.token;
  } catch (error) {
    return "error";
  }
};

// getUser
export const getUser = async (token: string) => {
  try {
    const header = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      key: "value",
    };
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      bodyParameters,
      header
    );
    return {
      firstName: data.body.firstName,
      lastName: data.body.lastName,
    };
  } catch (error) {
    return "not found";
  }
};

// putUser
export const updateUser = async (
  token: string,
  firstName: string,
  lastName: string
) => {
  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    firstName: firstName,
    lastName: lastName,
  };
  const { data } = await axios.put(
    "http://localhost:3001/api/v1/user/profile",
    bodyParameters,
    header
  );
  return data;
};
