
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  updateAdminPasswordThunk,
  updateAdminProfileThunk,
  getUserDetailAdminThunk,
  deleteAdminUserThunk,
  updateSupportContactThunk
 } from "../thunks/user.thunk";



const initialState = {
  isLoading: false,
  error: null,
  msg: null,
  adminData: {},
  supportData: {},
};



// ===================================charles==============

export const getCurrentUserData = createAsyncThunk(
  "api/getCurrentUserData",
  async (data, { rejectWithValue }) => {
    try {
      return await getUserDetailAdminThunk(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateCurrentUserData = createAsyncThunk(
  "api/updateCurrentUserData",
  async (data, { rejectWithValue }) => {
    try {
      return await updateAdminProfileThunk(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateCurrentUserPasswordData = createAsyncThunk(
  "api/updateCurrentUserPasswordData",
  async (data, { rejectWithValue }) => {
    try {
      return await updateAdminPasswordThunk(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCurrentUserData = createAsyncThunk(
  "api/deleteCurrentUserData",
  async (data, { rejectWithValue }) => {
    try {
      return await deleteAdminUserThunk(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateSupportContactData = createAsyncThunk(
  "api/updateSupportContactData",
  async (data, { rejectWithValue }) => {
    try {
      return await updateSupportContactThunk(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);





const user_slice = createSlice({
  name: "user_slice",
  initialState,
  reducers: {
    setCurrentUserDetail: (state, action) => {
      state.user = action.payload;
    }

  },
  extraReducers: (builder) => {
    builder
    .addCase(getCurrentUserData.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getCurrentUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.adminData = action?.payload?.data || {};
      state.supportData = action?.payload?.supportData || {};
    })
    .addCase(getCurrentUserData.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
  },
});

export const {setCurrentUserDetail} = user_slice.actions;
export default user_slice.reducer;