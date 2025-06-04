import axios from "axios";
import { URL } from "../actionTypes";
import { toast } from "react-toastify";
import { setItemToLocalStorage } from "../../utitlity/storage";


export const updateAdminProfileThunk = async (data) => {
  const body = data?.body;
  const token = data?.token;
  try {
    const response = await axios.put(`${URL}/admin/update_profile/`, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.status === 200) {
      toast.success(
        response?.data?.message || "You informations have been Updated"
      );
      setItemToLocalStorage("user_data", response?.data?.data);
      return response?.data?.data;
    }
  } catch (err) {
     // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err.response;
    return err.message || "error occured";
  }
};

export const updateAdminPasswordThunk = async (data) => {
  const body = data?.body;
  const token = data?.token;
  try {
    const response = await axios.patch(`${URL}/admin/update_password/`, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.status === 200) {
      toast.success(
        response?.data?.message || "You informations have been Updated"
      );
      return response?.data;
    }
  } catch (err) {
     // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err.response;
    return err.message || "error occured";
  }
};


export const getUserDetailAdminThunk = async (data) => {
  const { token} = data;
  if (!token) return null;
  try {
    const response = await axios.get(`${URL}/admin/current-user/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

     console.log(response);
    if (response?.status === 200) {
      console.log(response)
      setItemToLocalStorage("user_data", response?.data?.data);
      return response?.data;
    }
  } catch (err) {
    err.response;
    return err.message || "error occured";
  }
};

export const deleteAdminUserThunk = async (data) => {
  const id = data?.id;
  const token = data?.token;
  try {
    const response = await axios.delete(
      `${URL}/admin/${id}/delete_account/`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response?.data?.status === 200) {
      toast.success("User Data deleted successfully");
      return true;
    }
  } catch (err) {
    // notInProgress();
    toast.error(err?.response?.data?.message);
    err;
    return err.message || "error occured";
  }
};

export const updateSupportContactThunk = async (data) => {
  const body = data?.body;
  const token = data?.token;
  try {
    const response = await axios.put(
      `${URL}/admin/update_company_support_details/`,
      body,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response?.data?.status === 200) {
      toast.success(
        response?.data?.message || "You informations have been Updated"
      );
      return response?.data;
    }
  } catch (err) {
    // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err.response;
    return err.message || "error occured";
  }
};

