import axios from "axios";
import { URL } from "../actionTypes";
import { toast } from "react-toastify";

export const createPropertyThunk = async (data) => {
  const token = data?.token;
  const body = data?.body;
  try {
    const response = await axios.post(`${URL}/properties/create/`, body, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response?.status === 201) {
      toast.success("Property Created Successfully!");
      return response?.data;
    }
  } catch (err) {
     // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err?.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};

export const editPropertyThunk = async (data) => {
  const body = data?.body;
  const token = data?.token;
  const id = data?.id;
  try {
    const response = await axios.put(`${URL}/properties/${id}/update`, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.status === 200) {
      toast.success("Property Updated Successfully!");
      return response?.data;
    }
  } catch (err) {
     // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};

export const fetchPropertiesThunk = async (filters) => {
  const { sortField = "date", sortOrder = "DESC", active = 'true', tenure = '' } = filters
  try {
    const response = await axios.get(
      `${URL}/properties/findAll/?sortOrder=${sortOrder}&sortField=${sortField}&active=${active}&tenure=${tenure}`,
      {
        withCredentials: true,
      }
    );

    if (response?.status === 200) {
      response?.data?.data;
      return response?.data;
    }
  } catch (err) {
    err.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};

export const getSinglePropertyThunk = async (id) => {
  try {
    const response = await axios.get(`${URL}/properties/findOne/${id}`);
    if(response.status === 200){
      return response?.data;
    }
  } catch (err) {
    err.response;
    return err;
  }
};

export const deletePropertyThunk = async (data) => {
  const token = data?.token;
  const id = data?.id;
  const type = data?.type || 'soft';

  console.log(id)
  try {
    const response = await axios.delete(
      `${URL}/properties/${id}/delete?deleteType=${type}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response?.status === 200) {
      toast.success("Property unlisted Successfully!");
      return response?.data;
    }
  } catch (err) {
     // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};
