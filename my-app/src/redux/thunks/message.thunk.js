import axios from "axios";
import { URL } from "../actionTypes";
import { toast } from "react-toastify";

export const sendContactMessageThunk = async (data) => {
  try {
    const response = await axios.post(`${URL}/message/contact/`, { ...data });
    if (response?.status === 200) {
      toast.success("message sent Successfully!");
      return response?.status;
    }
  } catch (err) {
    // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err?.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};

export const sendExploreMessageThunk = async (data) => {
  try {
    const response = await axios.post(`${URL}/message/explore-more`, {
      ...data,
    });
    if (response?.status === 200) {
      toast.success("message sent Successfully!");
      return response?.status;
    }
  } catch (err) {
    // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};

export const subscribeNewsletterThunk = async (data) => {
  try {
    const response = await axios.post(`${URL}/message/subscribe/`, { ...data });
    if (response?.status === 200) {
      toast.success("message sent Successfully!");
      return response?.status;
    }
  } catch (err) {
    // note i changed the text (message to toast because it was giving an error in github)
    toast.error(err?.response?.data?.message);
    err.response;
    return err.response?.data?.message || "an error occured check console ";
  }
};
