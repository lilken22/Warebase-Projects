import axios from "axios";
import { URL } from "../actionTypes";
import { toast } from "react-toastify";

export const initializePaymentThunk = async (data) => {
  const body = {
    email: data.email,
    amount: data.amount,
    country_code: data.country_code,
  };
  try {
    const response = await axios.post(
      `${URL}/checkout/initialize-payment/`,
      body,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response?.data?.status === 201) {
      return response.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err?.response;
    return err;
  }
};

export const verifyPaymentThunk = async (data) => {
  const reference = data?.reference;
  try {
    const response = await axios.get(
      `${URL}/checkout/verify-payment/${reference}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response?.data?.status === 201) {
      // toast.success('Payment verified successfully');
      return response.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err.response;
    return err;
  }
};

export const fetchStudentsPaymentsHistoriesAdminThunk = async (token) => {
  try {
    const response = await axios.get(
      `${URL}/checkout/fetch_all_students_payment_history_for_admin`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response?.data?.status === 200) {
      response.data;
      return response.data;
    }
  } catch (err) {
    // toast.error(err?.response?.data?.message);
    // (err.response);
    return err;
  }
};

export const fetchStudentsPaymentsHistoryThunk = async (token) => {
  try {
    const response = await axios.get(
      `${URL}/checkout/fetch_payment_history_for_one_student`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response?.data?.status === 200) {
      return response.data.data;
    }
  } catch (err) {
    toast.error(err?.response?.data?.message);
    err.response;
    return err?.response?.data?.message || "error occured";
  }
};

export const fetchStudentCurrentCoursePaymentThunk = async (token) => {
  try {
    const response = await axios.get(
      `${URL}/checkout/fetch_current_course_payment`,
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
      return response.data.data;
    }
  } catch (err) {
    return err?.response?.data?.message || "error occured";
  }
};
