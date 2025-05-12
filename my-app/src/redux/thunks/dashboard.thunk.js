import axios from "axios";
import { URL } from "../actionTypes";
import { toast } from "react-toastify";


export const fetchAllTotalPropertiesThunk = async () => {
  try {
    const response = await axios.get(`${URL}/dashboard/fetch_all_properties`);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err?.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};

export const fetchAllLeasePropertiesThunk = async () => {
  try {
    const response = await axios.get(`${URL}/dashboard/fetch_all_lease_properties`);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err?.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};

export const fetchAllSharedPropertiesThunk = async () => {
  try {
    const response = await axios.get(`${URL}/dashboard/fetch_all_shared_properties`);
    console.log(response.data)
    if (response?.status === 200) {
      console.log(response.data)
      return response?.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err?.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};


export const fetchAllSalePropertiesThunk = async () => {
  try {
    const response = await axios.get(`${URL}/dashboard/fetch_all_sale_properties`);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err?.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};

export const fetchLatestPropertiesThunk = async () => {
  try {
    const response = await axios.get(`${URL}/dashboard/fetch_all_latest_properties`);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err?.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};
