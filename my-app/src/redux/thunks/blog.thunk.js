import axios from "axios";
import { URL } from "../actionTypes";
import { toast } from "react-toastify";

export const createBlogThunk = async (data) => {
  const token = data?.token;
  const body = data?.body;

  try {
    const response = await axios.post(`${URL}/blogs/create`, body, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.status === 201) {
      toast.success("Blog Created Successfully!");
      return response?.data;
    }
  } catch (err) {
    // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err?.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};

export const editBlogThunk = async (data) => {
  const body = data?.body;
  const token = data?.token;
  const id = data?.id;
  try {
    const response = await axios.put(`${URL}/blogs/${id}/update`, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.status === 200) {
      toast.success("Blog Updated Successfully!");
      return response?.data;
    }
  } catch (err) {
    // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};

export const createFeaturedBlogThunk = async (data) => {
  const token = data?.token;
  const id = data?.id;
  try {
    const response = await axios.patch(`${URL}/blogs/${id}/featurePost`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.status === 200) {
      toast.success("Blog Made a featured Post Successfully!");
      return response?.data;
    }
  } catch (err) {
    // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};

export const fetchBlogsThunk = async () => {
  try {
    const response = await axios.get(`${URL}/blogs/`);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (err) {
    err.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};

export const getBlogThunk = async (id) => {
  try {
    const response = await axios.get(`${URL}/blogs/${id}/show`);
    return response?.data;
  } catch (err) {
    err.response;
    return err;
  }
};

export const deleteBlogThunk = async (data) => {
  const token = data?.token;
  const id = data?.id;
  try {
    const response = await axios.delete(`${URL}/blogs/${id}/delete`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.status === 200) {
      toast.success("Blog Updated Successfully!");
      return response?.data;
    }
  } catch (err) {
    // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};
