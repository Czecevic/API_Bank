// appeler le contenu du project 10 avec axios

// import { useEffect, useState } from "react";
import axios from "axios";

export const getToken = async (email: string, password: string) => {
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

// createUser
export const createUser = async (
  emailUser: string,
  passwordUser: string,
  firstNameOfUser: string,
  lastNameOfUser: string
) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {
        email: emailUser,
        password: passwordUser,
        firstName: firstNameOfUser,
        lastName: lastNameOfUser,
      }
    );
    console.log(data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// putUser
export const updateUserApi = async (
  firstName: string,
  lastName: string,
  token: string
) => {
  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };
  console.log(firstName, lastName, token);
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
