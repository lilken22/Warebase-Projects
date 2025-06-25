"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  fetchAllLeasePropertiesThunk,
  fetchAllSalePropertiesThunk,
  fetchAllTotalPropertiesThunk,
  fetchLatestPropertiesThunk,
  fetchAllSharedPropertiesThunk
} from "../thunks/dashboard.thunk";



const initialState = {
  isloading: false,
  error: null,
  totalProperties: 0,
  totalLeaseProperties: 0,
  totalSaleProperties: 0,
  totalSharedProperties: 0,
  latestProperties: []
};



// ===================================charles==============
export const fetchAllTotalProperties = createAsyncThunk(
  "fetchAllTotalProperties",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchAllTotalPropertiesThunk();
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchLeaseProperties = createAsyncThunk(
  "fetchLeaseProperties",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchAllLeasePropertiesThunk();
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchSharedProperties = createAsyncThunk(
  "fetchSharedProperties",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchAllSharedPropertiesThunk();
      return res;
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
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchLatestProperties = createAsyncThunk(
  "fetchLatestProperties",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchLatestPropertiesThunk();
      return res;
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
    .addCase(fetchLeaseProperties.fulfilled, (state, action) => {
      state.isloading = false;
      state.error = false;
      state.totalLeaseProperties = action?.payload?.data || 0;
    })
    .addCase(fetchLeaseProperties.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    })
    .addCase(fetchSharedProperties.pending, (state) => {
      state.isloading = true;
    })
    .addCase(fetchSharedProperties.fulfilled, (state, action) => {
      state.isloading = false;
      state.error = false;
      state.totalSharedProperties = action?.payload?.data || 0;
    })
    .addCase(fetchSharedProperties.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    })
    .addCase(fetchSaleProperties.pending, (state) => {
      state.isloading = true;
    })
    .addCase(fetchSaleProperties.fulfilled, (state, action) => {
      state.isloading = false;
      state.error = false;
      state.totalSaleProperties = action?.payload?.data || 0;
    })
    .addCase(fetchSaleProperties.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    })
    .addCase(fetchAllTotalProperties.pending, (state) => {
      state.isloading = true;
    })
    .addCase(fetchAllTotalProperties.fulfilled, (state, action) => {
      state.isloading = false;
      state.error = false;
      state.totalProperties = action?.payload?.data || 0;
    })
    .addCase(fetchAllTotalProperties.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    })
    .addCase(fetchLatestProperties.pending, (state) => {
      state.isloading = true;
    })
    .addCase(fetchLatestProperties.fulfilled, (state, action) => {
      state.isloading = false;
      state.error = false;
      state.latestProperties = action?.payload?.data || [];
    })
    .addCase(fetchLatestProperties.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    })
  },
});

export const {} = dashboard_slice.actions;
export default dashboard_slice.reducer;