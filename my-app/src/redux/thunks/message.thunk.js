import axios from "axios";
// import { URL } from "../actionTypes";
import { toast } from "react-toastify";
const URL =  import.meta.env.VITE_API_URL;

export const sendInstructorMessageThunk = async (data) => {
  const body = data?.body;
  const token = data?.token;
  try {
    const response = await axios.post(
      `${URL}/messages/send_messages_from_student_to_instructor`,
      body,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response?.data?.status === 201) {
      toast.success("Your message Sent to Instructor Successfully!");
      return response.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err?.response;
    return err.message || "error occured";
  }
};

export const sendSupportMessageThunk = async (data) => {
  const body = data?.body;
  const token = data?.token;
  try {
    const response = await axios.post(
      `${URL}/messages/send_messages_from_student_to_support`,
      body,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response?.data?.status === 201) {
      toast.success("Your message Sent to Support Successfully!");
      return response.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err.response;
    return err.message || "error occured";
  }
};

export const sendSupportMessageByInstructorThunk = async (data) => {
  const body = data?.body;
  const token = data?.token;
  try {
    const response = await axios.post(
      `${URL}/messages/send_messages_from_instructor_to_support`,
      body,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response?.data?.status === 201) {
      toast.success("Your message Sent to Support Successfully!");
      return response.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err.response;
    return err.message || "error occured";
  }
};

export const fetchInstructsMessagesThunk = async (token) => {
  if (!token) return null;
  try {
    const response = await axios.get(
      `${URL}/messages/fetch_instructor_messages_for_support`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response?.data?.status === 200) {
      // (response?.data)
      return response.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err.response;
    return err.message || "error occured";
  }
};

export const fetchStudentsMessagesThunk = async (token) => {
  if (!token) return null;
  try {
    const response = await axios.get(
      `${URL}/messages/fetch_student_messages_for_support `,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response?.data?.status === 200) {
      // (response?.data)
      return response.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err.response;
    return err.message || "error occured";
  }
};

export const getInstructorMessagesThunk = async (token) => {
  try {
    const response = await axios.get(
      `${URL}/messages/fetch_student_messages_for_instructor`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response?.data?.status === 200) {
      // (response.data)
      return response?.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err;
    return err.message || "error occured";
  }
};
