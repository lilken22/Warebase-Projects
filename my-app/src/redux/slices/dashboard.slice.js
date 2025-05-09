"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  fetchAllLeasePropertiesThunk,
  fetchAllSalePropertiesThunk
} from "../thunks/dashboard.thunk";



const initialState = {
  isloading: false,
  error: null,
};



// ===================================charles==============
export const fetchLeaseProperties = createAsyncThunk(
  "fetchLeaseProperties",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchAllLeasePropertiesThunk();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchSaleProperties = createAsyncThunk(
  "fetchSaleProperties",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchAllSalePropertiesThunk();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);




const dashboard_slice = createSlice({
  name: "dashboard_slice",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchLeaseProperties.pending, (state) => {
      state.isloading = true;
    })
    .addCase(fetchLeaseProperties.fulfilled, (state) => {
      state.isloading = false;
      state.error = false;
    })
    .addCase(fetchLeaseProperties.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    })
    .addCase(fetchSaleProperties.pending, (state) => {
      state.isloading = true;
    })
    .addCase(fetchSaleProperties.fulfilled, (state) => {
      state.isloading = false;
      state.error = false;
    })
    .addCase(fetchSaleProperties.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    })
  },
});

export const { } = dashboard_slice.actions;
export default dashboard_slice.reducer;