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
        "Content-Type": "application/json",
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

export const fetchPropertiesThunk = async () => {
  try {
    const response = await axios.get(`${URL}/properties/findAll/`);
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
  try {
    const response = await axios.delete(`${URL}/properties/${id}/delete`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.status === 200) {
      toast.success("Property deleted Successfully!");
      return response?.data;
    }
  } catch (err) {
     // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};
