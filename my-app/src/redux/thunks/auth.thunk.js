import axios from "axios";
import { URL } from "../actionTypes";
import { toast } from "react-toastify";
import { setItemToLocalStorage } from "../../utitlity/storage";

export const testApiThunk = async () => {
  try {
    const response = await axios.get(`${URL}/test`);
    console.log(response)
    if (response?.status === 200) {
      toast.success(response?.data?.message);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
    return error;
  }
};

export const authenticateUserThunk = async (data) => {
  try {
    const response = await axios.post(`${URL}/auth/login/`, {...data});
    if (response?.status === 200) {
      setItemToLocalStorage("access_token", response?.data?.token);
      setItemToLocalStorage("user_data", response?.data?.data);
      toast.success(response?.data?.message || "Sign In complete");
      return response.data;
    }
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
    return error;
  }
};

export const deauthenticateThunk = async () => {
  return true;
};

export const signupUserThunk = async (user) => {
  try {
    const response = await axios.post(`${URL}/register/signup/`, user);
    if (response?.data?.status === 201) {
      toast.success(
        response?.data?.message || "Sign Up complete. Taking you to Login Page!"
      );
      return response.data;
    }
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.message);
    return err;
  }
};

export const enrollUserThunk = async (user) => {
  try {
    const response = await axios.post(`${URL}/register/enroll_now/`, user);
    if (response?.data?.status === 201) {
      toast.success(
        response?.data?.message || "Sign Up complete. Taking you to Login Page!"
      );
      setItemToLocalStorage("current_user_email", response.data?.data?.email);
      setItemToLocalStorage("user_data", response?.data?.data);
      return response.data;
    }
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.message);
    return err;
  }
};

export const enrollUserLaterThunk = async (data) => {
  const token = data.token;
  const body = {
    referral_link: data.referral_link ? data.referral_link : "",
    course: data.course,
  };
  try {
    const response = await axios.patch(`${URL}/register/enroll_later/`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.status === 200) {
      toast.success(
        response?.data?.message || "Sign Up complete. Taking you to Login Page!"
      );
      setItemToLocalStorage("current_user_email", response.data?.data?.email);
      return response.data;
    }
  } catch (err) {
    console.log(err);
    toast.error(err?.response?.data?.message);
    return err?.response?.data?.message || "An Error Occured Pls Contact Admin";
  }
};

export const editUserPasswordThunk = async (data) => {
  const dataDetails = {
    token: data?.token,
    password: data?.password,
  };
  try {
    const response = await axios.patch(
      `${URL}/users/reset/password/`,
      dataDetails,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    toast.success(response?.data?.message || "password updated pls login ");
    return true;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const updateInstructorPasswordThunk = async (data) => {
  try {
    const response = await axios.patch(
      `${URL}/users/reset_instructor/password/`,
      data,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response?.data?.status === 200) {
      toast.success(response?.data?.message || "password updated pls login ");
      return response.data;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const forgotPasswordThunk = async (userEmail) => {
  const body = {
    email: userEmail,
  };
  try {
    const response = await axios.post(`${URL}/users/forgot/password/`, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    toast.success(response?.data?.message || "email sent to your inbox");
    return response.data;
  } catch (err) {
    console.log(err);
    return err.message || "an error occured";
  }
};
