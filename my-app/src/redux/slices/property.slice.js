import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchPropertiesThunk,
  createPropertyThunk,
  getSinglePropertyThunk
} from "../thunks/property.thunk";

const initialState = {
  isLoading: false,
  error: null,
  mesaage: null,
  properties: [],
  property: {},
};

// ===================================charles==============
export const fetchProperties = createAsyncThunk(
  "api/fetchProperties",
  async (sortData, { rejectWithValue }) => {
    try {
      return await fetchPropertiesThunk(sortData);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSingleProperty = createAsyncThunk(
  "api/getSingleProperty",
  async (id, { rejectWithValue }) => {
    try {
      return await getSinglePropertyThunk(id);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createProperty = createAsyncThunk(
  "api/createProperty",
  async (data, { rejectWithValue }) => {
    try {
      return await createPropertyThunk(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const property_slice = createSlice({
  name: "property_slice",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.properties = action?.payload?.data || [];
        state.mesaage = action?.payload?.message;
      })
      .addCase(fetchProperties.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getSingleProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProperty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.property = action?.payload?.data || {}
      })
      .addCase(getSingleProperty.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createProperty.pending, (state) => {
        state.isLoading = true;
      })
      // i removed this action text that will be after the state because it not allowing the code to push on git hub it's bringing an error (action) the error is that action is defined but not used
      .addCase(createProperty.fulfilled, (state) => {
        state.isLoading = false;
        state.error = false;
      })
      .addCase(createProperty.rejected, (state) => {
        state.isLoading = false;
      })
    //   .addCase(editBlog.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(editBlog.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = false;
    //   })
    //   .addCase(editBlog.rejected, (state) => {
    //     state.isLoading = false;
    //   });
  },
});

// export const {} = property_slice.actions;
export default property_slice.reducer;
