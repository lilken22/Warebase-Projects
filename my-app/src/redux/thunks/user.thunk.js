import axios from "axios";
import { URL } from "../actionTypes";
import { toast } from "react-toastify";
import { setItemToLocalStorage } from "../../utitlity/storage";


export const getVisitingUserInfoThunk = async (data={}) => {
  const YOUR_ACCESS_KEY = data?.YOUR_ACCESS_KEY || 'f3eb85dea1a5ced92a65d7918c9bb058';
  // const token = data?.token;
  console.log(YOUR_ACCESS_KEY)
  try {
    const response = await axios.get(`https://api.ipstack.com/check?access_key=${YOUR_ACCESS_KEY}&fields=country_code`);
    if (response?.status === 200) {
      console.log(response?.data)
      return response?.data;
    }
  } catch (err) {
     // note i changed the text (message to toast because it was giving an error in github)
    toast.error(
      err?.response?.data?.message ||
        "An error occured while sending data to the server."
    );
    err?.response;
    console.error("Error creating user:", err);
    return err.message || "error occured";
  }
};

export const createUserThunk = async (data) => {
  const body = data?.body;
  const token = data?.token;
  try {
    const response = await axios.post(`${URL}/users/create/`, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response?.data?.status === 201) {
      toast.success("User Created Successfully!");
      return response?.data?.data;
    }
  } catch (err) {
     // note i changed the text (message to toast because it was giving an error in github)
    toast.error(
      err?.response?.data?.message ||
        "An error occured while sending data to the server."
    );
    err?.response;
    console.error("Error creating user:", err);
    return err.message || "error occured";
  }
};

export const editUserThunk = async (data) => {
  const body = data?.body;
  const token = data?.token;
  try {
    const response = await axios.put(`${URL}/users/update/`, body, {
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

export const fetchUsersThunk = async (token) => {
  if (!token) return null;
  try {
    const response = await axios.get(`${URL}/users/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response?.data;
  } catch (err) {
    err.response;
    return err.message || "error occured";
  }
};

export const fetchInstructorsThunk = async (token) => {
  try {
    const response = await axios.get(`${URL}/users/instructor/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.status === 200) {
      setItemToLocalStorage("data_inst", response?.data?.data);
      return response?.data?.data;
    }
  } catch (err) {
    err.response;
    return err;
  }
};

export const fetchStudentsThunk = async (token) => {
  try {
    const response = await axios.get(`${URL}/users/student/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response?.data?.status === 200) {
      setItemToLocalStorage("data_stud", response?.data?.data);
      return response?.data?.data;
    }
  } catch (err) {
    err.response;
    return err.message || "error occured";
  }
};

export const getUserThunk = async (token) => {
  try {
    const response = await axios.get(`${URL}/users/user/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response?.data?.status === 200) {
      return response?.data?.data;
    }
  } catch (err) {
    err.response;
    return err.message || "error occured";
  }
};

export const activateUserThunk = async (data) => {
  const { token, email, id } = data;
  const body = {
    email: email,
  };

  try {
    const response = await axios.patch(`${URL}/users/activate/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response?.data?.status === 200) {
      toast.success(response?.data?.message);
      return response?.data;
    }
  } catch (err) {
    err.response;
    return err.message || "error occured";
  }
};

export const deactivateUserThunk = async (data) => {
  const { token, email, id } = data;
  const body = {
    email: email,
  };

  try {
    const response = await axios.patch(`${URL}/users/deactivate/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response?.data?.status === 200) {
      toast.success(response?.data?.message);
      return response?.data;
    }
  } catch (err) {
    err.response;
    return err.message || "error occured";
  }
};

export const updateProfilePictureThunk = async (data) => {
  const token = data.token;
  const body = data.body;
  try {
    const response = await axios.patch(`${URL}/users/user/update_img/`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    if (response?.data?.status === 200) {
      toast.success(response.data.message);
      setItemToLocalStorage("user_data", response?.data?.data);
      return response?.data;
    }
  } catch (err) {
    err.response;
    return err.message || "error occured";
  }
};

export const getUserDetailAdminThunk = async (data) => {
  const { token, id } = data;
  if (!token) return null;
  try {
    const response = await axios.get(`${URL}/users/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response?.data?.status === 200) {
      setItemToLocalStorage("user_data", response?.data?.data);
      return response?.data?.data;
    }
  } catch (err) {
    err.response;
    return err.message || "error occured";
  }
};

export const deleteUserThunk = async (data) => {
  const id = data?.id;
  const token = data?.token;
  try {
    const response = await axios.delete(`${URL}/users/delete/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
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

export const archiveUserThunk = async (data) => {
  const id = data?.id;
  const token = data?.token;
  try {
    const response = await axios.patch(`${URL}/users/archive/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response?.data?.status === 200) {
      toast.success("User archived successfully");
      return true;
    }
  } catch (err) {
    // notInProgress();
    toast.error(err?.response?.data?.message);
    err;
    return err.message || "error occured";
  }
};
